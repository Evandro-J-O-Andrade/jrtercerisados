# Future Context

## Roadmap Evolution

### Phase 1 — Demonstration (Current)

- React + TypeScript + Vite
- Mock localStorage services
- WhatsApp Business redirects
- Email via Forms.app (planned)
- Simulated data only

### Phase 2 — MVP

Replace mock services with real services:

- React Hook Form + Zod (already done)
- Supabase (PostgreSQL, Auth, Storage)
- No UI changes needed

### Phase 3 — Enterprise

- n8n workflow automation
- WhatsApp Business API (official Meta API)
- SMTP email delivery
- Internal CRM dashboard
- Multi-tenant architecture
- AI agents for WhatsApp
- Google Maps integration
- Google Analytics

---

## AI Agents

### Agente Comercial

- Atende dúvidas sobre serviços
- Agenda visitas
- Qualifica oportunidades
- Integra com CRM

### Agente de Recrutamento (RH)

- Conversa com candidatos
- Explica vagas
- Acompanha processos seletivos

### Agente de Parcerias

- Atende empresas interessadas
- Explica condições de parceria
- Coleta dados iniciais

### Agente de Compras

- Recebe contatos de fornecedores
- Organiza propostas
- Classifica fornecedores

### Agente de Suporte

- Responde clientes ativos
- Abre chamados
- Fornece orientações

---

## CRM Pipeline

### Sales Pipeline

```
Novo Lead
  → Em Atendimento
  → Negociação
  → Proposta Enviada
  → Fechado (Ganho/Perdido)
```

### Recruitment Pipeline

```
Currículo Recebido
  → Em Análise
  → Entrevista
  → Aprovado / Rejeitado
```

---

## Database Evolution

### Current (Mock)

- localStorage per entity
- No relationships
- No RLS

### Future (Supabase)

- PostgreSQL tables with foreign keys
- Row Level Security (RLS)
- Real-time subscriptions
- Storage buckets for file uploads
- Edge Functions for serverless logic

### Tables Plan

| Table         | Description                 |
| ------------- | --------------------------- |
| usuarios      | User accounts (admin panel) |
| clientes      | Budget requests / leads     |
| orcamentos    | Budget requests (alias)     |
| servicos      | Service catalog             |
| parceiros     | Partner companies           |
| fornecedores  | Supplier companies          |
| curriculos    | Job candidates              |
| vagas         | Job openings                |
| contatos      | Contact messages            |
| uploads       | File uploads metadata       |
| logs          | Audit logs                  |
| configuracoes | System settings             |
