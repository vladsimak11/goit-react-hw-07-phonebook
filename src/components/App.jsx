import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThreeDots} from '../Loader/Loader';

import {ContactForm} from './ContactForm/ContactForm';
import {Filter} from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";

import { getError, getIsLoading } from "../redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);  
  const error = useSelector(getError);  
  
  useEffect(() => { 
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div
      style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#010101',
      paddingTop: 20
      }}
    >

      <div className={css.mainBlock}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter/>
        {isLoading && !error && <ThreeDots />}
        <ContactList />
      </div>

      <ToastContainer />
    </div>
  )
  
}