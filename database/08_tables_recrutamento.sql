-- =============================================================================
-- TABLES — Recrutamento & Agência de Empregos (ATV)
-- =============================================================================
-- Extensão do schema existente para suportar a nova arquitetura de negócios:
-- Agência de Empregos + Assessoria de RH
-- =============================================================================

-- -----------------------------------------------------------------------------
-- VAGAS (Job listings)
-- -----------------------------------------------------------------------------
CREATE TABLE vagas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa_id          BIGINT      NOT NULL,
    titulo              VARCHAR(200) NOT NULL,
    slug                VARCHAR(200) UNIQUE NOT NULL,
    descricao           LONGTEXT,
    requisitos          LONGTEXT,
    beneficios          LONGTEXT,
    salario_min         DECIMAL(10,2),
    salario_max         DECIMAL(10,2),
    tipo_salario         ENUM('FAIXA','MENSAL','NEGOCIAR') DEFAULT 'NEGOCIAR',
    tipo_contrato      ENUM('CLT','ESTAGIO','TEMPORARIO','FREELA','TERCEIRIZADO','CD') DEFAULT 'CLT',
    nivel              ENUM('ESTAGIO','JUNIOR','PLENO','SENIOR','MASTER','LIDERANCA') DEFAULT 'PLENO',
    carga_horaria       VARCHAR(50),
    local_trabalho      VARCHAR(200),
    modalidade          ENUM('PRESENCIAL','HIBRIDO','REMOTO') DEFAULT 'PRESENCIAL',
    cidade              VARCHAR(100),
    estado              VARCHAR(2),
    status              ENUM('BORRAR','ATIVA','ARQUIVADA','CONTRATADA') DEFAULT 'BORRAR',
    visualizacoes        INT DEFAULT 0,
    candidaturas        INT DEFAULT 0,
    data_publicacao     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    data_vencimento     DATE,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_vagas_slug (slug),
    INDEX idx_vagas_status (status),
    INDEX idx_vagas_empresa (empresa_id),
    INDEX idx_vagas_modalidade (modalidade),
    INDEX idx_vagas_nivel (nivel),
    INDEX idx_vagas_cidade (cidade, estado),
    INDEX idx_vagas_publicacao (data_publicacao DESC),
    FULLTEXT INDEX ft_vagas_search (titulo, descricao, requisitos)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- VAGA_HABILIDADES (Vaga ↔ Habilidades — many-to-many)
