import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <section className="mb-5 text-center">
      <div className="float-start position-absolute m-lg-1">
        <FontAwesomeIcon icon={faListOl} size="2xl" />
      </div>
      <h2>Shopping List</h2>
    </section>
  );
};

