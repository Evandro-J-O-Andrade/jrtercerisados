# Code Review Prompt

## Review Checklist

### Code Quality

- [ ] Components are small and focused
- [ ] No business logic in components
- [ ] No `any` types
- [ ] All types are defined and exported
- [ ] Reusable components are extracted

### Architecture

- [ ] Services are used for data access (no direct API calls in components)
- [ ] Feature boundaries are respected
- [ ] Dependencies point inward (Clean Architecture)

### UI/UX

- [ ] Responsive design (mobile first)
- [ ] Dark/Light mode support
- [ ] Accessibility attributes present
- [ ] Animations are subtle
- [ ] Consistent with design system

### Forms

- [ ] All forms use React Hook Form
- [ ] All fields have Zod validation
- [ ] Loading, success, error states handled
- [ ] No inline styles

### Security

- [ ] No secrets in code
- [ ] Inputs are validated
- [ ] No XSS vectors

### Git

- [ ] Commits follow Conventional Commits
- [ ] Branch name matches convention

## Common Issues to Catch

- `any` usage
- Inline styles
- Duplicated code
- Large components (> 200 lines)
- Missing error handling
- Missing loading states
- Hardcoded values without constants
