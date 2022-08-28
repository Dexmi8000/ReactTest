import dexstyle from './Header.module.css';
import logo from './logo.png';

function Header() {
    return (
        <header className={dexstyle.header}>
            <img className={dexstyle.header__logo} src={logo} />
            <p className={dexstyle.header__text}>Dexmi social</p>
        </header>
    )
};

export default Header;
