import Link from "next/link";
export default function Footer() {
  return (
    <footer className="container mx-auto mb-12 px-6 xl:px-0 flex flex-col-reverse lg:flex-row justify-between">
      <div>Copyright {new Date().getFullYear()} Dylan Ramsey</div>
      <div className="mb-4 lg:mb-0">
        <ul className="flex flex-row gap-x-8">
          <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            <Link href="/">Home</Link>
          </li>
          <Link
            href="/blog"
            className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          >
            Blog
          </Link>
          <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
