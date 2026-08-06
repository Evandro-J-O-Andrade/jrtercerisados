-- =============================================================================
-- TABLES — Suporte & Notificações
-- =============================================================================

-- -----------------------------------------------------------------------------
-- TICKETS (Support tickets with protocol)
-- -----------------------------------------------------------------------------
CREATE TABLE tickets (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    protocolo           VARCHAR(20) UNIQUE NOT NULL,
    cliente_id          BIGINT,
    usuario_id          BIGINT NOT NULL,
    categoria           ENUM('SEGURANCA','LIMPEZA','ACESSO','ZELADORIA','FACILITIES','OUTROS') DEFAULT 'OUTROS',
    assunto             VARCHAR(255) NOT NULL,
    descricao           TEXT NOT NULL,
    prioridade          ENUM('BAIXA','MEDIA','ALTA','URGENTE') DEFAULT 'MEDIA',
    status              ENUM('ABERTO','EM_ANALISE','AGUARDANDO','RESOLVIDO','FECHADO') DEFAULT 'ABERTO',
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_tickets_protocolo (protocolo),
    INDEX idx_tickets_cliente (cliente_id),
    INDEX idx_tickets_status (status),
    INDEX idx_tickets_prioridade (prioridade),
    INDEX idx_tickets_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- NOTIFICACOES (System notifications for users)
-- -----------------------------------------------------------------------------
CREATE TABLE notificacoes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT NOT NULL,
    titulo              VARCHAR(255) NOT NULL,
    mensagem            TEXT NOT NULL,
    tipo                ENUM('EMAIL','WHATSAPP','SISTEMA','PUSH') DEFAULT 'SISTEMA',
    lida                TINYINT(1) DEFAULT 0,
    link                VARCHAR(500),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_notificacoes_usuario (usuario_id),
    INDEX idx_notificacoes_tipo (tipo),
    INDEX idx_notificacoes_lida (lida)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- LOGS (System audit log)
-- -----------------------------------------------------------------------------
CREATE TABLE logs (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT,
    acao                VARCHAR(100) NOT NULL,
    tabela              VARCHAR(100),
    registro_id         BIGINT,
    detalhes            JSON,
    ip                  VARCHAR(45),
    user_agent          TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_logs_usuario (usuario_id),
    INDEX idx_logs_acao (acao),
    INDEX idx_logs_tabela (tabela),
    INDEX idx_logs_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
