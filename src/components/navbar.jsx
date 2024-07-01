import Menu from "./menu";


function Navbar() {
    return (
        <nav className="sticky top-0 bg-cream border-coffee border-b-4 h-12 flex gap-14 items-center justify-center rounded-b-full border-b-1">
            <a href="#home"><Menu>Home</Menu></a>
            <a href="#about"><Menu>About</Menu></a>
            <a href="#vision"><Menu>Vision</Menu></a>
            <a href="#contacts"><Menu>Contact</Menu></a>
        </nav>
    )
}
export default Navbar