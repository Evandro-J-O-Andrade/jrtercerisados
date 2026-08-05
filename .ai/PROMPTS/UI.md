# Prompt Mestre — UI Premium (SPRINT UI-001)

## Contexto

Este projeto é uma plataforma SaaS para terceirização de serviços (segurança,
portaria, limpeza, zeladoria, facilities). O foco desta sprint é **exclusivamente
UX/UI** — não alterar regras de negócio, services ou formulários.

## Diretrizes de imagem

**NÃO** utilize imagens genéricas ou aleatórias.

**PREFIRA:**

- Imagens institucionais Premium
- Bancos de imagens profissionais (Unsplash, Pexels, iStock)
- Imagens geradas por IA (DALL·E, Midjourney) com prompts específicos
- Fotografia corporativa realista

**EVITE:**

- Pessoas sorrindo exageradamente (forçado)
- Ambientes residenciais
- Imagem de template óbvio
- Baixa resolução
- Sobreposatura excessiva

**SUGESTÕES DE BUSCA:**

```
"corporate security team"
"commercial building lobby"
"professional security guard"
"office cleaning service"
"facility management"
"uniformed security patrol"
```

## Componentes a refatorar

1. **Hero** — tela cheia, imagem de fundo premium, overlay, título forte, CTA
2. **ServiceCard** — cards modernos com hover, ícone, titulo, descrição
3. **FeatureCard** — grid de diferenciais com ícones
4. **ContactCard** — cards de contato com ícone e informações
5. **Stats** — indicadores numéricos grandes
6. **Testimonial** — depoimentos com foto, nome, cargo, empresa
7. **BottomNavigation** — navegação inferior mobile

## Diretrizes de design

- **Dark mode** como padrão (já implementado via CSS variables)
- **Light mode** preparado
- Tipografia elegante: Inter (headings e body)
- Espaçamento generoso — muito whitespace
- Sombras suaves (`shadow-premium`, `shadow-elevated`)
- Bordas discretas
- Animações leves (Framer Motion)
- Paleta: navy escuro + gold (primary)

## O que NÃO fazer

- Não alterar arquitetura existente
- Não alterar services (camada de dados)
- Não alterar formulários (validações, schema)
- Não usar cores diretas: `text-white`, `bg-white`, `text-navy-*`, `bg-gold-*`
- Não usar emojis
- Não quebrar responsividade

## O que fazer

1. Usar apenas tokens semânticos:
   - `text-foreground`, `text-muted-foreground`
   - `bg-background`, `bg-card`, `bg-surface`, `bg-muted`
   - `text-primary`, `bg-primary`, `border-primary`
   - `text-destructive`, `text-success`, `text-warning`

2. Criar componentes reutilizáveis seguindo Atomic Design

3. Referenciar imagens via `src/config/images.ts`

4. Manter consistência visual entre desktop e mobile

## Instruções para imagens

Criar pastas em `public/images/`:

```
hero/        — imagens hero section
services/    — imagens por serviço
partners/    — logos de parceiros
clients/     — logos de clientes
about/       — equipe, escritórios
team/        — fotos da equipe
backgrounds/ — backgrounds decorativos
logos/       — logos da empresa
social/      — ícones sociais
favicons/    — favicons
```

Todas as imagens devem ser referenciadas no arquivo `src/config/images.ts`.
