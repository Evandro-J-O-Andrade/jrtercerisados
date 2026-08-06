-- =============================================================================
-- RELATIONSHIPS — Foreign Keys
-- =============================================================================
-- Run AFTER all tables are created (02_tables_*.sql)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- USUARIOS → EMPRESA
-- -----------------------------------------------------------------------------
ALTER TABLE usuarios
    ADD CONSTRAINT fk_usuarios_empresa
    FOREIGN KEY (empresa_id) REFERENCES empresa(id)
        ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE usuario_permissoes
    ADD CONSTRAINT fk_up_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_up_permissao
    FOREIGN KEY (permissao_id) REFERENCES permissoes(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- CLIENTES → USUARIOS (commercial contact / sales rep)
-- -----------------------------------------------------------------------------
ALTER TABLE clientes
    ADD CONSTRAINT fk_clientes_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE RESTRICT;


-- -----------------------------------------------------------------------------
-- CLIENTE_SERVICOS → CLIENTES, SERVICOS
-- -----------------------------------------------------------------------------
ALTER TABLE cliente_servicos
    ADD CONSTRAINT fk_cs_cliente
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_cs_servico
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- LEADS → USUARIOS (responsible sales rep)
-- -----------------------------------------------------------------------------
ALTER TABLE leads
    ADD CONSTRAINT fk_leads_responsavel
    FOREIGN KEY (responsavel_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- CONTRATOS → CLIENTES
-- -----------------------------------------------------------------------------
ALTER TABLE contratos
    ADD CONSTRAINT fk_contratos_cliente
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON UPDATE CASCADE ON DELETE RESTRICT;


-- -----------------------------------------------------------------------------
-- CANDIDATOS → USUARIOS (recruiter)
-- -----------------------------------------------------------------------------
ALTER TABLE candidatos
    ADD CONSTRAINT fk_candidatos_responsavel
    FOREIGN KEY (responsavel_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- PARCEIROS → USUARIOS
-- -----------------------------------------------------------------------------
ALTER TABLE parceiros
    ADD CONSTRAINT fk_parceiros_responsavel
    FOREIGN KEY (responsavel_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- COLABORADORES → USUARIOS
-- -----------------------------------------------------------------------------
ALTER TABLE colaboradores
    ADD CONSTRAINT fk_colaboradores_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE RESTRICT;


-- -----------------------------------------------------------------------------
-- ALOCACOES → COLABORADORES, CLIENTES, CONTRATOS
-- -----------------------------------------------------------------------------
ALTER TABLE alocacoes
    ADD CONSTRAINT fk_alocacoes_colaborador
    FOREIGN KEY (colaborador_id) REFERENCES colaboradores(id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT fk_alocacoes_cliente
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT fk_alocacoes_contrato
    FOREIGN KEY (contrato_id) REFERENCES contratos(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- TICKETS → CLIENTES, USUARIOS, USUARIOS (responsavel)
-- -----------------------------------------------------------------------------
ALTER TABLE tickets
    ADD CONSTRAINT fk_tickets_cliente
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON UPDATE CASCADE ON DELETE SET NULL,
    ADD CONSTRAINT fk_tickets_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT fk_tickets_responsavel
    FOREIGN KEY (responsavel_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- NOTIFICACOES → USUARIOS
-- -----------------------------------------------------------------------------
ALTER TABLE notificacoes
    ADD CONSTRAINT fk_notificacoes_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- LOGS → USUARIOS
-- -----------------------------------------------------------------------------
ALTER TABLE logs
    ADD CONSTRAINT fk_logs_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- CONVERSAS_IA → CLIENTES, USUARIOS
-- -----------------------------------------------------------------------------
ALTER TABLE conversas_ia
    ADD CONSTRAINT fk_conversas_cliente
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON UPDATE CASCADE ON DELETE SET NULL,
    ADD CONSTRAINT fk_conversas_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- FILA_AUTOMACAO → (no FKs, payload_json holds entity ids)
-- -----------------------------------------------------------------------------
-- Fila holds event-driven payloads; resolved by workers, not FK constraints.
