import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({id, name, number}) => (
        <li key={id} className={css.listItem}>
          <Contact name={name} number={number} id={id} deleteContact={deleteContact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
