import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import {getFilterValue} from '../../redux/selectors';
import {filterContacts} from '../../redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterContacts(event.target.value));
  }


  return (
    <label className={`${css.label} ${css.filter}`}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            placeholder="Enter your name"
            name="filter"
            value = {filterValue}
            onChange={handleFilter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
  )
}
