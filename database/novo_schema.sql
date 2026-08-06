-- =============================================================================
-- NOVO SCHEMA — JR Agência de Empregos & Assessoria RH
-- =============================================================================
-- Consolidação de todas as tabelas anteriores (terceirização) + evolução para
-- Agência de Empregos / Assessoria de Recursos Humanos.
--
-- Relacionamento central:
--   empresa (tenant) → usuarios (auth) → candidatos / clientes (empresas contratantes)
--                    ↓
--   vagas ← candidaturas → processos_seletivos → entrevistas → avaliacoes
--                    ↓
--   leads (WhatsApp First - candidato + empresa)
--
-- Charset: utf8mb4_unicode_ci
-- Engine: InnoDB (InnoDB padrão)
--
-- Execução em ordem: 01 → 02 → 03 (tables → relationships → indexes/views)
-- =============================================================================

-- =============================================================================
-- LAYER 1 — CORE (Tenant + Auth + RBAC)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- EMPRESA (Tenant / holding company)
-- Reaproveitado integralmente.
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
-- USUARIOS (Authentication + RBAC)
-- Evoluído: manteve todos os perfis anteriores e padronizou.
-- Perfis: ADMIN, GESTOR, RH, COMERCIAL, ATENDIMENTO, FINANCEIRO, CLIENTE, PARCEIRO
-- -----------------------------------------------------------------------------
CREATE TABLE usuarios (
    id              BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa_id      BIGINT NOT NULL,
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
-- PERMISSOES + USUARIO_PERMISSOES (RBAC)
-- Reaproveitado integralmente.
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

CREATE TABLE usuario_permissoes (
    usuario_id      BIGINT NOT NULL,
    permissao_id    BIGINT NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (usuario_id, permissao_id),
    INDEX idx_up_usuario (usuario_id),
    INDEX idx_up_permissao (permissao_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================================
-- LAYER 2 — RH (Agência de Empregos)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- CANDIDATOS (Job applicants — núcleo do Banco de Talentos)
-- Evoluído: campos de interesse mais flexíveis, pretensão salarial,
--           experiência resumida, linkedin e status refinado.
-- -----------------------------------------------------------------------------
CREATE TABLE candidatos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT,
    nome                VARCHAR(150) NOT NULL,
    cpf                 VARCHAR(14),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    data_nascimento     DATE,
    cidade              VARCHAR(100),
    estado              VARCHAR(2),
    cargo_interesse     VARCHAR(150),
    area_atuacao        VARCHAR(150),
    pretensao_min       DECIMAL(10,2),
    pretensao_max       DECIMAL(10,2),
    experiencia         TEXT,
    curriculo_url       VARCHAR(500),
    linkedin            VARCHAR(255),
    observacao          TEXT,
    status              ENUM('NOVO','TRIAGEM','ENTREVISTA','APROVADO','BANCO_TALENTOS','REPROVADO','INATIVO') DEFAULT 'NOVO',
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_candidatos_email (email),
    INDEX idx_candidatos_cpf (cpf),
    INDEX idx_candidatos_status (status),
    INDEX idx_candidatos_cargo (cargo_interesse),
    INDEX idx_candidatos_area (area_atuacao),
    INDEX idx_candidatos_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- CURRICULOS (Detailed resumes — 1:1 com candidatos)
-- Reaproveitado: adicionado campos de disponibilidade e portfolio.
-- -----------------------------------------------------------------------------
CREATE TABLE curriculos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    candidato_id        BIGINT NOT NULL,
    titulo              VARCHAR(200),
    objetivo            TEXT,
    pretensao_min       DECIMAL(10,2),
    pretensao_max       DECIMAL(10,2),
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
-- EXPERIENCIAS (Professional history)
-- Reaproveitado integralmente.
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
-- FORMACOES, CURSOS, IDIOMAS, CURRICULO_HABILIDADES
-- Reaproveitados integralmente.
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

CREATE TABLE idiomas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    curriculo_id        BIGINT NOT NULL,
    idioma              VARCHAR(50) NOT NULL,
    nivel               ENUM('BASICO','INTERMEDIARIO','AVANCADO','FLUENTE','NATIVO') DEFAULT 'INTERMEDIARIO',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY uk_idioma_curriculo (curriculo_id, idioma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE habilidades (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) UNIQUE NOT NULL,
    categoria           VARCHAR(100),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_habilidades_nome (nome),
    INDEX idx_habilidades_categoria (categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE curriculo_habilidades (
    curriculo_id        BIGINT NOT NULL,
    habilidade_id       BIGINT NOT NULL,
    nivel               ENUM('BASICO','INTERMEDIARIO','AVANCADO') DEFAULT 'INTERMEDIADO',
    meses_experiencia   INT DEFAULT 0,
    ultima_utilizacao   DATE,
    PRIMARY KEY (curriculo_id, habilidade_id),
    INDEX idx_ch_curriculo (curriculo_id),
    INDEX idx_ch_habilidade (habilidade_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- VAGAS (Job listings — núcleo da Agência de Empregos)
-- Reaproveitado: empresa_id agora referencia clientes(id) (não mais usuarios).
-- -----------------------------------------------------------------------------
CREATE TABLE vagas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa_id          BIGINT NOT NULL,
    titulo              VARCHAR(200) NOT NULL,
    slug                VARCHAR(200) UNIQUE NOT NULL,
    descricao           LONGTEXT,
    requisitos          LONGTEXT,
    beneficios          LONGTEXT,
    salario_min         DECIMAL(10,2),
    salario_max         DECIMAL(10,2),
    tipo_salario        ENUM('FAIXA','MENSAL','NEGOCIAR') DEFAULT 'NEGOCIAR',
    tipo_contrato       ENUM('CLT','ESTAGIO','TEMPORARIO','FREELA','TERCEIRIZADO','CD') DEFAULT 'CLT',
    nivel               ENUM('ESTAGIO','JUNIOR','PLENO','SENIOR','MASTER','LIDERANCA') DEFAULT 'PLENO',
    carga_horaria       VARCHAR(50),
    local_trabalho      VARCHAR(200),
    modalidade          ENUM('PRESENCIAL','HIBRIDO','REMOTO') DEFAULT 'PRESENCIAL',
    cidade              VARCHAR(100),
    estado              VARCHAR(2),
    status              ENUM('BORRAR','ATIVA','ARQUIVADA','CONTRATADA') DEFAULT 'BORRAR',
    visualizacoes       INT DEFAULT 0,
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
-- VAGA_HABILIDADES + CURRICULO → VAGA_FAVORITOS
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

CREATE TABLE vaga_favoritos (
    candidato_id        BIGINT NOT NULL,
    vaga_id             BIGINT NOT NULL,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (candidato_id, vaga_id),
    INDEX idx_vf_candidato (candidato_id),
    INDEX idx_vf_vaga (vaga_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- CANDIDATURAS (Application: candidato → vaga)
-- Reaproveitado: candidato_id agora referencia candidatos(id)
--                  (anteriormente apontava para colaboradores).
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
-- PROCESSOS_SELETIVOS + ENTREVISTAS + AVALIACOES
-- Reaproveitado: empresa_id referencia clientes(id) em vez de usuarios.
-- -----------------------------------------------------------------------------
CREATE TABLE processos_seletivos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    vaga_id             BIGINT NOT NULL,
    empresa_id          BIGINT NOT NULL,
    candidato_id        BIGINT,
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
    INDEX idx_ps_candidato (candidato_id),
    INDEX idx_ps_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE entrevistas (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    processo_id         BIGINT NOT NULL,
    candidato_id        BIGINT,
    candidatura_id      BIGINT,
    etapa               VARCHAR(100),
    data_hora           TIMESTAMP,
    local               VARCHAR(255),
    link_video          VARCHAR(500),
    status              ENUM('AGENDADA','REALIZADA','CANCELADA','REAGENDADA') DEFAULT 'AGENDADA',
    observacao          TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_entrevistas_processo (processo_id),
    INDEX idx_entrevistas_candidato (candidato_id),
    INDEX idx_entrevistas_candidatura (candidatura_id),
    INDEX idx_entrevistas_data (data_hora)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

-- =============================================================================
-- LAYER 3 — CRM / Empresas Contratantes (reaproveitado)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- CLIENTES → agora empresa contratante de serviços de RH
-- Reaproveitado integralmente.
-- -----------------------------------------------------------------------------
CREATE TABLE clientes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT NOT NULL,
    razao_social        VARCHAR(200) NOT NULL,
    nome_fantasia       VARCHAR(100),
    cnpj                VARCHAR(18),
    responsavel         VARCHAR(150),
    cargo               VARCHAR(100),
    telefone            VARCHAR(20),
    email               VARCHAR(255),
    endereco            TEXT,
    cidade              VARCHAR(100),
    estado              VARCHAR(2),
    origem              ENUM('SITE','WHATSAPP','INDICACAO','GOOGLE','EVENTO') DEFAULT 'SITE',
    tipo_cliente        ENUM('EMPRESA','PESSOA_FISICA') DEFAULT 'EMPRESA',
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
-- SERVICOS → catálogo com categorias RH x Facilities
-- Evoluído: coluna categoria_refinada para separação.
-- -----------------------------------------------------------------------------
CREATE TABLE servicos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) NOT NULL,
    descricao           TEXT,
    icone               VARCHAR(50),
    categoria           ENUM('RH','FACILITIES','COMBINADO') DEFAULT 'RH',
    tipo                ENUM('RECUPERACAO','TEMPORARIO','PERMANENTE','CONSULTORIA') DEFAULT 'CONSULTORIA',
    preco_base          DECIMAL(10,2) DEFAULT 0.00,
    unidade_medida      VARCHAR(20),
    ativo               TINYINT(1)   DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_servicos_nome (nome),
    INDEX idx_servicos_categoria (categoria),
    INDEX idx_servicos_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
-- CONTRATOS → contratos de prestação de serviços (facilities ou RH)
-- Reaproveitado integralmente.
-- -----------------------------------------------------------------------------
CREATE TABLE contratos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    cliente_id          BIGINT NOT NULL,
    servico_id          BIGINT,
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
    INDEX idx_contratos_servico (servico_id),
    INDEX idx_contratos_numero (numero_contrato),
    INDEX idx_contratos_status (status),
    INDEX idx_contratos_data_fim (data_fim)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================================
-- LAYER 4 — Lead Capture (WhatsApp First)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- LEADS → todos os contatos do site (candidato + empresa + parceiro)
-- Evoluído: tipo_lead agora inclui CANDIDATO e EMPRESA.
-- -----------------------------------------------------------------------------
CREATE TABLE leads (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(150) NOT NULL,
    empresa             VARCHAR(150),
    email               VARCHAR(255),
    telefone            VARCHAR(20),
    origem              ENUM('SITE','WHATSAPP','INSTAGRAM','GOOGLE','INDICACAO') DEFAULT 'SITE',
    tipo_lead           ENUM('CLIENTE','EMPRESA','CANDIDATO','PARCEIRO','FORNECEDOR','IMPRENSA') DEFAULT 'CLIENTE',
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
    INDEX idx_leads_tipo (tipo_lead),
    INDEX idx_leads_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- DEMANDAS_RECRUTAMENTO → solicitação de empresa (substitui orçamento)
-- Nova tabela para o fluxo "Empresa solicita profissionais".
-- -----------------------------------------------------------------------------
CREATE TABLE demandas_recrutamento (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    empresa_id          BIGINT NOT NULL,
    nome_contato        VARCHAR(150),
    email_contato       VARCHAR(255),
    telefone_contato    VARCHAR(20),
    cargo               VARCHAR(150) NOT NULL,
    quantidade          INT DEFAULT 1,
    descricao           TEXT,
    urgencia            ENUM('BAIXA','MEDIA','ALTA','URGENTE') DEFAULT 'MEDIA',
    tipo_servico        ENUM('RH','FACILITIES','COMBINADO') DEFAULT 'RH',
    status              ENUM('ABERTA','EM_ANALISE','PROPOSTA_ENVIADA','CONTRATADA','CANCELADA') DEFAULT 'ABERTA',
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_demandas_empresa (empresa_id),
    INDEX idx_demandas_status (status),
    INDEX idx_demandas_cargo (cargo),
    INDEX idx_demandas_tipo (tipo_servico),
    INDEX idx_demendas_responsavel (responsavel_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================================
-- LAYER 5 — Terceirização (Facilities — preservado)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- PARCEIROS, FORNECEDORES, COLABORADORES, ALOCACOES
-- Reaproveitados integralmente — mantém geração de contrato de terceirização.
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

-- =============================================================================
-- LAYER 6 — Suporte & Comunicação (preservado)
-- =============================================================================

CREATE TABLE tickets (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    cliente_id          BIGINT,
    usuario_id          BIGINT NOT NULL,
    categoria           VARCHAR(100),
    prioridade          ENUM('BAIXA','MEDIA','ALTA','URGENTE') DEFAULT 'MEDIA',
    titulo              VARCHAR(255) NOT NULL,
    descricao           TEXT,
    status              ENUM('ABERTO','EM_ANALISE','RESOLVIDO','FECHADO') DEFAULT 'ABERTO',
    responsavel_id      BIGINT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_tickets_cliente (cliente_id),
    INDEX idx_tickets_usuario (usuario_id),
    INDEX idx_tickets_status (status),
    INDEX idx_tickets_prioridade (prioridade)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE notificacoes (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT NOT NULL,
    titulo              VARCHAR(255) NOT NULL,
    mensagem            TEXT,
    lida                TINYINT(1) DEFAULT 0,
    link                VARCHAR(500),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_notificacoes_usuario (usuario_id),
    INDEX idx_notificacoes_lida (lida)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE logs (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT,
    modulo              VARCHAR(50),
    acao                VARCHAR(100),
    detalhes            TEXT,
    ip                  VARCHAR(45),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_logs_usuario (usuario_id),
    INDEX idx_logs_modulo (modulo),
    INDEX idx_logs_data (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================================
-- LAYER 7 — Integração & Automação (preservado)
-- =============================================================================

CREATE TABLE webhooks (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    evento              VARCHAR(100) NOT NULL,
    url                 VARCHAR(500) NOT NULL,
    headers_json        JSON,
    ativo               TINYINT(1) DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_webhooks_evento (evento),
    INDEX idx_webhooks_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE fila_automacao (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    evento              VARCHAR(100) NOT NULL,
    payload_json        JSON,
    status              ENUM('PENDENTE','PROCESSANDO','SUCESSO','ERRO') DEFAULT 'PENDENTE',
    tentativas          INT DEFAULT 0,
    max_tentativas      INT DEFAULT 5,
    proxima_execucao    TIMESTAMP,
    erro                TEXT,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_fila_evento (evento),
    INDEX idx_fila_status (status),
    INDEX idx_fila_proxima (proxima_execucao)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE mensagens (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    whatsapp_number     VARCHAR(20) NOT NULL,
    mensagem            TEXT NOT NULL,
    direcao             ENUM('RECEBIDA','ENVIADA') DEFAULT 'RECEBIDA',
    status              ENUM('PENDENTE','ENVIADA','ERRO','ENTREGUE','LIDA') DEFAULT 'PENDENTE',
    session_id          VARCHAR(100),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_mensagens_numero (whatsapp_number),
    INDEX idx_mensagens_status (status),
    INDEX idx_mensagens_data (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE emails_enviados (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    destinatario        VARCHAR(255) NOT NULL,
    assunto             VARCHAR(255) NOT NULL,
    corpo_html          LONGTEXT,
    status              ENUM('ENVIADO','ERRO','ABERTO','CLICK') DEFAULT 'ENVIADO',
    template_id         VARCHAR(100),
    provedor            VARCHAR(50),
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_emails_destinatario (destinatario),
    INDEX idx_emails_status (status),
    INDEX idx_emails_data (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE conversas_ia (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    cliente_id          BIGINT,
    usuario_id          BIGINT,
    sessao_id           VARCHAR(100),
    mensagem            TEXT NOT NULL,
    resposta            TEXT,
    contexto_json       JSON,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_conversas_cliente (cliente_id),
    INDEX idx_conversas_sessao (sessao_id),
    INDEX idx_conversas_data (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- AUTOMAÇÃO: Eventos e templates
-- -----------------------------------------------------------------------------
CREATE TABLE eventos_automacao (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) NOT NULL,
    evento              VARCHAR(100) NOT NULL,
    tipo                ENUM('EMAIL','WHATSAPP','INTEGRACAO') NOT NULL,
    ativo               TINYINT(1) DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_eventos_evento (evento),
    INDEX idx_eventos_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE fluxos_automacao (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    evento_id           BIGINT NOT NULL,
    ordem               INT NOT NULL,
    acao                VARCHAR(50) NOT NULL,
    config_json         JSON,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_fluxos_evento (evento_id),
    INDEX idx_fluxos_ordem (ordem)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE templates_email (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) NOT NULL,
    assunto             VARCHAR(255) NOT NULL,
    corpo_html          LONGTEXT,
    corpo_texto         TEXT,
    ativo               TINYINT(1) DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_templates_nome (nome),
    INDEX idx_templates_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE templates_whatsapp (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(100) NOT NULL,
    mensagem            TEXT NOT NULL,
    ativo               TINYINT(1) DEFAULT 1,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_templates_wa_nome (nome),
    INDEX idx_templates_wa_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================================
-- LAYER 8 — DOCUMENTOS (preparado para futuro SaaS)
-- =============================================================================

CREATE TABLE documentos (
    id                  BIGINT      PRIMARY KEY AUTO_INCREMENT,
    usuario_id          BIGINT NOT NULL,
    tipo                VARCHAR(50) NOT NULL,
    arquivo_url         VARCHAR(500) NOT NULL,
    data_expiracao      DATE,
    status              ENUM('ATIVO','INATIVO','EXPIRADO') DEFAULT 'ATIVO',
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_documentos_usuario (usuario_id),
    INDEX idx_documentos_tipo (tipo),
    INDEX idx_documentos_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
