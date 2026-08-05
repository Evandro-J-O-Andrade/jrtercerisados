# Naming Conventions

## Files and Directories

- **Files**: kebab-case
  - `Button.tsx`, `services.ts`, `useAuth.ts`
- **Directories**: kebab-case
  - `components/`, `services/`, `layout/`

## Components

- **React Components**: PascalCase
  - `UserProfile.tsx`, `ServiceCard.tsx`
- **Component files**: PascalCase with `.tsx`
  - `UserProfile.tsx`

## Functions and Hooks

- **Functions**: camelCase
  - `getUserById`, `formatCurrency`
- **Hooks**: camelCase with `use` prefix
  - `useAuth`, `useLocalStorage`, `useFormValidation`

## Variables and Constants

- **Variables**: camelCase
  - `userName`, `isLoading`
- **Constants**: UPPER_SNAKE_CASE (for magic numbers/strings)
  - `MAX_FILE_SIZE`, `DEFAULT_PAGE_SIZE`
- **React state**: camelCase
  - `const [isOpen, setIsOpen] = useState(false)`

## Types and Interfaces

- **Interfaces**: PascalCase with `Interface` suffix (optional but preferred)
  - `UserInterface`, `ServiceInterface`
  - Or without suffix: `User`, `Service` (when the name is already clear)
- **Type aliases**: PascalCase
  - `type UserRole = "admin" | "manager" | "user"`
- **Generic types**: PascalCase, single letter or descriptive
  - `T`, `TData`, `TResult`

## CSS and Tailwind

- **Custom classes**: kebab-case
  - `btn-primary`, `card-elevated`
- **Tailwind variants**: Use existing design tokens

## API and Services

- **API endpoints**: camelCase or kebab-case
  - `getUser`, `createBudgetRequest`
- **Service files**: camelCase
  - `userService.ts`, `budgetService.ts`

## Zod Schemas

- **Schema names**: camelCase with `Schema` suffix
  - `loginSchema`, `budgetRequestSchema`
- **Inferred types**: PascalCase
  - `type LoginFormData = z.infer<typeof loginSchema>`
