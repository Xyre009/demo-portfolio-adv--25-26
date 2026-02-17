import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-yellow-950 bg-green-400 flex items-center justify-between px-6 md:px-20 lg:px-40 py-3">
      <Link href="/" className="text-xl font-bold">
        Erick
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact_me" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
