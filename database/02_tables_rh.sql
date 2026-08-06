-- =============================================================================
-- TABLES — Recrutamento (RH)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- CANDIDATOS (Job applicants)
-- -----------------------------------------------------------------------------
CREATE TABLE candidatos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(150) NOT NULL,
    cpf                 VARCHAR(14),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    cidade              VARCHAR(100),
    estado              VARCHAR(2),
    vaga_interesse      ENUM('AUXILIAR_LIMPEZA','CONTROLADOR_ACESSO','ZELADOR','PORTEIRO','RECEPCIONISTA') DEFAULT 'AUXILIAR_LIMPEZA',
    experiencia         TEXT,
    curriculo_url       VARCHAR(500),
    linkedin            VARCHAR(255),
    observacao          TEXT,
    status              ENUM('NOVO','TRIAGEM','ENTREVISTA','APROVADO','BANCO_TALENTOS','REPROVADO') DEFAULT 'NOVO',
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_candidatos_email (email),
    INDEX idx_candidatos_cpf (cpf),
    INDEX idx_candidatos_status (status),
    INDEX idx_candidatos_vaga (vaga_interesse),
    INDEX idx_candidatos_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- PARCEIROS (Partner companies)
-- -----------------------------------------------------------------------------
CREATE TABLE parceiros (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa             VARCHAR(200) NOT NULL,
    cnpj                VARCHAR(18),
    responsavel         VARCHAR(150),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    servicos            TEXT,
    cidade              VARCHAR(100),
    documentos_url      VARCHAR(500),
    status              ENUM('NOVO','VALIDANDO','ATIVO','INATIVO') DEFAULT 'NOVO',
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_parceiros_email (email),
    INDEX idx_parceiros_status (status),
    INDEX idx_parceiros_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- FORNECEDORES (Supplier companies)
-- -----------------------------------------------------------------------------
CREATE TABLE fornecedores (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa             VARCHAR(200) NOT NULL,
    cnpj                VARCHAR(18),
    categoria           ENUM('MATERIAL','EQUIPAMENTO','SERVICO','OUTROS'),
    produto_servico     VARCHAR(255),
    responsavel         VARCHAR(150),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    status              ENUM('ATIVO','INATIVO') DEFAULT 'ATIVO',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_fornecedores_email (email),
    INDEX idx_fornecedores_categoria (categoria),
    INDEX idx_fornecedores_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- COLABORADORES (Internal employees / field workers)
-- -----------------------------------------------------------------------------
CREATE TABLE colaboradores (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT NOT NULL,
    nome                VARCHAR(150) NOT NULL,
    cpf                 VARCHAR(14) UNIQUE,
    cargo               VARCHAR(100),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    data_admissao       DATE,
    data_desligamento   DATE,
    status              ENUM('ATIVO','INATIVO','AFASTADO') DEFAULT 'ATIVO',
    foto_url            VARCHAR(500),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_colaboradores_usuario (usuario_id),
    INDEX idx_colaboradores_cpf (cpf),
    INDEX idx_colaboradores_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- ALOCACOES (Employee assignments to clients)
-- -----------------------------------------------------------------------------
CREATE TABLE alocacoes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    colaborador_id      BIGINT NOT NULL,
    cliente_id          BIGINT NOT NULL,
    contrato_id         BIGINT,
    data_inicio         DATE NOT NULL,
    data_fim            DATE,
    cargo               VARCHAR(100),
    observacao          TEXT,
    status              ENUM('ATIVA','SUSPENSA','ENCERRADA') DEFAULT 'ATIVA',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_alocacoes_colaborador (colaborador_id),
    INDEX idx_alocacoes_cliente (cliente_id),
    INDEX idx_alocacoes_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
