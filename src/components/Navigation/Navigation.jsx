import dexstyle from './Navigation.module.css'
import icon_message from './icon_message.png'
import icon_news from './icon_news.png'
import icon_profile from './icon_profile.png'

function Nav() {
    return (
        <nav className={dexstyle.nav}>
            <ul className={dexstyle.nav__items}>
                <li className={dexstyle.nav__item}>
                    <img className={dexstyle.items__img} src={icon_profile} alt="" />
                    <a className={dexstyle.nav__link} href="#">Profile</a>
                </li>
                <li className={`${dexstyle.nav__item} ${dexstyle.active}`} >
                    <img className={dexstyle.items__img} src={icon_message} alt="" />
                    <a className={`${dexstyle.nav__link} ${dexstyle.active}`} href="#">Messages</a>
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