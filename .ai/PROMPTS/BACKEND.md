# Backend & Data Layer Prompt

## Service Layer Pattern

Never access APIs or databases directly from components.

Always create a service layer:

```text
services/
├── mock/         # Current mock implementations (localStorage)
├── api/          # Future: real API clients (Supabase)
└── integrations/ # Future: third-party integrations (n8n, WhatsApp)
```

## Mock Services

Current implementation uses `localStorage` for mock data persistence.
Each entity has its own mock service file:

- `services/mock/clientes.ts` — Budget requests (leads)
- `services/mock/parceiros.ts` — Partners
- `services/mock/fornecedores.ts` — Suppliers
- `services/mock/curriculos.ts` — Candidates (careers)
- `services/mock/contatos.ts` — Contact messages
- `services/mock/services.ts` — Service catalog
- `services/mock/auth.ts` — Authentication mock
- `services/mock/index.ts` — Barrel export

## Migration Strategy

When Supabase is integrated:

1. Replace `services/mock/` with `services/api/`
2. Same interface/signature — `mockSubmitBudget` → `apiSubmitBudget`
3. Components do not change
4. Services handle Supabase client, RLS, and error handling

## Repository Pattern

```typescript
// Each service should implement a repository-like interface
// Example interface:
interface IBudgetRepository {
  submit(data: BudgetFormData): Promise<BudgetRequest>;
  getAll(): Promise<BudgetRequest[]>;
  getById(id: string): Promise<BudgetRequest | null>;
  updateStatus(
    id: string,
    status: BudgetRequestStatus,
  ): Promise<BudgetRequest | null>;
  delete(id: string): Promise<boolean>;
}
```

## Future Integrations

- Supabase: Auth, PostgreSQL, Storage, RLS, Edge Functions
- n8n: Webhook triggers, automation workflows
- WhatsApp Business API: Lead notifications
- SMTP: Email notifications
- Google Maps: Location services
