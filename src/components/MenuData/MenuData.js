import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
const MenuData = (props) => {
    const { name, subMenus, iconClassName, onClick, to,subMenuClass, exact } = props;
    return (
            <Link exact={exact} to={'/contact'} to={to}>
                <li onClick={onClick}>
                    <div className="content_container">
                            <Icons name={iconClassName}/>
                            <a>{name}</a>
                    </div>
                    {subMenus && subMenus.length > 0 ? <div className={subMenuClass}>
                        <ul>
                            {subMenus.map((menu, index) => (
                                <Link to={menu.to} key={index} exact={menu.exact}>
                                    <li>
                                        <Icons name={menu.iconClassName}/>
                                        <a>{menu.name}</a>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div> : null}
                </li>
            </Link>
    )
}
export default MenuData;
