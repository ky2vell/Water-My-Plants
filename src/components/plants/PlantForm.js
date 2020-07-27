import React, { useContext, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

// Context
import PlantContext from '../../context/plant/plantContext';

const user = JSON.parse(window.localStorage.getItem('user'));

const initialValue = {
  user_id: user.userId,
  nickname: '',
  species: '',
  h2oFrequency: ''
};

const PlantForm = () => {
  const plantContext = useContext(PlantContext);
  const { addPlant, current, clearCurrent, updatePlant } = plantContext;

  const [values, setValues, handleChanges] = useForm(initialValue);

  useEffect(() => {
    if (current !== null) {
      setValues(current);
    } else {
      setValues(initialValue);
    }
  }, [plantContext, current, setValues]);

  const handleSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPlant(values);
    } else {
      updatePlant(current.id, values);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{current ? 'Edit Plant' : 'Add Plant'}</h2>
      <label>
        <input
          name='nickname'
          value={values.nickname}
          placeholder='Nickname..'
          type='text'
          onChange={handleChanges}
        />
      </label>
      <label>
        <input
          name='species'
          value={values.species}
          placeholder='Species..'
          type='text'
          onChange={handleChanges}
        />
      </label>
      <label>
        <input
          name='h2oFrequency'
          value={values.h2oFrequency}
          placeholder='H2O Frequency..'
          type='text'
          onChange={handleChanges}
        />
      </label>
      <button type='submit'>{current ? 'Update Plant' : 'Add Plant'}</button>
      {current && (
        <div>
          <button onClick={clearAll}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default PlantForm;
