import type { Supplier } from '@/types/common';

const STORAGE_KEY = 'jst_suppliers';

function getFromStorage(): Supplier[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(data: Supplier[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function mockSubmitSupplier(
  data: Omit<Supplier, 'id' | 'createdAt'>,
): Supplier {
  const supplier: Supplier = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existing = getFromStorage();
  existing.push(supplier);
  saveToStorage(existing);

  return supplier;
}

export function mockGetSuppliers(): Supplier[] {
  return getFromStorage();
}

export function mockGetSupplierById(id: string): Supplier | undefined {
  return getFromStorage().find((s) => s.id === id);
}

export function mockUpdateSupplierStatus(
  id: string,
  status: Supplier['status'],
): Supplier | null {
  const suppliers = getFromStorage();
  const index = suppliers.findIndex((s) => s.id === id);
  if (index === -1) return null;
  suppliers[index] = { ...suppliers[index], status };
  saveToStorage(suppliers);
  return suppliers[index];
}

export function mockDeleteSupplier(id: string): boolean {
  const suppliers = getFromStorage();
  const filtered = suppliers.filter((s) => s.id !== id);
  if (filtered.length === suppliers.length) return false;
  saveToStorage(filtered);
  return true;
}
