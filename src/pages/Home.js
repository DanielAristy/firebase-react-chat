import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section>
          <div>
            <div>
              <h1 >Welcome to Chatty</h1>
              <p>A great place to share your thoughts with friends</p>
              <div>
                <Link to="/signup">Create New Account</Link>
                <br />
                <Link to="/login">Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}