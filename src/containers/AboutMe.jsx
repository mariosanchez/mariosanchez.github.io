// @flow

import React from 'react';
import Header from '../components/Header';
import Hobbie from '../components/Hobbie';

const AboutMe = (props: { hobbies: Array<String> }) => (
  <section>
    <Header />
    <section className="container">
      <section className="col-12 profile-card">
        <img src="/public/img/me.jpg" alt="Mario Sánchez" />
        <h1>Mario Sánchez</h1>
        <h3>Web developer</h3>
        <p>
          {
            "I'm a techie and IT Engineer who enjoys his profession and hobby with enthusiasm. Eager to learn day by day and always looking for new challenges."
          }
        </p>
        <p> {'Nowdays I work with Javascript (both client and server) and PHP 👨‍💻'}</p>
      </section>
      <section className="col-12">
        <h2>Things I love</h2>
        {props.hobbies.map(hobbie => <Hobbie key={hobbie.icon} {...hobbie} />)}
      </section>
    </section>
  </section>
);
export default AboutMe;
