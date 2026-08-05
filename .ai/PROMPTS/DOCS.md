# Documentation Prompt

## Documentation Standards

- Every important feature must be documented
- Never leave undocumented code
- Use JSDoc for functions and components
- Document complex logic with comments (but not obvious code)
- Keep README.md up to date

## Documentation Types

1. **Architecture Docs** (`.ai/` directory)
   - AGENTS.md, PROJECT.md, CODING_RULES.md, etc.

2. **Project Docs** (`docs/` directory)
   - 00-VisaoGeral.md — Project overview
   - 01-Arquitetura.md — Architecture
   - 02-Frontend.md — Frontend setup
   - 03-Backend.md — Backend plan
   - 04-Banco.md — Database schema
   - 05-Automacoes.md — Automations
   - 06-Seguranca.md — Security
   - 07-Roadmap.md — Roadmap
   - 08-Deploy.md — Deployment
   - 09-Comercial.md — Commercial proposal

3. **Code Documentation**
   - Type names are self-documenting
   - Function docstrings for complex logic
   - Component prop descriptions

## When Documenting

- After implementing a new feature
- When refactoring existing code
- When architecture decisions are made
- Update docs before pushing to production
