import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const getVisibleContacts = (contacts, statusFilter) => {
  if (statusFilter && statusFilter.trim() !== "") {
    return contacts.filter((contact) =>
      contact.username.toLowerCase().includes(statusFilter.toLowerCase())
    );
  }
  return contacts;
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const statusFilter = useSelector(selectNameFilter) ?? "";
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <div className={css.wrapper}>
      {visibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={{ ...contact, id: parseInt(contact.id) }}
        />
      ))}
    </div>
  );
};

export default ContactList;
