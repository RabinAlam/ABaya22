"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            ABAYA
          </Link>
          <div className="flex items-center space-x-4">
            <Button asChild variant={pathname === '/' ? 'default' : 'ghost'}>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant={pathname === '/services' ? 'default' : 'ghost'}>
              <Link href="/services">Services</Link>
            </Button>
            <Button asChild variant={pathname === '/about' ? 'default' : 'ghost'}>
              <Link href="/about">About</Link>
            </Button>
            <Button asChild variant={pathname === '/contact' ? 'default' : 'ghost'}>
              <Link href="/contact">Contact</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;