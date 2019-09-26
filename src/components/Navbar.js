import React, { useState, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Toggler = ({ toggle }) => {
  return toggle ? (
    <i style={{ cursor: "pointer" }} className="fas fa-times" />
  ) : (
    <i className="fas fa-bars" />
  );
};
const fadeIn = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0%);
    }
  }
`;
const fadeOut = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(0%);
    }
  }
`;
const show = keyframes`
  0%{
    opacity:0;
  }
  100%{
    transform: 1;
  }
`;
const Nav = styled.nav`
  margin: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #cc998d;
  padding: 15px;
  color: papayawhip;
  height: 60px;
  & > a {
    text-decoration: none;
    color: papayawhip;
    font-size: 1.2em;
  }
`;
const NavGroup = styled.div`
  @media (max-width: 540px) {
    ${props => (props.hidesmall ? "display:none;" : "")};
  }
  background: rgba(120, 100, 40, 0.5);
  & > a {
    text-decoration: none;
    color: papayawhip;
    font-size: 1em;
  }
  width: 50%;
  display: flex;

  justify-content: space-evenly;
`;
const Logo = styled.div`
  & > a {
    text-decoration: none;
    color: papayawhip;
    font-size: 1.7em;
  }
  text-align: left;
  /* width: 50%; */
  margin-right: auto;
`;
const Burger = styled.div`
  color: papayawhip;
  margin-right: auto;
  font-size: 1.7em;
  width: 10%;
  transition: 1;
  @media (min-width: 400px) {
    display: none;
  }
  & > i {
    cursor: pointer;
  }
`;
const Backdrop = styled.div`
  @media (max-width: 540px) {
    ${props =>
      props.on
        ? `width: 100%;
        position:absolute;
        top: 60px;
        left:0;
        height: calc(100vh - 60px);
        background: rgba(0, 0, 0, 0.5);
         `
        : ""}
      animation:500ms ${show} ease-in;
  }
`;
const Page = styled.main`
  margin-top: 15px;
  padding: 20px;
  height: calc(100vh - 60px);
  border-top: 1px solid papayawhip;
  background: #cc998d;
  color: papayawhip;
  margin: auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const SideBar = styled.div`
  @media (max-width: 540px) {
    position: absolute;
    top: 60px;
    height: calc(100vh - 60px);
    width: 50vw;
    display: flex;
    flex-direction: column;
    background: #cc998d;
    justify-content: space-around;
    align-items: center;
    animation: 500ms ${fadeIn} ease-in;
    & > a {
      text-decoration: none;
      color: papayawhip;
      font-size: 1em;
    }
  }
  @media (min-width: 541px) {
    display: none;
  }
`;
const Navbar = props => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <Nav>
        <Burger onClick={handleToggle}>
          <Toggler toggle={toggle} />
        </Burger>

        <Logo>
          <Link style={{ cursor: "pointer" }} to="/">
            LOGO
          </Link>
        </Logo>
        <NavGroup hidesmall />
        <div>
          <i className="fas fa-menu" />
        </div>
      </Nav>
      {toggle && (
        <Fragment>
          <Backdrop on={toggle} onClick={handleToggle} />
          <SideBar toggle={toggle}>
            <Link onClick={handleToggle} style={{ cursor: "pointer" }} to="/">
              Home
            </Link>
            <Link
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
              to="/about"
            >
              About
            </Link>
            <Link
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
              to="/contact"
            >
              Contact
            </Link>
          </SideBar>
        </Fragment>
      )}

      <Switch>
        <Route
          exact
          path="/"
          toggle={toggle}
          render={props => {
            if (props.toggle) handleToggle();
            return <Page>Home Page</Page>;
          }}
        />
        <Route
          exact
          path="/about"
          toggle={toggle}
          render={props => {
            if (props.toggle) handleToggle();
            return <Page>About Page</Page>;
          }}
        />
        <Route
          exact
          path="/contact"
          toggle={toggle}
          render={props => {
            if (props.toggle) handleToggle();
            return <Page>Contact Page</Page>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default Navbar;
