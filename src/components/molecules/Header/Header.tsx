import './Header.css'

function Header() {
    return (
        <header className="navbar-fixed">
            <div className="logo">
                <h1>Kart Stats</h1>
            </div>
            <nav className="">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/newsession">New Session</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header