import React from 'react'
import { Link } from 'gatsby'
// import homeicon from '../../img/home.svg'
import styled from 'styled-components'

const NavBarWrap = styled.nav`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const NavBarMenu = styled.div`
    grid-column: 2 / 10;
`;

const NavBarItem = styled.span`
    padding-right: 1rem;

    &:last-child {
        padding-right: 0;
    }
`; 


const Navbar = class extends React.Component {

  componentDidMount() {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                 // Get the target from the "data-target" attribute
                 const target = el.dataset.target;
                 const $target = document.getElementById(target);

                 // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                 el.classList.toggle('is-active');
                 $target.classList.toggle('is-active');

                });
            });
        }
    }

 
    render() {
    return (
  
        <NavBarWrap>
            
                <div className="navbar-brand">

                {/* Hamburger menu */}
                    <div className="navbar-burger burger" data-target="navMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>

                <NavBarMenu>

                    { /*}
                    <Link className="navbar-item" to="/">
                        <span className="icon">
                            <img src={homeicon} alt="home icoon linkt naar homepage"/>
                        </span>
                    </Link> */ }
                    <NavBarItem>
                        <Link className="navbar-item" to="/over-eline">
                          Over Dietist Eline Zuiderwijk
                        </Link>
                    </NavBarItem>
                    <NavBarItem>
                        <Link className="navbar-item" to="/gezonde-recepten">
                          Gezonde recepten
                        </Link>
                    </NavBarItem>
                    <NavBarItem>
                        <Link className="navbar-item" to="/praktijklocaties">
                          Praktijklocaties
                        </Link>
                    </NavBarItem>
                    <NavBarItem>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                    </NavBarItem>

                </NavBarMenu>
        </NavBarWrap>
    )}
}

export default Navbar
