import type { Candidate } from '@/types/common';

const STORAGE_KEY = 'jst_candidates';

function getFromStorage(): Candidate[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(data: Candidate[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function mockSubmitCandidate(
  data: Omit<Candidate, 'id' | 'createdAt'>,
): Candidate {
  const candidate: Candidate = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existing = getFromStorage();
  existing.push(candidate);
  saveToStorage(existing);

  return candidate;
}

export function mockGetCandidates(): Candidate[] {
  return getFromStorage();
}

export function mockGetCandidateById(id: string): Candidate | undefined {
  return getFromStorage().find((c) => c.id === id);
}

export function mockUpdateCandidateStatus(
  id: string,
  status: Candidate['status'],
): Candidate | null {
  const candidates = getFromStorage();
  const index = candidates.findIndex((c) => c.id === id);
  if (index === -1) return null;
  candidates[index] = { ...candidates[index], status };
  saveToStorage(candidates);
  return candidates[index];
}

export function mockDeleteCandidate(id: string): boolean {
  const candidates = getFromStorage();
  const filtered = candidates.filter((c) => c.id !== id);
  if (filtered.length === candidates.length) return false;
  saveToStorage(filtered);
  return true;
}
