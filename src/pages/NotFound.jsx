import { useRouteError, useNavigate } from 'react-router-dom';
import React from 'react';

export default function NotFound() {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops!!!!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
