import { Link, NavLink } from "react-router-dom"

export function Navbar(props){

    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : null}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive}) => isActive ? activeNavStyle : null}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/about/contact" style={({isActive}) => isActive ? activeNavStyle : null}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}