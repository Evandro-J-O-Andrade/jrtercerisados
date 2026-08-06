-- =============================================================================
-- TABLES — Integrações & Automação
-- =============================================================================

-- -----------------------------------------------------------------------------
-- WEBHOOKS (External webhook endpoints for n8n / external services)
-- -----------------------------------------------------------------------------
CREATE TABLE webhooks (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    evento              VARCHAR(100) NOT NULL,
    url                 VARCHAR(500) NOT NULL,
    metodo              ENUM('GET','POST','PUT','PATCH','DELETE') DEFAULT 'POST',
    ativo               TINYINT(1) DEFAULT 1,
    secret              VARCHAR(255),
    headers_json        JSON,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE KEY uk_webhooks_evento_url (evento, url),
    INDEX idx_webhooks_evento (evento),
    INDEX idx_webhooks_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- FILA_AUTOMACAO (Automation job queue — for n8n / background workers)
-- -----------------------------------------------------------------------------
CREATE TABLE fila_automacao (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    evento              VARCHAR(100) NOT NULL,
    payload_json        JSON,
    status              ENUM('PENDENTE','PROCESSANDO','CONCLUIDO','ERRO') DEFAULT 'PENDENTE',
    tentativas          INT DEFAULT 0,
    max_tentativas      INT DEFAULT 5,
    erro                TEXT,
    executado_em        TIMESTAMP NULL,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_fila_status (status),
    INDEX idx_fila_evento (evento),
    INDEX idx_fila_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- MENSAGENS (WhatsApp messages log)
-- -----------------------------------------------------------------------------
CREATE TABLE mensagens (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    telefone            VARCHAR(20) NOT NULL,
    tipo                ENUM('ENTRADA','SAIDA') DEFAULT 'ENTRADA',
    mensagem            TEXT,
    status              ENUM('ENVIADA','ENTREGUE','LIDA','ERRO') DEFAULT 'ENVIADA',
    provedor            VARCHAR(50),
    external_id         VARCHAR(255),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_mensagens_telefone (telefone),
    INDEX idx_mensagens_status (status),
    INDEX idx_mensagens_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- EMAILS_ENVIADOS (Email delivery log)
-- -----------------------------------------------------------------------------
CREATE TABLE emails_enviados (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    destinatario        VARCHAR(255) NOT NULL,
    assunto             VARCHAR(255),
    template            VARCHAR(100),
    status              ENUM('ENVIADO','ERRO','ABERTO','CLICK') DEFAULT 'ENVIADO',
    erro                TEXT,
    external_id         VARCHAR(255),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_emails_status (status),
    INDEX idx_emails_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CONVERSAS_IA (AI chatbot conversation logs)
-- -----------------------------------------------------------------------------
CREATE TABLE conversas_ia (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    canal               ENUM('CHAT','WHATSAPP','WEBSITE') DEFAULT 'WEBSITE',
    cliente_id          BIGINT,
    usuario_id          BIGINT,
    telefone            VARCHAR(20),
    mensagem_usuario    TEXT NOT NULL,
    resposta_ia         TEXT NOT NULL,
    modelo              VARCHAR(100),
    tokens_usados       INT DEFAULT 0,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_conversas_canal (canal),
    INDEX idx_conversas_cliente (cliente_id),
    INDEX idx_conversas_usuario (usuario_id),
    INDEX idx_conversas_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
