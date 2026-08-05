import type { BudgetRequest } from '@/types/common';

const STORAGE_KEY = 'jst_budgets';

function getFromStorage(): BudgetRequest[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(data: BudgetRequest[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function mockSubmitBudget(
  data: Omit<BudgetRequest, 'id' | 'createdAt'>,
): BudgetRequest {
  const budget: BudgetRequest = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existing = getFromStorage();
  existing.push(budget);
  saveToStorage(existing);

  return budget;
}

export function mockGetBudgets(): BudgetRequest[] {
  return getFromStorage();
}

export function mockGetBudgetById(id: string): BudgetRequest | undefined {
  return getFromStorage().find((b) => b.id === id);
}

export function mockUpdateBudgetStatus(
  id: string,
  status: BudgetRequest['status'],
): BudgetRequest | null {
  const budgets = getFromStorage();
  const index = budgets.findIndex((b) => b.id === id);
  if (index === -1) return null;
  budgets[index] = { ...budgets[index], status };
  saveToStorage(budgets);
  return budgets[index];
}

export function mockDeleteBudget(id: string): boolean {
  const budgets = getFromStorage();
  const filtered = budgets.filter((b) => b.id !== id);
  if (filtered.length === budgets.length) return false;
  saveToStorage(filtered);
  return true;
}
