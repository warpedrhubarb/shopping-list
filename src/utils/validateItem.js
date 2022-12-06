export default function validateItem(event, item, setErrorMessage, isItemNew) {
  const nameField = isItemNew ? event.target[0] : event.target;
  const amountField = isItemNew ? event.target[1] : event.target;

  if (!item.name.length) {
    setErrorMessage('Product name cannot be empty');
    nameField.classList.add('is-invalid');
    nameField.setAttribute('aria-invalid', 'true');
    setInterval(() => {
      nameField.classList.remove('is-invalid');
      nameField.setAttribute('aria-invalid', 'false');
    }, 3000);
    return false;
  }

  if (!item.amount.toString().length || item.amount <= 0) {
    setErrorMessage('Amount of products cannot be empty, equal zero or negative value');
    amountField.classList.add('is-invalid');
    amountField.setAttribute('aria-invalid', 'true');
    setInterval(() => {
      amountField.classList.remove('is-invalid');
      amountField.setAttribute('aria-invalid', 'false');
    }, 3000);
    return false;
  }

  if (!Number.isInteger(item.amount)) {
    setErrorMessage('Amount of products must be a numerical value');
    amountField.classList.add('is-invalid');
    amountField.setAttribute('aria-invalid', 'true');
    setInterval(() => {
      amountField.classList.remove('is-invalid');
      amountField.setAttribute('aria-invalid', 'false');
    }, 3000);
    return false;
  }

  return true;
};
