import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link href="/"><p>Home </p></Link>
            <Link href="/about"><p>About </p></Link>
            <Link href="/ninjas"><p>Ninja Listing </p></Link>
        </nav>
     );
}
 
export default Navbar;