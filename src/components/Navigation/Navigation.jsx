import dexstyle from './Navigation.module.css'
import icon_message from './icon_message.png'
import icon_news from './icon_news.png'
import icon_profile from './icon_profile.png'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className={dexstyle.nav}>
            <ul className={dexstyle.nav__items}>
                <li className={dexstyle.nav__item}>
                    <img className={dexstyle.items__img} src={icon_profile} alt="" />
                    <Link className={dexstyle.nav__link} to="/Main">Main</Link>
                </li>
                <li className={`${dexstyle.nav__item} ${dexstyle.active}`} >
                    <img className={dexstyle.items__img} src={icon_message} alt="" />
                    <Link className={`${dexstyle.nav__link} ${dexstyle.active}`} to="/Messages">Messages</Link>
                </li>
                <li className={dexstyle.nav__item}>
                    <img className={dexstyle.items__img} src={icon_news} alt="" />
                    <a className={dexstyle.nav__link} href="#">News</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;