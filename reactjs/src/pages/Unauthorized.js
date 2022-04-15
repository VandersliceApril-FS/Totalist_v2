import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
    return(
        <div>
          <h1>You must log in to view this page.</h1>
          <Link to="/">Go Back</Link>
        </div>
    )
}

export default Unauthorized;