import Link from "next/link";
type Props = {
    loggedIn: boolean
}
export default function NavBar({loggedIn}: Props) {
    return (
        <nav className="bg-white p-3 w-full">
            <ul className="flex space-x-3">
            <li><Link href="/">Travelocity</Link></li>
            <li><Link href="/explore">Explore Locations</Link></li>
            <li><Link href="/expenses/planner">Plan Expenses</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            {loggedIn ? <Link href="/account/login">Log in</Link> : <Link href="/account/logout">Log out</Link>}
            </ul>
        </nav>
    )
}