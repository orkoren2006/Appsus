const { NavLink } = ReactRouterDOM

export function NavBarBooks(props) {
    
    return (
        <nav>
            <NavLink to="/book/">Home</NavLink>|
            <NavLink to="/book/gallery">Gallery</NavLink>|
            <NavLink to="/book/bookAdd">Add</NavLink>|
        </nav>
    )
}