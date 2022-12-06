import React from 'react';
import * as bootstrap from 'bootstrap';
import validateItem from '../utils/validateItem';

export const ExistingItems = (props) => {
  const { items, setItems, setErrorMessage, errorToast } = props;
  const handleModifyItem = (item, event) => {
    const toast = new bootstrap.Toast(errorToast.current);
    const nameField = event.target.form[0];
    const amountField = event.target.form[1];

    const formData = {
      name: nameField.value,
      amount: parseInt(amountField.value),
      id: item.id,
    };

    if (validateItem(event, formData, setErrorMessage)) {
      const newItems = items.map((product) => product.id === item.id ? formData : product);
      setItems(newItems);
    } else {
      nameField.value = item.name;
      amountField.value = item.amount;
      toast.show();
    }
  };

  const handleRemoveButtonClick = (itemId) => {
    const newItems = items.filter((product) => product.id !== itemId);
    setItems(newItems);
  };

  return (
    <section className="mb-5">
      <h6>Existing Products</h6>
      {items.map((item) => (
        <form id="existing" className="row d-flex flex-fill mb-3 fade-in" key={item.id}>
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              defaultValue={item.name}
              onBlur={(event) => handleModifyItem(item, event)}
              aria-required="true"
              aria-invalid="false"
            />
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control text-center"
              defaultValue={item.amount}
              onBlur={(event) => handleModifyItem(item, event)}
              aria-required="true"
              aria-invalid="false"
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => handleRemoveButtonClick(item.id)}
              aria-label="Remove"
            >
              Remove
            </button>
          </div>
        </form>
      ))}
    </section>
  );
}
