# Frontend Development Prompt

## When creating or modifying frontend components

- Use functional components with typed props
- Keep components small and focused (single responsibility)
- Use Tailwind CSS for styling — no inline styles
- Use Framer Motion for animations (subtle, professional)
- Use Lucide React for icons
- Ensure mobile-first responsive design
- Implement Dark/Light mode support
- Follow accessibility guidelines (ARIA labels, focus rings, keyboard navigation)

## Component Structure

```text
components/
├── ui/           # Primitive UI components (Button, Input, Card)
├── common/       # Shared components (Container, etc.)
├── layout/       # Layout components (Navbar, Footer)
├── sections/     # Page sections
└── navigation/   # Navigation components
```

## Page Structure

```text
pages/
├── Home.tsx
├── Sobre.tsx
├── Servicos.tsx
├── ServicoDetalhe.tsx
├── Clientes.tsx
├── Parceiros.tsx
├── Fornecedores.tsx
├── TrabalheConosco.tsx
├── Contato.tsx
├── Login.tsx
└── Dashboard.tsx
```

## Best Practices

- Use `lazy` + `Suspense` for code splitting
- Always use `twMerge` (via `cn()` utility) for class merging
- Extract schemas to Zod for validation
- Use `react-hook-form` for all forms
- Add loading, success, and error states to every form
- Use semantic HTML elements
