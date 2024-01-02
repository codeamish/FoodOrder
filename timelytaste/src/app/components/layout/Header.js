import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-bold text-2xl" href="/">
        Timely Taste
      </Link>
      <nav className="flex gap-5">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Contact</Link>
        <Link href={""}>Login</Link>
      </nav>
    </header>
  );
}
