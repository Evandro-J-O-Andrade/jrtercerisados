# JR RH Platform — Enterprise Architecture

> **Sprint Zero:** Enterprise Architecture
> Reposicionamento: Terceirização → Agência de Empregos + Assessoria de RH

---

## 1. Visão do Sistema

A plataforma JR RH deixa de ser um site institucional e passa a ser um **ATS (Applicant Tracking System) + Portal Corporativo de RH**, conectando empresas a candidatos.

```
┌─────────────────┐     Publica Vaga      ┌─────────────────┐
│   EMPRESA       │ ───────────────────> │  JR RH PLATFORM │
│ (Portal Web)    │                       │                 │
└─────────────────┘                       │  Vagas          │
                                          │  Banco Talentos │
┌─────────────────┐     Busca Vaga        │  Chat IA        │
│   CANDIDATO     │ <──────────────────── │  WhatsApp       │
│ (Portal Web)    │     Recebe Vaga       │  Blog           │
└─────────────────┘                       └────────┬────────┘
                                                 │
                                          ┌────────┴────────┐
                                          │   ADMINISTRADOR │
                                          │   (Dashboard)   │
                                          └─────────────────┘
```

### Módulos Principais

| Módulo                    | Domínio | Responsabilidade                                   |
| ------------------------- | ------- | -------------------------------------------------- |
| **Site Institucional**    | 🌐      | Home, Serviços, Sobre, Blog, Contato               |
| **Portal do Candidato**   | 💼      | Cadastro, Currículo, Candidaturas, Acompanhamento  |
| **Portal da Empresa**     | 🏢      | Publicar vagas, Banco de talentos, Entrevistas     |
| **Portal Administrativo** | 🛠️      | Gestão de usuários, vagas, conteúdo, indicadores   |
| **Central Inteligente**   | 🤖      | Chat IA, FAQ, WhatsApp automatizado, n8n workflows |
| **Camada de Dados**       | 📊      | Supabase/MySQL, autenticação, APIs, automações     |

---

## 2. Matriz de Usuários e Permissões

| Perfil                | Acesso      | Principais Ações                                            |
| --------------------- | ----------- | ----------------------------------------------------------- |
| **Visitante**         | Público     | Navegar vagas, ler blog, FAQ, falar com IA                  |
| **Candidato**         | Autenticado | Criar/editar currículo, candidatar-se, acompanhar processos |
| **Empresa (Básico)**  | Autenticado | Publicar até N vagas, ver currículos, chatbot               |
| **Empresa (Premium)** | Autenticado | Vagas ilimitadas, banco de talentos avançado, relatórios    |
| **RH da Empresa**     | Autenticado | Triagem, marcar entrevistas, feedback                       |
| **Comercial JR**      | Interno     | Receber leads, propostas, follow-up                         |
| **Recrutador JR**     | Interno     | Triagem interna, agendar entrevistas                        |
| **Administrador**     | Full        | Gestão total: usuários, permissões, conteúdo, configurações |

### Matriz de Permissões (RBAC)

| Permissão            | Visitante | Candidato | Empresa | Comercial JR | RH JR | Admin |
| -------------------- | --------- | --------- | ------- | ------------ | ----- | ----- |
| `vaga.visualizar`    | ✅        | ✅        | ✅      | ✅           | ✅    | ✅    |
| `vaga.criar`         | ❌        | ❌        | ✅      | ✅           | ✅    | ✅    |
| `candidatura.criar`  | ❌        | ✅        | ❌      | ❌           | ✅    | ✅    |
| `curriculo.criar`    | ❌        | ✅        | ❌      | ❌           | ❌    | ✅    |
| `triagem.gerenciar`  | ❌        | ❌        | ❌      | ❌           | ✅    | ✅    |
| `empresa.gerenciar`  | ❌        | ❌        | própria | ✅           | ✅    | ✅    |
| `conteudo.gerenciar` | ❌        | ❌        | ❌      | ❌           | ❌    | ✅    |

