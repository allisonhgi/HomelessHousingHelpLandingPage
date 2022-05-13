import React from "react";
import styled from "styled-components";


class HomePageLink extends React.Component {
  render() {
    const { homePage } = this.props;

    return (
      <a href="https://housingvoucherhelp.org/" target="_blank">
        <HomePageLink1>
          <Vector src="/img/vector-2@2x.svg" />
          <HomePage>{homePage}</HomePage>
        </HomePageLink1>
      </a>
    );
  }
}

const HomePageLink1 = styled.div`
  position: absolute;
  height: 26px;
  top: 75px;
  left: 1513px;
  display: flex;
  align-items: flex-start;
  min-width: 191px;
  cursor: pointer;
`;

const Vector = styled.img`
  width: 32px;
  height: 23px;
  margin-left: -3px;
  align-self: center;
  margin-bottom: 1.2px;
`;

const HomePage = styled.div`
  width: 142px;
  min-height: 24px;
  margin-left: 6px;
  margin-top: -0.02px;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--summer-green);
  font-size: 25px;
  letter-spacing: 0;
`;

export default HomePageLink;
