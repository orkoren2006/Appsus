const { NavLink } = ReactRouterDOM

export function NavBar(props) {
    
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/email">Email</NavLink>
            <NavLink to="/book/gallery">Books</NavLink>
            <NavLink to="/keep">Notes</NavLink>
        </nav>
    )
}