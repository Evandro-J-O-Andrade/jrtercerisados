-- =============================================================================
-- TABLES — Core Entities
-- =============================================================================

-- -----------------------------------------------------------------------------
-- EMPRESA (Company / Tenant)
-- -----------------------------------------------------------------------------
CREATE TABLE empresa (
    id              BIGINT      PRIMARY KEY AUTO_INCREMENT,
    razao_social    VARCHAR(200) NOT NULL,
    nome_fantasia   VARCHAR(100) NOT NULL,
    cnpj            VARCHAR(18)  UNIQUE NOT NULL,
    telefone        VARCHAR(20),
    email           VARCHAR(255),
    site            VARCHAR(255),
    logo_url        VARCHAR(500),
    endereco        TEXT,
    cidade          VARCHAR(100),
    estado          VARCHAR(2),
    ativo           TINYINT(1)   DEFAULT 1,
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_empresa_cnpj (cnpj),
    INDEX idx_empresa_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- USUARIOS (System Users — RBAC)
-- -----------------------------------------------------------------------------
CREATE TABLE usuarios (
    id              BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa_id      BIGINT      NOT NULL,
    nome            VARCHAR(150) NOT NULL,
    email           VARCHAR(255) UNIQUE NOT NULL,
    senha_hash      VARCHAR(255) NOT NULL,
    telefone        VARCHAR(20),
    avatar_url      VARCHAR(500),
    perfil          ENUM('ADMIN','GESTOR','COMERCIAL','RH','ATENDIMENTO','FINANCEIRO','CLIENTE','PARCEIRO') NOT NULL DEFAULT 'COMERCIAL',
    ativo           TINYINT(1)   DEFAULT 1,
    ultimo_login    TIMESTAMP    NULL,
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_usuarios_email (email),
    INDEX idx_usuarios_perfil (perfil),
    INDEX idx_usuarios_ativo (ativo),
    INDEX idx_usuarios_empresa (empresa_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- PERMISSOES (Permissions — RBAC)
-- -----------------------------------------------------------------------------
CREATE TABLE permissoes (
    id              BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome            VARCHAR(100) UNIQUE NOT NULL,
    descricao       VARCHAR(255),
    modulo          VARCHAR(50),
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_permissoes_nome (nome),
    INDEX idx_permissoes_modulo (modulo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- USUARIO_PERMISSOES (User ↔ Permission — many-to-many)
-- -----------------------------------------------------------------------------
CREATE TABLE usuario_permissoes (
    usuario_id      BIGINT NOT NULL,
    permissao_id    BIGINT NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (usuario_id, permissao_id),
    INDEX idx_up_usuario (usuario_id),
    INDEX idx_up_permissao (permissao_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
