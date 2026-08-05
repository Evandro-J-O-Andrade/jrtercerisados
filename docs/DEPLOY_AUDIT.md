# AUDITORIA DEPLOY JRTERCERISADOS

## Status atual

- **Repo:** https://github.com/Evandro-J-O-Andrade/jrtercerisados
- **Branch:** `main` (2 commits)
- **Build local:** `tsc --noEmit` = 0 erros, `vite build` = ✓ (9.11s)

---

## Problema encontrado

```
npm error code ENOENT
npm error path /opt/buildhome/repo/package.json
npm error enoent Could not read package.json
```

Cloudflare Pages tenta executar `npm run build` mas não encontra `package.json`.

---

## Causa raiz

**Configuração de "Root directory" incorreta no Cloudflare Pages.**

Verificado via GitHub: `package.json` **existe e está no root** do repo (`HEAD:package.json` está tracked).

O erro `/opt/buildhome/repo/package.json` indica que o Cloudflare clonou o repo mas está procurando em um subdiretório — ou seja, o campo **Root directory** na configuração do Cloudflare Pages está apontando para uma pasta errada (ex: `src/` ou `app/`).

---

## Configuração Cloudflare Pages (correta)

```
Root directory:     /            (ou deixar vazio)
Build command:      npm run build
Build output dir:   dist
Node version:       20  (recomendado 20.x LTS)
Package manager:    npm
Git Gateway:        GitHub
```

### Build command detalhado:

```bash
# Cloudflare executa:
npm install        # instala dependências via package-lock.json
tsc -b             # passo 1 do npm run build (TypeScript)
vite build         # passo 2 do npm run build (Vite, output → dist/)
```

Saída esperada: `dist/` contendo `index.html` + `assets/*.js`

---

## Outros problemas encontrados

### 1. `tsconfig.tsbuildinfo` está tracked no git

- Arquivo: `tsconfig.tsbuildinfo` (commitado acidentalmente)
- Deve estar no `.gitignore`
- Não afeta o build, mas é ruído

**Correção:** Adicionar `tsconfig.tsbuildinfo` ao `.gitignore`

### 2. Dependência `framer-motion` já instalada

```
framer-motion: ^12.23.12  ✓
```

Não precisa instalar GSAP — Framer Motion cobre todos os casos de uso premium (parallax, scroll-trigger, animations).

### 3. `public/images/` agora trackado

- As pastas de assets (`public/images/brand/`, `public/images/services/`, etc.) foram criadas e commitadas
- Arquivos SVG placeholder criados
- Imagens `.webp` reais serão adicionadas posteriormente

### 4. `.env.local` e `.env` estão no .gitignore ✓

```
.env
.env.local
.env.*.local
```

Secrets não estarão expostos no deploy.

### 5. `package-lock.json` está trackado ✓

Cloudflare usará npm com lock file consistente.

---

## Estrutura do projeto verificada

```
jrtercerisados/
├── index.html              ✓ (Vite entry, root level)
├── package.json            ✓ (root level, build: "tsc -b && vite build")
├── package-lock.json       ✓ (committed)
├── vite.config.ts          ✓ (outDir: 'dist')
├── tsconfig.json           ✓ (paths: @/* → ./src/*)
├── postcss.config.js       ✓
├── tailwind.config.ts      ✓
├── .gitignore              ✓ (node_modules, dist, .env*)
├── public/
│   └── images/             ✓ (NOW tracked - SVGs + .webp placeholders)
└── src/
    ├── main.tsx            ✓ (React 19 entry)
    ├── App.tsx             ✓
    ├── pages/              ✓ (11 pages)
    ├── components/         ✓ (ui, layout, sections, common)
    └── ...
```

---

## Correção necessária

1. **No painel do Cloudflare Pages:** Verificar que **Root directory = `/`** (ou deixado em branco)
2. **No repositório:** Remover `tsconfig.tsbuildinfo` do git e adicionar ao `.gitignore`:
   ```bash
   git rm --cached tsconfig.tsbuildinfo
   echo "tsconfig.tsbuildinfo" >> .gitignore
   git add .gitignore && git commit -m "chore: gitignore tsconfig.tsbuildinfo"
   ```

---

## Próximos passos

1. Ajustar o **Root directory** no Cloudflare Pages → `/`
2. Remover `tsconfig.tsbuildinfo` do git (clean up)
3. Adicionar imagens `.webp` reais nas pastas `public/images/`
4. Deploy deve passar com: `npm run build` → `dist/`
