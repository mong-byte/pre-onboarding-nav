import { useState, useEffect } from "react";
import styled from "styled-components";
import ExtendedNav from "./components/ExtendedNav/ExtendedNav";
import { Bars, Bell, Search } from "./components/icon/fontAwsome";
import { device, size } from "./style/media";
import { flexCenter, flexAlign, heightAndWidth } from "./style/mixin";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuAcitive = (index) => {
    index === 0 ? setMenuActive(true) : setMenuActive(false);
  };

  const handleMenuPassive = () => {
    setMenuActive(false);
  };

  const handleResize = (event) => {
    const {
      target: { innerWidth },
    } = event;
    if (innerWidth < 850) return setMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavWrapper className="nav-wrapper">
      <NavContainer className="nav-container">
        <Nav className="nav">
          <Logo className="nav-logo">wanted</Logo>
          <div className="nav-mobile">
            <ul className="nav-mobile__list">
              <li className="nav-mobile__list-item">홈</li>
              <li className="nav-mobile__list-item">탐색</li>
              <li className="nav-mobile__list-item">커리어 성장</li>
            </ul>
          </div>
          <div className="nav-list">
            <NavList>
              {NAV_ITEM.map((item, index) => (
                <NavListItem
                  key={index}
                  onMouseOver={() => handleMenuAcitive(index)}
                >
                  {item}
                </NavListItem>
              ))}
            </NavList>
          </div>
          <NavIconContainer className="nav-icon__container">
            <NavIconList className="nav-icon__list">
              <NavIconListItem>
                <Search />
              </NavIconListItem>
              <NavIconListItem>
                <Bell />
              </NavIconListItem>
              <NavIconListItem>
                <div className="bars">
                  <Bars />
                </div>
                <Avatar className="nav-icon">
                  <div className="avatar-image" />
                </Avatar>
              </NavIconListItem>
              <NavIconListItem className="divider-box">
                <Divider className="divider" />
                <span className="service">기업 서비스</span>
              </NavIconListItem>
            </NavIconList>
          </NavIconContainer>
        </Nav>
      </NavContainer>
      <ExtendedNav active={menuActive} diactiveMenu={handleMenuPassive} />
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const NavContainer = styled.div`
  height: 50px;
  max-width: 1060px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  margin-top: 5px;
  padding: 15px 15px 12px 15px;
  cursor: pointer;

  @media ${device.mobile} {
    display: none;
  }
`;

const Nav = styled.nav`
  ${flexCenter("flex", "space-between", "center")}
  ${heightAndWidth("100%", "100%")}

  .nav-mobile {
    display: none;

    @media ${device.mobile} {
      display: flex;
      margin-top: 5px;
      padding: 15px 15px 12px 15px;
      cursor: pointer;
    }

    .nav-mobile__list {
      display: flex;

      .nav-mobile__list-item {
        margin-right: 15px;
      }
    }
  }
`;

const NavList = styled.div`
  ${flexAlign()}

  @media ${device.mobile} {
    display: none;
  }

  .nav-list__item--mobile {
    display: none;
    @media ${device.mobile} {
      display: flex;
      margin-top: 5px;
      padding: 15px 15px 12px 15px;
    }
  }
`;

const NavListItem = styled.li`
  margin-top: 5px;
  padding: 15px 15px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    padding-bottom: 9px;
    border-bottom: 3px solid ${(props) => props.theme.borderColor};
  }
`;

const NavIconContainer = styled.aside`
  ${flexAlign()}
  padding: 9px 0px;
`;

const NavIconList = styled.ul`
  ${flexAlign()}

  .divider-box {
    ${flexAlign()}

    @media ${device.mobile} {
      display: none;
    }

    .service {
      margin-left: 15px;
      padding: 8.5px 10px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      font-size: 13px;
      font-weight: 400;
    }
  }
`;

const NavIconListItem = styled.li`
  margin-top: 5px;
  padding: 0px 10px;
  cursor: pointer;

  .bars {
    display: none;

    @media ${device.mobile} {
      display: block;
    }
  }
`;

const Avatar = styled.div`
  ${flexCenter()}
  ${heightAndWidth("32px", "32px")}
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  background-color: white;

  .avatar-image {
    ${heightAndWidth("28px", "28px")}
    border-radius: 50%;
    background-color: tomato;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 10px;
  margin: auto 10px;
  background-color: gray;
`;

const NAV_ITEM = [
  "탐색",
  "커리어 성장",
  "직군별 연봉",
  "이력서",
  "매치업",
  "프리랜서",
  "Ai합격예측",
];

export default NavBar;
