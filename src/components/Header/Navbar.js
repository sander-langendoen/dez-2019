import React from 'react'
import { Link } from 'gatsby'
// import homeicon from '../../img/home.svg'
import styled from 'styled-components'

const NavBarWrap = styled.nav`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const NavBarMenu = styled.ul`
    grid-column: 2 / 10;
`;

const NavBarItem = styled.li`
    padding-right: 1rem;

    &:last-child {
        padding-right: 0;
    }
`; 


const Navbar = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

   
    render() {
    return (
  
        <NavBarWrap>
            
                <button onClick={this.handleClick} className={this.state.isToggleOn ? 'ON' : 'OFF'}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>


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
