import styled from "styled-components";
import { flexCenter, heightAndWidth } from "../../style/mixin";
import { ChevronRight } from "../icon/fontAwsome";

const ExtendedNav = ({ active, diactiveMenu }) => {
  return (
    <MenuItemWrapper active={active}>
      <MenuItem active={active}>
        <SubmenuContainer>
          <SubMenu>
            {SUB_MENU_ITEM.map((item, index) => (
              <SubMenuBox key={index}>
                <SubMeunTitleBox>
                  <SubMenuTitle>{item.menuTitle}</SubMenuTitle>
                  <ChevronRight />
                </SubMeunTitleBox>
                <ul>
                  {item.menuItem.map((i, index) => (
                    <SubMenuItem key={index}>{i}</SubMenuItem>
                  ))}
                </ul>
                <SubMeunTitleBox>
                  <MoreButton>더보기</MoreButton>
                  <ChevronRight />
                </SubMeunTitleBox>
              </SubMenuBox>
            ))}
          </SubMenu>
          <MoreSubTitle>
            <ul>
              {MORE_MENU_TITLE.map((title, index) => (
                <MoreMenuTitleItem key={index}>
                  <span>{title}</span>
                  <ChevronRight />
                </MoreMenuTitleItem>
              ))}
            </ul>
          </MoreSubTitle>
        </SubmenuContainer>
      </MenuItem>
      <MenuBackGround onMouseEnter={diactiveMenu} />
    </MenuItemWrapper>
  );
};

const MenuItemWrapper = styled.div`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  position: absolute;
  ${heightAndWidth("100vh", "100vw")}
`;

const MenuItem = styled.div`
  ${heightAndWidth()}
  max-height: ${(props) => (props.active ? "380px" : "0px")};
  transition: ${(props) =>
    props.active ? "max-height 0.25s ease-in-out" : "none"};
`;

const SubmenuContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 1060px;
  margin: 0px auto;
`;

const MenuBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const SubMenu = styled.div`
  display: flex;
`;

const SubMenuBox = styled.div`
  padding: 40px 20px 0px 0px;
`;

const SubMeunTitleBox = styled.div`
  ${flexCenter("flex", "space-between", "center")}
  width: 160px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const MoreButton = styled.h3`
  font-size: 13px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

const SubMenuTitle = styled.h2`
  font-size: 17px;
  font-weight: bold;
`;

const SubMenuItem = styled.li`
  padding: 5px 20px 5px 0px;
  font-size: 13px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

const MoreSubTitle = styled.div`
  ${heightAndWidth("270px", "160px")}
  padding: 40px 20px 0px 0px;
`;

const MoreMenuTitleItem = styled.li`
  ${flexCenter("flex", "space-between", "center")}
  width: 160px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const SUB_MENU_ITEM = [
  {
    menuTitle: "영업",
    menuItem: [
      "기업영업",
      "외부영업",
      "영업관리자",
      "기술영업",
      "주요고객사 담당자",
      "솔루션 컨설턴트",
      "해외영업",
    ],
  },
  {
    menuTitle: "미디어",
    menuItem: [
      "콘텐츠 크리에이터",
      "PD",
      "영상 편집가",
      "에디터",
      "비디오 제작",
      "작가",
      "출판 기획자",
    ],
  },
  {
    menuTitle: "인사",
    menuItem: [
      "인사담당",
      "리쿠르터",
      "조직문화",
      "평가·보상",
      "헤드헌터",
      "HRD",
      "HRBP",
    ],
  },
  {
    menuTitle: "게임제작",
    menuItem: [
      "게임 기획자",
      "게임 그래픽 디자이너",
      "모바일 게임 개발자",
      "게임 클라이언트 개발자",
      "게임 아티스트",
      "유니티 개발자",
      "개임 서버 개발자",
    ],
  },
  {
    menuTitle: "금융",
    menuItem: [
      "회계담당",
      "재무담당자",
      "IR",
      "투자·증권",
      "재무 분석가",
      "애널리스트",
      "내부통제 담당자",
    ],
  },
];

const MORE_MENU_TITLE = [
  "엔지니어링·설계",
  "물류·무역",
  "제조·생산",
  "의료·제약·바이오",
  "교육",
  "법률·법집행기관",
  "식·음료",
  "건설·시설",
  "공공·복지",
];

export default ExtendedNav;
