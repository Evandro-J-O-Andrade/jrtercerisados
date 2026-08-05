import type { Partner } from '@/types/common';

const STORAGE_KEY = 'jst_partners';

function getFromStorage(): Partner[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(data: Partner[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function mockSubmitPartner(
  data: Omit<Partner, 'id' | 'createdAt'>,
): Partner {
  const partner: Partner = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existing = getFromStorage();
  existing.push(partner);
  saveToStorage(existing);

  return partner;
}

export function mockGetPartners(): Partner[] {
  return getFromStorage();
}

export function mockGetPartnerById(id: string): Partner | undefined {
  return getFromStorage().find((p) => p.id === id);
}

export function mockUpdatePartnerStatus(
  id: string,
  status: Partner['status'],
): Partner | null {
  const partners = getFromStorage();
  const index = partners.findIndex((p) => p.id === id);
  if (index === -1) return null;
  partners[index] = { ...partners[index], status };
  saveToStorage(partners);
  return partners[index];
}

export function mockDeletePartner(id: string): boolean {
  const partners = getFromStorage();
  const filtered = partners.filter((p) => p.id !== id);
  if (filtered.length === partners.length) return false;
  saveToStorage(filtered);
  return true;
}
