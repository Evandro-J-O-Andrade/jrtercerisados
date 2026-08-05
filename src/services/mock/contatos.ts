import type { ContactFormData } from '@/types/common';

const STORAGE_KEY = 'jst_contacts';

function getFromStorage(): ContactFormData[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(data: ContactFormData[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function mockSubmitContact(data: ContactFormData): ContactFormData {
  const contact: ContactFormData = {
    ...data,
  };

  const existing = getFromStorage();
  existing.push(contact);
  saveToStorage(existing);

  return contact;
}

export function mockGetContacts(): ContactFormData[] {
  return getFromStorage();
}
