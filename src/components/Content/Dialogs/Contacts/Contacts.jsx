import dexstyle from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function Contacts(props) {
    return (
        <div className={dexstyle.contacts__item}>
            <NavLink className={ContactsLink => ContactsLink.isActive ? dexstyle.active : dexstyle.contacts__link}
                to={"/Dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};

export default Contacts;