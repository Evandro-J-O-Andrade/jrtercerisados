# Forms Context

## Overview

Todos os formulários do projeto seguem o mesmo padrão:

1. **React Hook Form** + **Zod** para validação
2. **States**: Idle → Loading → Success/Error
3. **Mock Service** para persistência em localStorage
4. **WhatsApp redirect** pós-envio com mensagem pré-composta
5. **Preparados** para integração futura com Supabase, n8n, WhatsApp API

---

## Formulários

### 1. Budget Request (Clientes)

**Rota**: `/clientes`
**Serviço**: `services/mock/clientes.ts`
**Tabela alvo**: `orcamentos`

**Campos**:

- name (required)
- company (required)
- cnpj (required, min 14)
- city (required)
- state (required)
- email (required, email)
- phone (required)
- whatsapp (required)
- service (required)
- posts (required, number)
- message (required, min 10)

**Fluxo**:

1. Usuário preenche formulário
2. Dados são validados com Zod
3. Mock service salva em localStorage (simulando Supabase)
4. Redirecionamento para página de sucesso com botão WhatsApp
5. Status inicial: `new`

**Status possíveis**: new, contacted, proposal, won, lost

---

### 2. Partner Registration (Parceiros)

**Rota**: `/parceiros`
**Serviço**: `services/mock/parceiros.ts`
**Tabela alvo**: `parceiros`

**Campos**:

- company (required)
- cnpj (required)
- responsible (required)
- phone (required)
- email (required, email)
- area (required)
- city (required)
- state (required)
- documentation (required)

**Fluxo**:

1. Usuário preenche formulário
2. Dados validados com Zod
3. Mock service salva em localStorage
4. Status inicial: `pending`

**Status possíveis**: pending, approved, rejected

---

### 3. Supplier Registration (Fornecedores)

**Rota**: `/fornecedores`
**Serviço**: `services/mock/fornecedores.ts`
**Tabela alvo**: `fornecedores`

**Campos**:

- company (required)
- cnpj (required)
- products (required)
- representative (required)
- phone (required)
- email (required, email)

**Campos opcionais (futuro upload)**:

- catalog (arquivo)
- documents (arquivo)

**Status inicial**: `active`

---

### 4. Candidate Application (Trabalhe Conosco)

**Rota**: `/trabalhe-conosco`
**Serviço**: `services/mock/curriculos.ts`
**Tabela alvo**: `curriculos`

**Vagas disponíveis**:

- Auxiliar de Limpeza
- Controlador de Acesso
- Zelador
- Porteiro
- Vigilante
- Recepcionista
- Supervisor
- Fiscal de Piso

**Campos comuns**:

- name (required)
- phone (required)
- email (required)
- city (required)
- experience (required)
- position (required, hidden)
- resume (required)

**Campos específicos por vaga**:

- Auxiliar de Limpeza: cpf, rg
- Controlador de Acesso: courses, schedule
- Zelador: courses, availability

**Validação condicional** via `superRefine` do Zod

**Status inicial**: `received`

**Status possíveis**: received, review, interview, approved, rejected

---

### 5. Contact Form (Contato)

**Rota**: `/contato`
**Serviço**: `services/mock/contatos.ts`

**Campos**:

- name (required)
- email (required)
- phone (required)
- subject (required)
- message (required, min 10)

---

### 6. Login (Auth)

**Rota**: `/login`
**Serviço**: `services/mock/auth.ts`

**Campos**:

- email (required, email)
- password (required, min 6)

**Mock**: qualquer email/senha válidos retornam sucesso
