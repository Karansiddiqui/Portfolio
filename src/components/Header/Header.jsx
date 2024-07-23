import { ReactNavbar } from "overlay-navbar";
import {FaUserAlt} from "react-icons/fa";
import photo from "/images/logo.png"

function Header() {
  return <ReactNavbar
  navColor1="white"
  navColor2="hsl(219, 48%, 8%)"
  burgerColor="hsl(250, 100%, 75%)"
  burgerColorHover="hsl(250, 100%, 75%)"
  logo={photo}
  logoWidth="200px"
  logoHeight="200px"
  logoHoverColor="hsl(250, 100%, 75%)"
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  link1Text="Home"
  link2Text="About"
  link3Text=""
  link4Text="Projects"
  link1Url="/"
  link2Url="/about"
  link4Url="/projects"
  link1ColorHover="white"
  link1Color="HSL(250, 100%, 75%)"
  link1Size="1.5rem"
  link1Padding="3vmax"
/>
}

export default Header;