---

## 3. Arquitetura de Navegação

```
/                              → Site Institucional (Home)
│
├─ /vagas                       → Lista de vagas (público)
│   ├─ /vagas/[slug]            → Detalhe da vaga (público)
│   └─ /vagas/pesquisa          → Busca + filtros
│
├─ /empresas                    → Lista de empresas (público)
│   └─ /empresas/[slug]         → Perfil empresa (público)
│
├─ /servicos                    → Serviços (Recrutamento, Seleção, Terceirização...)
│   ├─ /servicos/recrutamento
│   ├─ /servicos/selecao
│   ├─ /servicos/temporarios
│   ├─ /servicos/terceirizacao
│   ├─ /servicos/hunting
│   └─ /servicos/banco-talentos
│
├─ /sobre                       → Institucional
├─ /blog                        → Blog de RH
│   └─ /blog/[slug]
│
├─ /contato
├─ /faq                         → Central de ajuda
│
├─ /login                       → Escolha de perfil (Candidato / Empresa / Admin)
├─ /cadastro                    → Tipo de cadastro
│   ├─ /cadastro/candidato
│   └─ /cadastro/empresa
│
├─ /candidato                   → Área do candidato (auth)
│   ├─ /candidato/cv
│   ├─ /candidato/candidaturas
│   └─ /candidato/preferencias
│
├─ /empresa                     → Área da empresa (auth)
│   ├─ /empresa/vagas            → CRUD de vagas
│   ├─ /empresa/talentos         → Banco de talentos
│   ├─ /empresa/processos
│   └─ /empresa/relatorios
│
└─ /dashboard                   → Admin (auth)
    ├─ /dashboard/usuarios
    ├─ /dashboard/vagas
    ├─ /dashboard/conteudo
    ├─ /dashboard/faqs
    ├─ /dashboard/blog
    └─ /dashboard/analytics
```

### Botões de Ação (Header)

- `/cadastro/candidato` → "Cadastrar Currículo"
- `/cadastro/empresa` → "Divulgar Vaga"

---

## 4. Mapa do Banco de Dados

### Novas entidades (extendendo `database/02_tables_*.sql`)

| Tabela                  | Descrição                                                  |
| ----------------------- | ---------------------------------------------------------- |
| `vagas`                 | Vagas publicadas com requisitos, salário, local            |
| `candidaturas`          | Relacionamento candidato → vaga                            |
| `curriculos`            | Currículos detalhados (formação, experiência, habilidades) |
| `processos_seletivos`   | Pipeline de triagem (etapas, status)                       |
| `entrevistas`           | Agendamento de entrevistas                                 |
| `avaliacoes`            | Notas de candidatos por etapa                              |
| `habilidades`           | Catálogo de habilidades técnicas                           |
| `curriculo_habilidades` | Candidato ↔ Habilidades (many-to-many)                     |
| `experiencias`          | Experiência profissional do candidato                      |
| `formacoes`             | Formação acadêmica do candidato                            |
| `cursos`                | Cursos/certificações do candidato                          |
| `idiomas`               | Idiomas do candidato                                       |
| `notificacoes_webhooks` | Eventos disparados para automação                          |

### Relacionamentos

```
empresas → vagas
vagas → candidaturas ← candidatos
candidatos → curriculos → experiencias, formacoes, cursos, idiomas, habilidades
vagas → processos_seletivos → etapas → entrevistas → avaliacoes
```

---

## 5. Mapa de APIs

