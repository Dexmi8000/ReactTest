import dexstyle from './../Dialogs.module.css';

function Messages(props) {
    return (
        <div className={dexstyle.contacts__item}>
            {props.message}
        </div>
    )
};

export default Messages;