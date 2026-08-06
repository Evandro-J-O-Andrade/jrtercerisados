-- =============================================================================
-- TABLES — CRM & Clientes
-- =============================================================================

-- -----------------------------------------------------------------------------
-- CLIENTES (Companies that hire services)
-- -----------------------------------------------------------------------------
CREATE TABLE clientes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT      NOT NULL,
    razao_social        VARCHAR(200) NOT NULL,
    nome_fantasia        VARCHAR(100),
    cnpj                VARCHAR(18),
    responsavel         VARCHAR(150),
    cargo               VARCHAR(100),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    endereco            TEXT,
    cidade              VARCHAR(100),
    estado              VARCHAR(2),
    origem              ENUM('SITE','WHATSAPP','INDICACAO','GOOGLE','EVENTO') DEFAULT 'SITE',
    status              ENUM('LEAD','PROSPECT','NEGOCIACAO','CLIENTE_ATIVO','INATIVO') DEFAULT 'LEAD',
    observacoes         TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_clientes_email (email),
    INDEX idx_clientes_telefone (telefone),
    INDEX idx_clientes_status (status),
    INDEX idx_clientes_origem (origem),
    INDEX idx_clientes_usuario (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- SERVICOS (Service catalog: Limpeza, Segurança, etc.)
-- -----------------------------------------------------------------------------
CREATE TABLE servicos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) NOT NULL,
    descricao           TEXT,
    icone               VARCHAR(50),
    categoria           VARCHAR(50),
    preco_base          DECIMAL(10,2) DEFAULT 0.00,
    unidade_medida      VARCHAR(20),
    ativo               TINYINT(1)   DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_servicos_nome (nome),
    INDEX idx_servicos_categoria (categoria),
    INDEX idx_servicos_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CLIENTE_SERVICOS (Client ↔ Service — many-to-many)
-- -----------------------------------------------------------------------------
CREATE TABLE cliente_servicos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    cliente_id          BIGINT NOT NULL,
    servico_id          BIGINT NOT NULL,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY uk_cliente_servico (cliente_id, servico_id),
    INDEX idx_cs_cliente (cliente_id),
    INDEX idx_cs_servico (servico_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- LEADS (All inbound contacts from the website)
-- -----------------------------------------------------------------------------
CREATE TABLE leads (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(150) NOT NULL,
    empresa             VARCHAR(150),
    email               VARCHAR(255),
    telefone            VARCHAR(20),
    origem              ENUM('SITE','WHATSAPP','INSTAGRAM','GOOGLE','INDICACAO') DEFAULT 'SITE',
    tipo_lead           ENUM('CLIENTE','PARCEIRO','FORNECEDOR','IMPRENSA') DEFAULT 'CLIENTE',
    mensagem            TEXT,
    utm_source          VARCHAR(100),
    utm_campaign        VARCHAR(100),
    ip                  VARCHAR(45),
    responsavel_id      BIGINT,
    status              ENUM('NOVO','CONTATO_REALIZADO','QUALIFICADO','PROPOSTA_ENVIADA','CONVERTIDO','DESCARTADO') DEFAULT 'NOVO',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_leads_email (email),
    INDEX idx_leads_telefone (telefone),
    INDEX idx_leads_status (status),
    INDEX idx_leads_origem (origem),
    INDEX idx_leads_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CONTRATOS (Service contracts)
-- -----------------------------------------------------------------------------
CREATE TABLE contratos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    cliente_id          BIGINT NOT NULL,
    numero_contrato     VARCHAR(50) UNIQUE NOT NULL,
    data_inicio         DATE NOT NULL,
    data_fim            DATE,
    valor               DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    periodicidade       ENUM('MENSAL','BIMESTRAL','TRIMESTRAL','SEMESTRAL','ANUAL') DEFAULT 'MENSAL',
    status              ENUM('ATIVO','SUSPENSO','ENCERRADO','CANCELADO') DEFAULT 'ATIVO',
    arquivo_url         VARCHAR(500),
    observacoes         TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_contratos_cliente (cliente_id),
    INDEX idx_contratos_numero (numero_contrato),
    INDEX idx_contratos_status (status),
    INDEX idx_contratos_data_fim (data_fim)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
