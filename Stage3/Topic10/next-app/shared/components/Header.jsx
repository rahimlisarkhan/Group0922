'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-16 border-2 border-amber-800 mb-5 flex items-center px-4">
      <nav>
        <ul className="flex gap-6 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'font-bold underline' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
