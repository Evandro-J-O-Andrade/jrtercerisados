-- =============================================================================
-- INDEXES — Additional performance indexes
-- =============================================================================
-- FK indexes are created automatically by MySQL 8.
-- This file adds composite / covering indexes for business queries.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Leads dashboard: open leads by origin / date
-- -----------------------------------------------------------------------------
CREATE INDEX idx_leads_dash ON leads (status, origem, created_at);

-- -----------------------------------------------------------------------------
-- Clientes dashboard: active clients by date
-- -----------------------------------------------------------------------------
CREATE INDEX idx_clientes_dash ON clientes (status, origem, created_at);

-- -----------------------------------------------------------------------------
-- Candidatos dashboard: pipeline view
-- -----------------------------------------------------------------------------
CREATE INDEX idx_candidatos_pipeline ON candidatos (status, vaga_interesse, created_at);

-- -----------------------------------------------------------------------------
-- Tickets dashboard: by priority / status / date
-- -----------------------------------------------------------------------------
CREATE INDEX idx_tickets_dash ON tickets (prioridade, status, created_at);

-- -----------------------------------------------------------------------------
-- Contratos: expiring soon
-- -----------------------------------------------------------------------------
CREATE INDEX idx_contratos_expiracao ON contratos (status, data_fim);

-- -----------------------------------------------------------------------------
-- Colaboradores: active by cargo
-- -----------------------------------------------------------------------------
CREATE INDEX idx_colaboradores_ativos ON colaboradores (status, cargo);

-- -----------------------------------------------------------------------------
-- Mensagens: recent conversation by phone
-- -----------------------------------------------------------------------------
CREATE INDEX idx_mensagens_conversa ON mensagens (telefone, created_at DESC);

-- -----------------------------------------------------------------------------
-- Emails: recent by status
-- -----------------------------------------------------------------------------
CREATE INDEX idx_emails_dash ON emails_enviados (status, created_at);

-- -----------------------------------------------------------------------------
-- Conversas IA: recent by canal
-- -----------------------------------------------------------------------------
CREATE INDEX idx_conversas_dash ON conversas_ia (canal, created_at);

-- -----------------------------------------------------------------------------
-- Logs: audit by user + date
-- -----------------------------------------------------------------------------
CREATE INDEX idx_logs_auditoria ON logs (usuario_id, created_at);

-- -----------------------------------------------------------------------------
-- Fila automação: pending jobs by event + date
-- -----------------------------------------------------------------------------
CREATE INDEX idx_fila_pendentes ON fila_automacao (status, evento, created_at);
