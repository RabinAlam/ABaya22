## 2024-11-01 - Import Path Fix
**Learning:** `use-toast` is located in `@/hooks/use-toast`, not `@/components/ui/use-toast`.
**Action:** Always verify the correct import paths for hooks in this project.
## 2024-11-01 - Link Button A11y
**Learning:** Some components use `<Link passHref><Button>...</Button></Link>` pattern, which violates a11y standards because interactive elements cannot be nested. Furthermore, passing an un-styled `<Button>` down can be an accessibility/styling hazard.
**Action:** Use `asChild` property on the Shadcn UI `<Button>` or `buttonVariants` to properly style links like so: `<Button asChild><Link href="...">...</Link></Button>`.
