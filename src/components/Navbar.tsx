import { NavLink, NavLinkRenderProps } from "react-router"
// @ts-ignore
import { NavbarDashboard, NavbarLessons, NavbarQuiz, NavbarSetting } from "../assets/icons/navbar"
import "../App.css"

export default function Navbar() {

  const style = ({ isActive }: NavLinkRenderProps) => (isActive ? active_style : undefined);

  const active_style = {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: "1.5vh 0px",
    borderRadius: "16px"
  }

  const navbarContent = [
    {
      name: "Dashboard",
      icon: NavbarDashboard,
      path: "/"
    },
    {
      name: "Lessons",
      icon: NavbarLessons,
      path: "/lessons"
    },
    {
      name: "Quiz",
      icon: NavbarQuiz,
      path: "/quiz"
    },
    {
      name: "Setting",
      icon: NavbarSetting,
      path: "/setting"
    },
  ]

  return (
    <nav className="bg-gradient-to-t from-violet-600 to-indigo-600 flex flex-col gap-12 width h-full p-4 fixed left-0 justify-center ">
      {navbarContent.map((nav, i) => (
        <NavLink key={i} to={nav.path} style={style} className={"no-underline text-white flex flex-col items-center py-[1.5vh]"}>
          <img src={nav.icon} width={20} height={20} className="invert"/>
          <div>{nav.name}</div>
        </NavLink>
      ))}
    </nav>
  )
}

