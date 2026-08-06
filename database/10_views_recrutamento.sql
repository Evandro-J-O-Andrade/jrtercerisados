-- =============================================================================
-- VIEWS — Recrutamento Dashboard Views
-- =============================================================================

-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_VAGAS
-- Summary of job listings by status and modality
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_vagas AS
  SELECT
    DATE(data_publicacao)  AS data,
    status                 AS status,
    modalidade             AS modalidade,
    nivel                  AS nivel,
    COUNT(*)               AS total,
    SUM(candidaturas)      AS total_candidaturas
  FROM vagas
  WHERE status != 'ARQUIVADA'
  GROUP BY DATE(data_publicacao), status, modalidade, nivel
  ORDER BY data DESC, total DESC;


-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_CANDIDATURAS
-- Application funnel metrics
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_candidaturas AS
  SELECT
    DATE(c.data_candidatura)  AS data,
    c.status                  AS status,
    v.titulo                  AS vaga,
    v.nivel                   AS nivel,
    COUNT(*)                  AS total
  FROM candidaturas c
  JOIN vagas v ON v.id = c.vaga_id
  GROUP BY DATE(c.data_candidatura), c.status, v.titulo, v.nivel
  ORDER BY data DESC, total DESC;


-- -----------------------------------------------------------------------------
-- VW_DASHBOARD_PROCESSOS
-- Pipeline de recrutamento
-- -----------------------------------------------------------------------------
CREATE VIEW vw_dashboard_processos AS
  SELECT
    DATE(ps.data_inicio)     AS data,
    ps.status                AS status,
    v.titulo                 AS vaga,
    COUNT(DISTINCT c.id)     AS total_candidatos,
    COUNT(e.id)              AS total_entrevistas
  FROM processos_seletivos ps
  LEFT JOIN vagas v ON v.id = ps.vaga_id
  LEFT JOIN candidaturas c ON c.vaga_id = v.id AND c.status IN ('ENVIADO','EM_ANALISE','ENTREVISTA')
  LEFT JOIN entrevistas e ON e.processo_id = ps.id
  GROUP BY DATE(ps.data_inicio), ps.status, v.titulo
  ORDER BY data DESC;


-- -----------------------------------------------------------------------------
-- VW_RANKING_VAGAS
-- Most applied-to jobs (for marketing)
-- -----------------------------------------------------------------------------
CREATE VIEW vw_ranking_vagas AS
  SELECT
    v.id,
    v.titulo,
    v.nivel,
    v.cidade,
    v.estado,
    v.candidaturas,
    v.visualizacoes,
    ROUND((v.candidaturas / NULLIF(v.visualizacoes, 0)) * 100, 2) AS taxa_engajamento
  FROM vagas v
  WHERE v.status = 'ATIVA' AND v.visualizacoes > 0
  ORDER BY v.candidaturas DESC
  LIMIT 20;
