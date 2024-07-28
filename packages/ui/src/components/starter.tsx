import { Button } from "@ui/atoms/ui/button";
import Image from "next/image";

export const Starter = () => {
  return (
    <div className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-20 gap-16 dark:bg-black dark:text-white">
      <main className="flex flex-col gap-8 row-start-2">
        Hello World!
      </main>
      <footer className="flex gap-6 row-start-3 text-sm">
        <a
          href="https://github.com/ralphilius/turbo-tailwind-shadcn-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline underline-offset-4"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github →
        </a>
      </footer>
    </div>
  );
};
