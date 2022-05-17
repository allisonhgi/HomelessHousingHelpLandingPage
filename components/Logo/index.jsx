import React from "react";
import styled from "styled-components";
import { RobotoMediumSummerGreen436px } from "../../styledMixins";


class Logo extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <a href="https://housingvoucherhelp.org/" target="_blank">
      <Logo1 className={`logo ${className || ""}`}>
        <OverlapGroup className="overlap-group">
          <Vector className="vector" src="/img/vector@2x.svg" />
          <HVH className="hvh">HVH</HVH>
        </OverlapGroup>
      </Logo1>
      </a>
    );
  }
}

const Logo1 = styled.div`
  height: 75px;
  display: flex;
  align-items: flex-start;
  min-width: 93px;

  &.logo.logo-1 {
    position: absolute;
    height: 73px;
    top: 52px;
    left: 439px;
    cursor: pointer;
  }
`;

const OverlapGroup = styled.div`
  width: 93px;
  height: 77px;
  position: relative;
  margin-top: -2.75px;
`;

const Vector = styled.img`
  position: absolute;
  width: 54px;
  height: 42px;
  top: 0;
  left: 19px;
`;

const HVH = styled.div`
  ${RobotoMediumSummerGreen436px}
  position: absolute;
  width: 93px;
  top: 39px;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  .logo.logo-1 & {
    height: 75px;
    margin-top: -2.7px;
  }
`;

const Vector1 = styled.img`
  .logo.logo-1 & {
    height: 41px;
  }
`;

const HVH1 = styled.div`
  ${RobotoMediumSummerGreen436px}

  .logo.logo-1  & {
    top: 38px;
  }
`;

export default Logo;
