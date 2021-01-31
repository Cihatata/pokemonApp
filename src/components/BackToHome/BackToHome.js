import React from 'react';
import { useHistory } from 'react-router-dom';

const BackToHome = () => {
  const history = useHistory();
  return (
    <div className="main-top">
      <button
        onClick={() => history.push('/pokemonApp')}
        className="button add-btn back"
      >
        Back to Home
    </button>
    </div>
  )
}

export default BackToHome;