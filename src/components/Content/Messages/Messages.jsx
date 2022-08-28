import dexstyle from './Messages.module.css';
import { NavLink } from 'react-router-dom';


function ContactsItem(props) {
    return (
        <div className={dexstyle.contacts__item}>
            <NavLink className={ContactsLink => ContactsLink.isActive ? dexstyle.active : dexstyle.contacts__link}
                to={"/Messages/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};

function Message(props) {
    return (
        <div className="text">
            {props.message}
        </div>
    )
};

let ContactsData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Trend' },
    { id: 4, name: 'Anna' },
    { id: 5, name: 'Ira' }
];

let MessagesData = [
    { id: 1, message: 'Hi, Dexmi!' },
    { id: 2, message: 'Yes, its kruto!' },
    { id: 3, message: 'Oky spoki, bro.' },
    { id: 4, message: 'Oh, ola la!' },
    { id: 5, message: 'Goood moorning!' }
];

let contactsElements = ContactsData.map((contact) => {
    return (
        <ContactsItem name={contact.name} id={contact.id} />
    )
});

let MessagesElements = MessagesData.map((message) => {
    return (
        <Message message={message.message} />
    )
});



function Messages() {
    return (
        <div className={dexstyle.messages}>
            <div className={dexstyle.message}>
                {MessagesElements}
            </div>
            <div className={dexstyle.contacts}>
                {contactsElements}
            </div>
        </div >
    )
}


export default Messages;




