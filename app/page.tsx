import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-white font-bold text-3xl">MYWEBSITE.COM</h1>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">Get started by logging in to website.</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="bg-white text-black font-semibold py-3 px-[50px] rounded-full hover:bg-white/90"
            href="/user/login"
          >
            Login
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/user/signup"
            rel="noopener noreferrer"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}


