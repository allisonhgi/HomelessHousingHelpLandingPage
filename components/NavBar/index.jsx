import React from "react";
import Logo from "../Logo";
import styled from "styled-components";


class NavBar extends React.Component {
  render() {
    return (
      <NavBar1>
        <Logo />
      </NavBar1>
    );
  }
}

const NavBar1 = styled.div`
  position: absolute;
  height: 152px;
  top: 0;
  left: 349px;
  display: flex;
  padding: 38px 90px;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #0000001a;
`;

export default NavBar;
