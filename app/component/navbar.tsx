import Link from "next/link";
export default function Navbar() {

    return(
        <nav className=" text-yellow-950 bg-green-400 flex gap-4 justify-between flex-row px-40">

       <ul>
<li> Erick </li>

       </ul>
      <ul className="flex gap-4">
<li>
    <Link href = "/" className="hover:underline">Home </Link>
</li>
<li>
    <Link href = "/projects" className="hover:underline">Projects </Link>
</li>
<li>
    <Link href = "/contact_me" className="hover:underline">Contact </Link>
</li>
      </ul>
        </nav>
    )

}