-- -----------------------------------------------------------------------------
CREATE TABLE vaga_habilidades (
    vaga_id             BIGINT NOT NULL,
    habilidade_id       BIGINT NOT NULL,
    nivel_requerido     ENUM('BASICO','INTERMEDIARIO','AVANCADO') DEFAULT 'INTERMEDIARIO',
    obrigatorio         TINYINT(1) DEFAULT 1,
    PRIMARY KEY (vaga_id, habilidade_id),
    INDEX idx_vh_vaga (vaga_id),
    INDEX idx_vh_habilidade (habilidade_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- HABILIDADES (Catálogo de habilidades técnicas)
-- -----------------------------------------------------------------------------
CREATE TABLE habilidades (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) UNIQUE NOT NULL,
    categoria           VARCHAR(100),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_habilidades_nome (nome),
    INDEX idx_habilidades_categoria (categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CURRICULOS (Detailed candidate resumes)
-- -----------------------------------------------------------------------------
CREATE TABLE curriculos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    candidato_id        BIGINT NOT NULL,
    titulo              VARCHAR(200),
    objetivo            TEXT,
    pretensao_salarial  DECIMAL(10,2),
    tipo_salario        ENUM('FAIXA','MENSAL','NEGOCIAR') DEFAULT 'NEGOCIAR',
    disponibilidade     ENUM('IMEDIATA','15_DIAS','30_DIAS','90_DIAS') DEFAULT 'IMEDIATA',
    linkedin            VARCHAR(255),
    portfolio_url       VARCHAR(500),
    cv_file_url         VARCHAR(500),
    status              ENUM('ATIVO','INATIVO','ARQUIVADO') DEFAULT 'ATIVO',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_curriculo_candidato (candidato_id),
    INDEX idx_curriculos_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- EXPERIENCIAS (Professional experience history)
-- -----------------------------------------------------------------------------
CREATE TABLE experiencias (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    curriculo_id        BIGINT NOT NULL,
    empresa             VARCHAR(200) NOT NULL,
    cargo               VARCHAR(200) NOT NULL,
    data_inicio         DATE,
    data_fim            DATE,
    atual               TINYINT(1) DEFAULT 1,
    descricao           TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_experiencias_curriculo (curriculo_id),
    INDEX idx_experiencias_atual (atual)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- FORMACOES (Academic education)
-- -----------------------------------------------------------------------------
CREATE TABLE formacoes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    curriculo_id        BIGINT NOT NULL,
    instituicao         VARCHAR(200) NOT NULL,
    curso               VARCHAR(200) NOT NULL,
    nivel               ENUM('FUNDAMENTAL','MEDIO','TECNICO','GRADUACAO','POS','MESTRADO','DOUTORADO') DEFAULT 'GRADUACAO',
    data_inicio         DATE,
    data_fim            DATE,
    concluido           TINYINT(1) DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_formacoes_curriculo (curriculo_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CURSO (Certifications & courses)
-- -----------------------------------------------------------------------------
CREATE TABLE cursos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    curriculo_id        BIGINT NOT NULL,
    nome                VARCHAR(200) NOT NULL,
    instituicao         VARCHAR(200),
    carga_horaria       VARCHAR(50),
    data_conclusao      DATE,
    certificado_url     VARCHAR(500),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_cursos_curriculo (curriculo_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- IDIOMAS (Candidate language skills)
-- -----------------------------------------------------------------------------
CREATE TABLE idiomas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    curriculo_id        BIGINT NOT NULL,
    idioma              VARCHAR(50) NOT NULL,
    nivel               ENUM('BASICO','INTERMEDIARIO','AVANCADO','FLUENTE','NATIVO') DEFAULT 'INTERMEDIARIO',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY uk_idioma_curriculo (curriculo_id, idioma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CURRICULO_HABILIDADES (Curriculum ↔ Skills — many-to-many)
-- -----------------------------------------------------------------------------
CREATE TABLE curriculo_habilidades (
    curriculo_id        BIGINT NOT NULL,
    habilidade_id       BIGINT NOT NULL,
    nivel               ENUM('BASICO','INTERMEDIARIO','AVANCADO') DEFAULT 'INTERMEDIARIO',
    meses_experiencia   INT DEFAULT 0,
    ultima_utilizacao   DATE,
    PRIMARY KEY (curriculo_id, habilidade_id),
    INDEX idx_ch_curriculo (curriculo_id),
    INDEX idx_ch_habilidade (habilidade_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- CANDIDATURAS (Applications: candidato → vaga)
-- -----------------------------------------------------------------------------
CREATE TABLE candidaturas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    vaga_id             BIGINT NOT NULL,
    candidato_id        BIGINT NOT NULL,
    curriculo_id        BIGINT,
    status              ENUM('ENVIADO','EM_ANALISE','ENTREVISTA','APROVADO','REJEITADO','SEM_INTERESSE') DEFAULT 'ENVIADO',
    data_candidatura    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    observacao          TEXT,

    UNIQUE KEY uk_candidatura (vaga_id, candidato_id),
    INDEX idx_cand_vaga (vaga_id),
    INDEX idx_cand_candidato (candidato_id),
    INDEX idx_cand_status (status),
    INDEX idx_cand_data (data_candidatura)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- PROCESSOS_SELETIVOS (Recruitment pipelines: empresa → vaga → etapas)
-- -----------------------------------------------------------------------------
CREATE TABLE processos_seletivos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    vaga_id             BIGINT NOT NULL,
    empresa_id          BIGINT NOT NULL,
    titulo              VARCHAR(200),
    etapas_json         JSON,
    status              ENUM('ABERTO','EM_ANDAMENTO','PAUSADO','CONCLUIDO','CANCELADO') DEFAULT 'ABERTO',
    data_inicio         DATE,
    data_fim_prevista   DATE,
    data_fim_real       DATE,
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_ps_vaga (vaga_id),
    INDEX idx_ps_empresa (empresa_id),
    INDEX idx_ps_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- ENTREVISTAS (Interview scheduling)
-- -----------------------------------------------------------------------------
CREATE TABLE entrevistas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    processo_id         BIGINT NOT NULL,
    candidatura_id      BIGINT NOT NULL,
    etapa               VARCHAR(100),
    data_hora           TIMESTAMP,
    local               VARCHAR(255),
    link_video          VARCHAR(500),
    status              ENUM('AGENDADA','REALIZADA','CANCELADA','REAGENDADA') DEFAULT 'AGENDADA',
    observacao          TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_entrevistas_processo (processo_id),
    INDEX idx_entrevistas_candidatura (candidatura_id),
    INDEX idx_entrevistas_data (data_hora)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- AVALIACOES (Candidate scores per interview/phase)
-- -----------------------------------------------------------------------------
CREATE TABLE avaliacoes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    entrevista_id       BIGINT NOT NULL,
    candidato_id        BIGINT NOT NULL,
    criterio            VARCHAR(100),
    nota                DECIMAL(3,1),
    observacao          TEXT,
    avaliador_id        BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_avaliacoes_entrevista (entrevista_id),
    INDEX idx_avaliacoes_candidato (candidato_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -----------------------------------------------------------------------------
-- VAGA_FAVORITOS (Candidates favorite jobs)
-- -----------------------------------------------------------------------------
CREATE TABLE vaga_favoritos (
    candidato_id        BIGINT NOT NULL,
    vaga_id             BIGINT NOT NULL,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (candidato_id, vaga_id),
    INDEX idx_vf_candidato (candidato_id),
    INDEX idx_vf_vaga (vaga_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
