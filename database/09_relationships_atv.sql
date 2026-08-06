-- =============================================================================
-- RELATIONSHIPS — Recrutamento & Agência de Empregos (ATV)
-- =============================================================================
-- Foreign keys for the recruitment module
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Vagas → usuarios (criador), empresa
-- -----------------------------------------------------------------------------
ALTER TABLE vagas
    ADD CONSTRAINT fk_vagas_usuario
    FOREIGN KEY (empresa_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Vaga Habilidades → vagas, habilidades
-- -----------------------------------------------------------------------------
ALTER TABLE vaga_habilidades
    ADD CONSTRAINT fk_vh_vaga
    FOREIGN KEY (vaga_id) REFERENCES vagas(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_vh_habilidade
    FOREIGN KEY (habilidade_id) REFERENCES habilidades(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Curriculos → candidatos (candidato_id maps to colaborador or usuario)
-- -----------------------------------------------------------------------------
ALTER TABLE curriculos
    ADD CONSTRAINT fk_curriculo_candidato
    FOREIGN KEY (candidato_id) REFERENCES colaboradores(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Experiencias → curriculos
-- -----------------------------------------------------------------------------
ALTER TABLE experiencias
    ADD CONSTRAINT fk_exp_curriculo
    FOREIGN KEY (curriculo_id) REFERENCES curriculos(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Formacoes → curriculos
-- -----------------------------------------------------------------------------
ALTER TABLE formacoes
    ADD CONSTRAINT fk_form_curriculo
    FOREIGN KEY (curriculo_id) REFERENCES curriculos(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Cursos → curriculos
-- -----------------------------------------------------------------------------
ALTER TABLE cursos
    ADD CONSTRAINT fk_curs_curriculo
    FOREIGN KEY (curriculo_id) REFERENCES curriculos(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Idiomas → curriculos
-- -----------------------------------------------------------------------------
ALTER TABLE idiomas
    ADD CONSTRAINT fk_idioma_curriculo
    FOREIGN KEY (curriculo_id) REFERENCES curriculos(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Curriculo Habilidades → curriculos, habilidades
-- -----------------------------------------------------------------------------
ALTER TABLE curriculo_habilidades
    ADD CONSTRAINT fk_ch_curriculo
    FOREIGN KEY (curriculo_id) REFERENCES curriculos(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_ch_habilidade
    FOREIGN KEY (habilidade_id) REFERENCES habilidades(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Candidaturas → vagas, candidatos (colaboradores), curriculos
-- -----------------------------------------------------------------------------
ALTER TABLE candidaturas
    ADD CONSTRAINT fk_cand_vaga
    FOREIGN KEY (vaga_id) REFERENCES vagas(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_cand_candidato
    FOREIGN KEY (candidato_id) REFERENCES colaboradores(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_cand_curriculo
    FOREIGN KEY (curriculo_id) REFERENCES curriculos(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- Processos Seletivos → vagas, empresas (usuarios)
-- -----------------------------------------------------------------------------
ALTER TABLE processos_seletivos
    ADD CONSTRAINT fk_ps_vaga
    FOREIGN KEY (vaga_id) REFERENCES vagas(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_ps_empresa
    FOREIGN KEY (empresa_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_ps_responsavel
    FOREIGN KEY (responsavel_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- Entrevistas → processos_seletivos, candidaturas
-- -----------------------------------------------------------------------------
ALTER TABLE entrevistas
    ADD CONSTRAINT fk_entrevista_processo
    FOREIGN KEY (processo_id) REFERENCES processos_seletivos(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_entrevista_candidatura
    FOREIGN KEY (candidatura_id) REFERENCES candidaturas(id)
        ON UPDATE CASCADE ON DELETE CASCADE;


-- -----------------------------------------------------------------------------
-- Avaliacoes → entrevistas, candidatos
-- -----------------------------------------------------------------------------
ALTER TABLE avaliacoes
    ADD CONSTRAINT fk_avaliacao_entrevista
    FOREIGN KEY (entrevista_id) REFERENCES entrevistas(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_avaliacao_avaliador
    FOREIGN KEY (avaliador_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE ON DELETE SET NULL;


-- -----------------------------------------------------------------------------
-- Vaga Favoritos → candidatos (colaboradores), vagas
-- -----------------------------------------------------------------------------
ALTER TABLE vaga_favoritos
    ADD CONSTRAINT fk_vf_candidato
    FOREIGN KEY (candidato_id) REFERENCES colaboradores(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT fk_vf_vaga
    FOREIGN KEY (vaga_id) REFERENCES vagas(id)
        ON UPDATE CASCADE ON DELETE CASCADE;
