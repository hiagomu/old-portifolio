import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <a href="#about"><li>About</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar