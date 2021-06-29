import React from 'react'
import './Home.css';

export const Home = () => {
    return (
        <div>
  

  <header>
    <div>
      <i className="fas fa-atom"></i>
      <p>Nischal</p>
    </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section className="titles">

    <h1>Yarn Over</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores consectetur, laboriosam rerum obcaecati.</p>

  </section>

  <section className="container-boxes">
    <div className="box">

      <div className="icon">
        <a href=""><i className="fas fa-fire"></i></a>
      </div>

      <div className="text">
        <a href="">
          <h3>The Teacher</h3>
          <p>The best teacher you can have, internationally renowned "hooker".</p>
        </a>
      </div>

    </div>

    <div className="box">

      <div className="icon">
        <a href=""><i className="fas fa-seedling"></i></a>
      </div>

      <div className="text">
        <a href="">
          <h3>The Yarn</h3>
          <p>We will use only animal-friendly, fair-trade yarn. Only the best!</p>
        </a>
      </div>

    </div>

    <div className="box">

      <div className="icon">
        <a href=""><i className="fas fa-address-card"></i></a>
      </div>

      <div className="text">
        <a href="">
          <h3>The Group</h3>
          <p>Become a member, become family. Teamwork is everything.</p>
        </a>
      </div>

    </div>
  </section>

        </div>
    )
}
