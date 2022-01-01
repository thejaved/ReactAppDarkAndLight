import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Iconbtn from '../Icons/Iconbtn';
import Icons from '../Icons/Icons';
import Ourinput from '../Inputs/Ourinput';
import MenuData from '../MenuData/MenuData';
import './Header.css';
const Header = () => {
    const [Sidebar, setSidebar] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const SidebarFunc = () =>{
        if(!Sidebar){
            setSidebar(!Sidebar);
            document.documentElement.style.setProperty('--sidebar-width', '80px');
        }else if(Sidebar){
            document.documentElement.style.setProperty('--sidebar-width', '300px');
            setSidebar(!Sidebar);
        }
    }
    const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
    }

    const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
    } 
    
    const darkModeSet =()=>{
        let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
        if (theme ==='dark'){
            changeThemeToLight()
            setDarkMode(!darkMode);
        }else{
            changeThemeToDark();
            setDarkMode(!darkMode);
        }
    }
    useEffect(()=>{
        let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
        if (theme ==='dark'){
            changeThemeToDark()
            setDarkMode(true);
        }
    },[]);

    // added more menuItems for testing
const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "bx bx-home",
  },
  {
    name: "Blog",
    exact: true,
    to: `/blog`,
    iconClassName: "bx bx-message-square",
    subMenus: [
        { name: "Courses", to: "/content-2/courses" },
        { name: "Videos", to: "/content-2/videos" },
    ]
  },
  { name: "Design", to: `/design`, iconClassName: "bx bx-pen" },
  {
    name: "Content",
    exact: true,
    to: `/content-2`,
    iconClassName: "bx bx-bar-chart-alt-2",
    subMenus: [
        { name: "Courses", to: "/content-2/courses" },
        { name: "Videos", to: "/content-2/videos" },
    ],
  }
];
    return (
    <>
        <div className='Header'>
            <div className="logo_content">
                <div className="menu_button">
                    <Iconbtn name={'bx bx-menu'} onClick={SidebarFunc}/>
                </div>
                <h1>OnGameClips</h1>
            </div>
            <div className="search_bar">
                <div className="search_bar_content">
                    <Ourinput name={'bx bx-search'} type={'text'} placeholder={'Type Anything!'}/>
                </div>
            </div>
            <div className="right_icons_content">
                {darkMode ? <Iconbtn name={'bx bx-sun'} onClick={darkModeSet}/> : <Iconbtn name={'bx bx-moon'} onClick={darkModeSet}/>}
                <Iconbtn name={'bx bx-user'}/>
            </div>
        </div>
        {/* Sidebar Container  */}
        <div className={`Sidebar ${Sidebar ? 'inactive' : ''}`}>
            <div className="menu_container">
                <ul>
                    {menuItems.map((menuItem, index) => (
                    <MenuData
                    key={index}
                    name={menuItem.name}
                    exact={menuItem.exact}
                    to={menuItem.to}
                    subMenus={menuItem.subMenus || []}
                    iconClassName={menuItem.iconClassName}
                    onClick={()=>setSubMenu(!subMenu)}
                    subMenuClass={`sub_menu ${subMenu ? '' : 'inactive'}`}/>
                    ))}
                </ul>
            </div>
        </div>
    </>
    )
}
export default Header;
