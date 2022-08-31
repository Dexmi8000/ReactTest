import dexstyle from './Dialogs.module.css';
import Contacts from './Contacts/Contacts';
import Messages from './Messages/Messages';

let ContactsData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Trend' },
    { id: 4, name: 'Anna' },
    { id: 5, name: 'Ira' }
];

let MessagesData = [
    { id: 1, messageText: 'Hi, Dexmi!' },
    { id: 2, messageText: 'Yes, its kruto!' },
    { id: 3, messageText: 'Oky spoki, bro.' },
    { id: 4, messageText: 'Oh, ola la!' },
    { id: 5, messageText: 'Goood moorning!' }
];

let contactsElements = ContactsData.map((contact) => {
    return (
        <Contacts name={contact.name} id={contact.id} />
    )
});

let MessagesElements = MessagesData.map((message) => {
    return (
        <Messages message={message.messageText} />
    )
});

function Dialogs() {
    return (
        <div className={dexstyle.messages}>
            <div className={dexstyle.message}>
                {MessagesElements}      {/*переменная которая создает компоненту Massgaes с пропсами из базы */}
            </div>
            <div className={dexstyle.contacts}>
                {contactsElements}      {/*переменная которая создает компоненту Contacts с пропсами из базы */}
            </div>
        </div >
    )
}


export default Dialogs;




