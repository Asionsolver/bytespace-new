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
    <footer className="bg-white px-5 sm:px-10  lg:px-30">
      <div className="mx-auto max-w-300 px-5 sm:px-10 lg:px-0 pt-17.75 pb-[48px]">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row  gap-12 lg:gap-23 mb-16 lg:mb-32.5">
          {/* Left: Logo + Newsletter */}
          <div className="flex flex-col gap-11.25 max-w-132">
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
                  className="w-full sm:w-94 rounded-full  outline-[1px] outline-neutral-200 bg-white px-6 text-base text-neutral-950 font-body h-13"
                />
                <Button
                  variant="primary"
                  className="h-[52px] shrink-0 px-8 bg-[#CBFC01] hover:bg-[#D4FB20] text-[#242528] rounded-full text-base font-medium shadow-none cursor-pointer"
                >
                  Search
                </Button>
              </div>
              <p className="font-body text-body-xs text-neutral-950 max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right: Navigation Columns (No column headers as per Figma) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 max-w-145 w-full pt-12">
            {/* Column 1 */}
            <ul className="flex flex-col gap-4">
              {FOOTER_BROWSE_COL1.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-body text-body-s! text-neutral-950 hover:text-primary-800 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-4 h-fit">
              {FOOTER_BROWSE_COL2.map((item) => (
                <li key={item} >
                  <Link
                    href="#"
                    className="font-body text-body-s!  text-neutral-950 hover:text-primary-800 transition-colors "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="flex flex-col gap-4">
              {FOOTER_PLATFORM.map((item) => (
                <li key={item} className="m-0! p-0!">
                  <Link
                    href="#"
                    className="font-body text-body-s!  text-neutral-950 hover:text-primary-800 transition-colors m-0! p-0!"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5.75">
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
