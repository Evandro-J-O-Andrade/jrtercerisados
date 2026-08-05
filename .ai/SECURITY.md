# Security

Always prepare for:

JWT

Cookies HttpOnly

CSP

CSRF

XSS

SQL Injection

Rate Limit

Authentication

Authorization

RBAC

Audit Logs

LGPD

---

## Implementation Checklist

### Authentication

- [ ] JWT-based authentication
- [ ] HttpOnly cookies for token storage
- [ ] Token refresh mechanism
- [ ] Session timeout

### Authorization

- [ ] Role-based access control (RBAC)
- [ ] Protected routes
- [ ] User roles: admin, manager, commercial, hr, user

### Input Validation

- [ ] Client-side validation (Zod)
- [ ] Server-side validation (Supabase Row Level Security)
- [ ] Sanitize all form inputs

### Headers

- [ ] Content Security Policy (CSP)
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Strict-Transport-Security (HSTS)
- [ ] Referrer-Policy

### Data Protection

- [ ] GDPR / LGPD compliance
- [ ] HTTPS everywhere
- [ ] Rate limiting on API endpoints
- [ ] CSRF protection on forms
- [ ] XSS prevention (output encoding)
- [ ] SQL injection prevention (parameterized queries via Supabase)

### Audit

- [ ] Audit logs for admin actions
- [ ] Data access logging
- [ ] Error tracking without exposing sensitive data
