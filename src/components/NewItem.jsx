import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as bootstrap from 'bootstrap';
import validateItem from '../utils/validateItem';

export function NewItem(props) {
  const { items, setItems, setErrorMessage, errorToast } = props;
  const [inputValue, setInputValue] = useState('');
  const [inputAmount, setInputAmount] = useState(1);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const toast = new bootstrap.Toast(errorToast.current);

    const newItem = {
      name: inputValue,
      amount: parseInt(inputAmount),
      id: uuid(),
    };

    const newItems = [...items, newItem];

    const isItemNew = true;

    if (validateItem(event, newItem, setErrorMessage, isItemNew)) {
      setItems(newItems);
      setInputValue('');
      setInputAmount(1);
    } else {
      toast.show();
    }
  };

  return (
    <section className="mb-4">
      <h6>Add New Products</h6>
      <form
        className="row d-flex flex-fill mb-3"
        onSubmit={(event) => handleAddButtonClick(event)}
      >
        <div className="col-7">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Add an item..."
            aria-required="true"
            aria-invalid="false"
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control text-center"
            value={inputAmount}
            onChange={(event) => setInputAmount(event.target.value)}
            aria-required="true"
            aria-invalid="false"
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary w-100" aria-label="Add">Add</button>
        </div>
      </form>
    </section>
  );
};
