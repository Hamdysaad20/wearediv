"use client";
import Link from "next/link";
import Image from "next/image";
import { footerNavigation } from "@/app/config/footer";

const CurrentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="relative w-svw overflow-hidden rounded-t-[30px] bg-primary-850/80">
      <div className="h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="relative grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="relative z-10 w-full">
            <div className="w-auto text-white">
              <div className="-ml-8 -mt-3 flex w-auto items-center">
                <Link
                  href="/"
                  className="flex w-auto cursor-pointer items-center rounded-2xl pt-4 duration-700 hover:animate-pulse hover:bg-gray-900/30"
                >
                  <Image
                    src="/images/identity/Full_Logo.png"
                    width={224}
                    height={64}
                    alt="Divzoon Network"
                    className="aspect-video h-16 w-56 rounded-3xl object-contain p-3 px-6 duration-500 hover:bg-purple-600/20"
                  />
                </Link>
              </div>
            </div>

            <p className="mt-2 max-w-xs text-lg font-bold text-white">
              {footerNavigation.companyInfo.tagline}
            </p>
            <p className="relative mt-4 block text-lg">Address:</p>
            <p className="relative block text-lg">
              {footerNavigation.companyInfo.address}
            </p>

            <p className="mt-4 max-w-xs font-bold text-white">
              <span className="relative text-lg">
                Reach through our social Media
              </span>{" "}
              <br />
            </p>

            {/* Social media */}
            <ul className="justify-left mt-4 flex w-full gap-6">
              {footerNavigation.socialMediaLinks.map(({ url, title, icon: Icon }, idx) => (
                <li key={idx}>
                  <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-200 transition"
                  >
                    <span className="sr-only select-none">{title}</span>
                    <span className="inline-block w-8 transition-all hover:!-rotate-6 hover:!scale-150 hover:text-blue-700">
                      <Icon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="right-0 z-10 grid w-[100%] grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {footerNavigation.sections.map(({ title, links }, idx) => (
              <div key={idx}>
                <p className="select-none text-2xl font-medium text-gray-50">
                  {title}
                </p>
                <ul className="relative mt-6 h-full w-full select-none space-y-4 text-sm">
                  {links?.map((link, index) => (
                    <li key={index}>
                      {link.status && link.url ? (
                        link.url.startsWith("http") ? (
                          <a
                            href={link.url}
                            className="text-gray-200 transition"
                          >
                            {link.title}
                          </a>
                        ) : (
                          <Link
                            href={link.url}
                            className="text-lg text-gray-200 transition duration-200 hover:text-purple-600"
                          >
                            {link.title}
                          </Link>
                        )
                      ) : (
                        <>
                          <span className="text-lg text-gray-200">
                            {link.title}
                          </span>
                          <span className="soon mx-2 rounded-full bg-purple-800 px-[4px] py-[2px] text-xs">
                            Soon
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl font-bold text-gray-50 text-center">
          © {CurrentYear} . Divzoon LLC. All rights reserved.
        </p>
      
      </div>
      
    </footer>
  );
}