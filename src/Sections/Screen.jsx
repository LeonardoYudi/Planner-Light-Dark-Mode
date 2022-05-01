import styled, { ThemeProvider } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { Logo, NavBar , Main, Footer} from "../Components";
import { useState } from "react";
import { HeaderArea , MainArea, FooterArea} from "./Screen.styled";

function Screen() {
  const [theme, setTheme] = useState("light");

  const LightTheme = {
    titleColor1: "black",
    titleColor2: "#097b99",
    backgroundPage: "#fff",
    backgroundIcon: "#292C35",
    colorLinks: "black"
  };

  const DarkTheme = {
    titleColor1: "white",
    titleColor2: "#097b99",
    backgroundPage: "#080404",
    backgroundIcon: "#ecedef",
    colorLinks: "white"
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const icon = theme === "light" ? <FaMoon style={{color:'#f1c40f'}}/> : <FaSun style={{color:'#f39c12'}} />;

  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <PageStyle>
          <HeaderArea>
            <HeaderPage>
              <Logo />
              <>
                <NavBar/>
                <ThemeToggle onClick={changeTheme}>{icon}</ThemeToggle>
              </>
            </HeaderPage>
          </HeaderArea>
          <MainArea>
            <Main/>
          </MainArea>
          <FooterArea>
            <Footer/>
          </FooterArea>
        </PageStyle>
      </ThemeProvider>
    </div>
  );
}

export const PageStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundPage};
  transition: 1.2s;
`;

const ThemeToggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.backgroundIcon};
`;

export const HeaderPage = styled.header`
  display: flex;
  padding: 1.8rem 2rem;
  justify-content: space-between;
`

export const TitlePageStyle = styled.h1`
  font-size: 250%;
  cursor: pointer;
  .first {
    color: ${(props) => props.theme.titleColor1};
  }
  .second {
    color: ${(props) => props.theme.titleColor2};
  }
`;

export const DisplayNav = styled.nav`
  display: flex;
`

export const NavButton = styled.button`
  color: ${(props)=>props.theme.colorLinks};
  background: none;
  border: none;
  padding: 1rem 2rem;
  margin-right: 1rem;
  font-size: 140%;
  cursor: pointer;
  position: relative;

  :after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.titleColor2};
    height: 4px;
    width: 0%;
    left: 0;
    bottom: -1px;
    transition: all 0.3s;
  }

  :hover:after {
    width: 100%;
  }
`

export const InfoStyle = styled.div`
  width: 32vw;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 18rem 4rem;
  h2{
    color: ${(props)=>props.theme.colorLinks};
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
  h3{
    color: ${(props)=>props.theme.colorLinks};
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.titleColor2};
    font-weight: 700;
    font-size: 90%;
    color: #e1e1e1;
    border: none;
    border-radius: 0.5rem;
    transition: all 0.3s;
  }
  button:hover {
    background-color: #2889a6;
    cursor: pointer;
    color: white;
  }

`
export const ImageStyle = styled.div`
  width: 68vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 70%;
    border-radius: 1.8rem;
    margin-right: 4rem;
  }

`
export const FooterStyle = styled.footer`
  color: ${(props)=>props.theme.colorLinks};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Screen;
