-- =============================================================================
-- VIEWS — Dashboard views
-- =============================================================================

-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_LEADS
-- Resumo de leads agrupados por status e origem
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_leads AS
  SELECT
    DATE(created_at)  AS data,
    status            AS status,
    origem            AS origem,
    tipo_lead         AS tipo,
    COUNT(*)          AS total
  FROM leads
  GROUP BY DATE(created_at), status, origem, tipo_lead
  ORDER BY data DESC, total DESC;


-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_CLIENTES
-- Resumo de clientes ativos por status e origem
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_clientes AS
  SELECT
    DATE(created_at)  AS data,
    status            AS status,
    origem            AS origem,
    COUNT(*)          AS total,
    AVG(valor_total)  AS ticket_medio
  FROM (
    SELECT
      c.id,
      c.created_at,
      c.status,
      c.origem,
      COALESCE(SUM(cont.valor), 0) AS valor_total
    FROM clientes c
    LEFT JOIN contratos cont ON cont.cliente_id = c.id AND cont.status = 'ATIVO'
    GROUP BY c.id, c.created_at, c.status, c.origem
  ) AS cliente_valor
  GROUP BY DATE(created_at), status, origem
  ORDER BY data DESC, total DESC;


-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_RH
-- Funnel de candidatos por status
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_rh AS
  SELECT
    DATE(created_at)  AS data,
    vaga_interesse    AS vaga,
    status            AS status,
    COUNT(*)          AS total
  FROM candidatos
  GROUP BY DATE(created_at), vaga_interesse, status
  ORDER BY data DESC, total DESC;


-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_TICKETS
-- Chamados por prioridade, status e categoria
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_tickets AS
  SELECT
    DATE(created_at)  AS data,
    prioridade        AS prioridade,
    status            AS status,
    categoria         AS categoria,
    COUNT(*)          AS total,
    AVG(TIMESTAMPDIFF(HOUR, created_at, updated_at)) AS hrs_resolucao_media
  FROM tickets
  GROUP BY DATE(created_at), prioridade, status, categoria
  ORDER BY data DESC, total DESC;


-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_AUTOMACAO
-- Status da fila de automação
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_automacao AS
  SELECT
    evento,
    status,
    COUNT(*)          AS total,
    MAX(created_at)   AS ultima_execucao
  FROM fila_automacao
  GROUP BY evento, status
  ORDER BY evento, total DESC;
