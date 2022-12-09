import React, { useState, useRef } from 'react';
import generateItems from './utils/generateItems';
import { Header } from './components/Header';
import { NewItem } from './components/NewItem';
import { ExistingItems } from './components/ExistingItems';

function App() {
  const [items, setItems] = useState(generateItems());
  const [errorMessage, setErrorMessage] = useState('');
  const errorToast = useRef();

  return (
    <div className="app-background">
      <div className="main-container col-12 col-lg-6 col-xl-6 col-xxl-6">
        <Header />
        <ExistingItems
          items={items}
          setItems={setItems}
          setErrorMessage={setErrorMessage}
          errorToast={errorToast}
        />
        <NewItem
          items={items}
          setItems={setItems}
          setErrorMessage={setErrorMessage}
          errorToast={errorToast}
        />
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          ref={errorToast}
          className="toast align-items-center text-bg-danger border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-delay="3000"
        >
          <div className="d-flex">
            <div className="toast-body">
              {errorMessage}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
