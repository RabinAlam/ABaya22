1. **Fix Link/Button Accessibility in `components/header.tsx`**:
   - Change `<Link passHref><Button>...</Button></Link>` to `<Button asChild><Link href="...">...</Link></Button>`.
   - This ensures proper nesting of interactive elements and allows the anchor tag to receive the correct styling and properties without nesting buttons inside anchors (which is invalid HTML and bad for a11y).
2. **Fix Link/Button Accessibility in `app/page.tsx`**:
   - Change `<Link href="/services" passHref><Button size="lg">Explore Our Collection</Button></Link>` to `<Button asChild size="lg"><Link href="/services">Explore Our Collection</Link></Button>`.
   - Change `<Link href="/contact" passHref><Button size="lg">Contact Us Now</Button></Link>` to `<Button asChild size="lg"><Link href="/contact">Contact Us Now</Link></Button>`.
3. **Verify the build**:
   - Run `pnpm build` to ensure the application still builds successfully.
   - Run `pnpm test` and `pnpm lint` to ensure the changes are correct and have not introduced regressions.
   - Test accessibility by verifying the generated HTML for valid tag nesting.
4. **Complete Pre-Commit Steps**:
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
5. **Submit**: Create PR with the UX improvement.
