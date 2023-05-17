import css from './ContactList.module.css';
import {deleteContact} from '../../redux/operations';
import {useSelector, useDispatch } from "react-redux";
import {getContacts, getFilterValue} from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const getVisibleContact = () => {
  const normalizedFilter = filterValue.toLowerCase();
  
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  
  const visibleContact = getVisibleContact();
  
  return (
    <ul className={css.list}>
        {visibleContact.map(({id, name, phone}) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.span}>{name}: {phone}</span>
              <button
                onClick={() => dispatch(deleteContact(id))}
                className={css.delete}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
  )
}
