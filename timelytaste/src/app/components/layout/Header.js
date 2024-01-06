import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-bold text-2xl" href="/">
        <img src={'/logo.png'} className=" h-36 w-60 rounded-md"></img>
      </Link>
      <nav className="flex items-center gap-10 text-gray-600 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Contact</Link>
        <Link href={""} className="bg-primary text-white px-5 py-2 rounded-full">Login</Link>
      </nav>
    </header>
  );
}
