# Git Workflow

## Branches

```
main             # Production code (live site)
production       # Production deployments
develop          # Development / integration branch
development      # Active development (alias for develop)
feature/*        # New features
bugfix/*         # Bug fixes
hotfix/*         # Urgent production fixes
release/*        # Release preparation
```

## Branch Naming

```text
feature/JST-001-user-authentication
bugfix/JST-002-fix-login-redirect
hotfix/JST-003-critial-security-patch
```

## Commit Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add login page with form validation
fix: resolve redirect after successful login
refactor: extract form schema to separate file
docs: update AGENTS.md with new coding rules
style: format code with Prettier
perf: optimize bundle size
test: add unit tests for auth service
build: update Vite config for new alias
chore: update dependencies
```

## Pull Requests

1. Create from `feature/*` or `bugfix/*`
2. Target `develop` (not `main`)
3. Include description of changes
4. Link to related issues
5. Require at least one review
6. Pass CI checks (lint, typecheck, build)
