import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, NAV_ACTIONS } from "@/lib/constants";
import { Container } from "@/components/container";
import { Cart } from "@/icons";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-360 flex items-center justify-between h-30 px-5 sm:px-10 lg:px-30">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/header-logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            className="h-[37px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation - desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-text-white ${link.active
                  ? "text-text-on-brand-primary font-medium text-label-m"
                  : "text-text-on-brand-muted font-normal text-base leading-[160%]"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {NAV_ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="text-text-on-brand-primary text-base leading-[24px] transition-colors hover:text-text-white"
              >
                {action.label}
              </Link>
            ))}
          </div>
          <button
            aria-label="Shopping cart"
            className="text-text-on-brand-primary hover:text-text-white transition-colors cursor-pointer"
          >
            <Cart size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
