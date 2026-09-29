import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_BROWSE_COL1,
  FOOTER_BROWSE_COL2,
  FOOTER_PLATFORM,
  FOOTER_LEGAL,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-0 pt-[71px] pb-0">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[92px] mb-16 lg:mb-[130px]">
          {/* Left: Logo + Newsletter */}
          <div className="flex flex-col gap-[45px] max-w-[528px]">
            {/* Logo + Description */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/footer-logo.png"
                  alt="ByteSpace"
                  width={171}
                  height={37}
                  className="h-[37px] w-auto object-contain"
                />
              </Link>
              <p className="font-body text-body-s text-neutral-950">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-neutral-200 bg-white px-6 py-[18px] text-base text-neutral-950 placeholder:text-neutral-500 outline-none font-body h-[52px]"
                />
                <Button variant="primary" className="h-[52px] shrink-0 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="font-body text-body-xs text-neutral-950 max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right: Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 flex-1">
            {/* Browse Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-body text-base leading-[1.5] font-normal text-neutral-950">
                Browse
              </h4>
              <ul className="flex flex-col gap-4">
                {FOOTER_BROWSE_COL1.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-body text-body-s text-neutral-950 hover:text-primary-800 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Browse Column 2 (no heading) */}
            <div className="flex flex-col gap-6">
              <h4 className="font-body text-base leading-[1.5] font-normal text-transparent select-none hidden sm:block">
                Browse More
              </h4>
              <ul className="flex flex-col gap-4 sm:mt-0">
                {FOOTER_BROWSE_COL2.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-body text-body-s text-neutral-950 hover:text-primary-800 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Column */}
            <div className="flex flex-col gap-6">
              <h4 className="font-body text-base leading-[1.5] font-normal text-neutral-950">
                Platform
              </h4>
              <ul className="flex flex-col gap-4">
                {FOOTER_PLATFORM.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-body text-body-s text-neutral-950 hover:text-primary-800 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            <p className="font-body text-body-xs text-neutral-950">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_LEGAL.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-body text-body-xs text-neutral-950 hover:text-primary-800 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
