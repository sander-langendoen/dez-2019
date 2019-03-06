import React from 'react'
import { Link } from 'gatsby'

// import homeicon from '../../img/home.svg'
import styled from 'styled-components'

const NavBarWrap = styled.nav`
    grid-area: nav;
`;

const NavBarMenu = styled.ul`
    @media (max-width: 767px) {
        position: fixed;
        top: 0;
        min-height: 100%; // fallback
        min-height: 100vh;
        padding-left: 0;
        background-color: #81B3A5;

        li {
            border-bottom: 1px solid #fff;
            padding: 10px;
            cursor: pointer;
        }
        a {
            display: block;
            color: #fff;
            text-decoration: none;
        }
    }

    @media (min-width: 768px) {
        position: relative;
        min-height: 100%;
    }
`;

const NavBarItem = styled.li`
    padding-right: 1rem;

    &:last-child {
        padding-right: 0;
    }
`;


const MobileBtnBar = styled.span`
    @media (max-width: 767px) {
        display: block;
        position: relative;
        height: 6px;
        width: 35px;
        background: #000;
        border-radius: 9px;
        opacity: 1;
        transform: rotate(0deg);
        transition: .25s ease-in-out;

        &:nth-child(1) {
          top: 0px;
        }

        &:nth-child(2) {
          top: 5px;
        }

        &:nth-child(3) {
          top: 10px;
        }
    }
`;

const Navbar = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    } 

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }

    handleClick2() {        
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

       
    // document.querySelector(".navbar-item").style.backgroundColor = "red";
    

   
    render() {
        return (

           

            <NavBarWrap className="menu-list">

                <button onClick={this.handleClick} className={`navbar-mobile-btn visible-hidden_tablet-up ${this.state.isToggleOn ? 'is-active' : 'is-inactive'}`}>
                    <MobileBtnBar />
                    <MobileBtnBar />
                    <MobileBtnBar />
                </button>
            
                <NavBarMenu>

                    <NavBarItem onClick={this.handleClick2} className="menu-item">
                        <Link className="navbar-item" to="/" activeClassName="is-active">
                            Home
                            {/* <span className="icon">
                                <img src={homeicon} alt="home icoon linkt naar homepage"/>
                            </span> */}
                        </Link>
                    </NavBarItem>
                    <NavBarItem onClick={this.handleClick2} className="menu-item">
                        <Link className="navbar-item" to="/over-eline" activeClassName="is-active">
                        Over Dietist Eline Zuiderwijk
                        </Link>
                    </NavBarItem>
                    <NavBarItem onClick={this.handleClick2} className="menu-item">
                        <Link className="navbar-item" to="/gezonde-recepten" activeClassName="is-active">
                        Gezonde recepten
                        </Link>
                    </NavBarItem>
                    <NavBarItem onClick={this.handleClick2} className="menu-item">
                        <Link className="navbar-item" to="/praktijklocaties" activeClassName="is-active">
                        Praktijklocaties
                        </Link>
                    </NavBarItem>
                    <NavBarItem onClick={this.handleClick2} className="menu-item">
                        <Link className="navbar-item" to="/contact" activeClassName="is-active">
                        Contact
                        </Link>
                    </NavBarItem>

                </NavBarMenu>
                    
                
            </NavBarWrap>

        )
    }
}

export default Navbar
