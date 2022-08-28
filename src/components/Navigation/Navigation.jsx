import dexstyle from './Navigation.module.css'
import icon_message from './icon_message.png'
import icon_news from './icon_news.png'
import icon_profile from './icon_profile.png'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className={dexstyle.nav}>
            <ul className={dexstyle.nav__items}>
                <li className={dexstyle.xxx}>
                    <NavLink to="/Main" className={navLink => navLink.isActive ? dexstyle.active : dexstyle.nav__item} >
                        <img className={dexstyle.items__img} src={icon_profile} alt="" />
                        Main
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Messages" className={navLink => navLink.isActive ? dexstyle.active : dexstyle.nav__item} >
                        <img className={dexstyle.items__img} src={icon_message} alt="" />
                        Message
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/News" className={navLink => navLink.isActive ? dexstyle.active : dexstyle.nav__item} >
                        <img className={dexstyle.items__img} src={icon_news} alt="" />
                        News
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;