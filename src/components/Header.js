import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Chatty</Link>
        <button type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"  >
          <span></span>
        </button>
        <div id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div>
              <Link to="/chat">Profile</Link>
              <button onClick={() => auth().signOut()}>Logout</button>
            </div>
            : <div>
              <Link to="/login">Sign In</Link>
              <Link>Sign Up</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;