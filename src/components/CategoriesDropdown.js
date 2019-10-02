import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { starshipData } from '../constants';
import { setCategory, clearActiveStarships } from '../store/actions';
import { useCategoriesStyles } from './styles';

const CategoriesDropdown = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category);
  const classes = useCategoriesStyles();

  return (
    <>
      <label className={classes.label} htmlFor='category'>
        Change category
      </label>
      <p className={classes.categoryText}>
        Set the new category for the next round
      </p>
      <select
        className={classes.select}
        id='category'
        name='category'
        data-test='category-dropdown'
        defaultValue={category}
        onChange={e => {
          dispatch(clearActiveStarships());
          dispatch(setCategory(e.target.value));
        }}
      >
        {starshipData.map(data => (
          <option key={data.id} value={data.id}>
            {data.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoriesDropdown;