| Método | Endpoint                      | Auth      | Descrição              |
| ------ | ----------------------------- | --------- | ---------------------- |
| GET    | `/api/v1/vagas`               | Público   | Lista vagas ativas     |
| GET    | `/api/v1/vagas/[slug]`        | Público   | Detalhe da vaga        |
| POST   | `/api/v1/vagas`               | Empresa   | Cria vaga              |
| PUT    | `/api/v1/vagas/[id]`          | Empresa   | Atualiza vaga          |
| DELETE | `/api/v1/vagas/[id]`          | Empresa   | Remove vaga            |
| POST   | `/api/v1/candidaturas`        | Candidato | Candidata-se a vaga    |
| GET    | `/api/v1/candidato/cv`        | Candidato | Retorna currículo      |
| PUT    | `/api/v1/candidato/cv`        | Candidato | Atualiza currículo     |
| POST   | `/api/v1/processos`           | RH        | Cria processo seletivo |
| GET    | `/api/v1/analytics/dashboard` | Admin     | KPIs consolidados      |

---

## 6. Integrações

| Integração          | Uso                                              | Status       |
| ------------------- | ------------------------------------------------ | ------------ |
| **WhatsApp (n8n)**  | Mensagens automáticas para candidatos e empresas | 🟡 Planejado |
| **LinkedIn API**    | Importação de currículos via LinkedIn            | 🟡 Planejado |
| **Gemini API**      | Chat IA + matching de candidatos                 | 🟡 Planejado |
| **Supabase**        | Auth + Database (substituindo MySQL futuro)      | 🟢 Definido  |
| **Google Maps API** | Localização de empresas e candidatos             | ✅ Existe    |
| **SMTP (Resend)**   | Notificações de e-mail                           | ✅ Existe    |

---

## 7. Chat IA — Central Inteligente

### Fluxo

```
WhatsApp / Web Chat
        ↓
    n8n (router)
        ↓
   Gemini / Groq
        ↓
Supabase (conversas_ia)
        ↓
FAQ / KB / Vagas
```

### Intents (intenções) suportadas

| Intent                   | Exemplo de pergunta                 |
| ------------------------ | ----------------------------------- |
| `cadastro_candidato`     | "Como faço para me cadastrar?"      |
| `cadastrar_curriculo`    | "Onde envio meu currículo?"         |
| `status_candidatura`     | "Foi processado meu currículo?"     |
| `publicar_vaga`          | "Quero publicar uma vaga de..."     |
| `vagas_disponiveis`      | "Tem vaga de segurança em SP?"      |
| `documentos_necessarios` | "O que preciso para me candidatar?" |
| `processo_seletivo`      | "Como funciona o processo?"         |

---

## 8. Dashboard Administrativo

### Widgets (KPIs)

| Widget            | Fonte                 | Métrica                  |
| ----------------- | --------------------- | ------------------------ |
| Vagas Publicadas  | `vagas`               | Total, por status        |
| Candidaturas      | `candidaturas`        | Total, taxa de conversão |
| Processos Ativos  | `processos_seletivos` | Em andamento, concluídos |
| Novos Leads       | `leads`               | Últimos 7 dias           |
| Taxa de Conversão | `candidaturas`        | Vaga → Contratação       |
| Atividade do Chat | `conversas_ia`        | Volume, intents          |

---

## 9. Roadmap (Sprints)

### Sprint 0 — Enterprise Architecture ✅ (esta documentação)

### Sprint 1 — Reposicionamento da Marca

- Home redesenhada (vagas em destaque)
- Menu reorganizado
- Hero com pesquisa rápida
- Identidade visual alinhada

### Sprint 2 — Arquitetura & Backend

- Banco estendido (vagas, candidaturas, currículos)
- APIs CRUD
- Auth (Supabase)
- Navegação completa

### Sprint 3 — UX/UI

- Portal do Candidato (MVP)
- Portal da Empresa (MVP)
- Responsividade total
- Dark/Light refinado

### Sprint 4 — Chat IA + n8n

- Chatbot web + WhatsApp
- FAQ dinâmico
- Automação de candidaturas

### Sprint 5 — Deploy & QA

- Testes e2e
- Lighthouse > 95
- Preparação para produção
