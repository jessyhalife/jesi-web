import Image from "next/image";
import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import ThemeButton from "@/app/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jesica Halife",
  description: "Jesica Halife - Fullstack software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-16x16.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <div className="dark:bg-slate-950 dark:text-white h-full w-full overflow-hidden">
          <div className="dark:bg-slate-950 bg-white flex flex-col justify-center md:flex-row min-h-screen overflow-auto px-6 py-8 md:px-0 md:py-24 gap-4 md:gap-0 max-w-screen-lg mx-auto relative">
            <aside className="bg-white dark:bg-slate-950 flex-[0.3] flex flex-col gap-4 items-center md:gap-24 md:justify-normal justify-between">
              <div className="rounded-full overflow-hidden shadow-md w-16 h-16 md:w-24 md:h-24">
                <Image
                  src="/jesi-dev.png"
                  alt="jesica"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <ul className="flex flex-row md:flex-col gap-1 text-sm md:text-lg flex-wrap">
                <li className="mb-2 flex flex-row gap-1 text-slate-500 dark:text-slate-200 font-semibold">
                  <p className="relative">
                    <span className="line-through">stalk</span>
                    <span className="bg-slate-200 absolute text-black font-mono -top-3 md:-top-4 -left-1 md:-left-2 -rotate-12">
                      reach
                    </span>
                  </p>

                  <p>me at:</p>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/jesica-halife/">
                    / linkedin
                  </Link>
                </li>

                <li>
                  <Link href="https://github.com/jessyhalife">/ github</Link>
                </li>

                <li>
                  <Link href="mailto:halife.jessy@gmail.com">/ email</Link>
                </li>
              </ul>
            </aside>
            <main className="md:flex-[0.6] p-4">{children}</main>
            <div className="fixed right-4 top-4 ">
              <ThemeButton />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
