# Automations Context

## Architecture Overview

```text
Usuário
   ↓
Formulário (React)
   ↓
Supabase (database)
   ↓
n8n (webhook trigger)
   ↓
───────────────
│             │
Email     WhatsApp
│             │
│             │
Equipe     Cliente
│
Dashboard
```

## Flow

### 1. Budget Request (Lead)

When a user submits a budget request:

1. Form data is saved to `orcamentos` table in Supabase
2. Status is set to `new`
3. n8n webhook is triggered
4. n8n sends:
   - Email to commercial team
   - Email to manager
   - WhatsApp notification
5. User is redirected to WhatsApp with a pre-filled message

### 2. Trabalhe Conosco (Recruitment)

When a candidate submits an application:

1. Form data is saved to `curriculos` table in Supabase
2. Resume text is stored (future: PDF upload to Storage)
3. Status is set to `received`
4. n8n webhook is triggered
5. n8n sends:
   - Email to HR team
   - WhatsApp message to candidate with next steps
6. User is redirected to WhatsApp

### 3. Partners

When a partner company registers:

1. Form data is saved to `parceiros` table
2. Status is set to `pending`
3. n8n webhook triggered
4. n8n sends notification to Commercial B2B team
5. User redirected to WhatsApp

### 4. Suppliers

When a supplier registers:

1. Form data is saved to `fornecedores` table
2. Status is set to `active` (or `inactive` after review)
3. n8n webhook triggered
4. n8n sends notification to Procurement team
5. User redirected to WhatsApp

### 5. Contact

When a user sends a contact message:

1. Form data is saved to `contatos` table
2. n8n webhook triggered
3. n8n sends email to support team
4. n8n sends WhatsApp notification to atendimento

---

## Future n8n Workflows

- Lead scoring
- SLA timers (follow-up reminders)
- WhatsApp bot integration
- Email template automation
- Google Calendar appointment scheduling
- Audit logging
- CRM integration (lead creation)

---

## Form-to-Team Mapping

| Formulario       | Equipe          |
| ---------------- | --------------- |
| Orçamento        | Comercial       |
| Trabalhe Conosco | RH              |
| Parceiros        | Comercial B2B   |
| Fornecedores     | Compras         |
| Contato          | Atendimento     |
| Suporte          | Suporte Técnico |
