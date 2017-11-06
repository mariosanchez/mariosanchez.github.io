// @flow

import React from 'react';
import Header from '../components/Header';
import Tag from '../components/Tag';

const AboutMe = (props: { technologies: Array<Object>, hobbies: Array<Object> }) => (
  <div>
    <Header />
    <section className="container">
      <div className="row">
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
          <h2>Techs I love</h2>
          {props.technologies.map(technology => <Tag key={technology.icon} {...technology} />)}
        </section>
        <section className="col-12">
          <h2>Another things I love</h2>
          {props.hobbies.map(hobbie => <Tag key={hobbie.icon} {...hobbie} />)}
        </section>
      </div>
    </section>
  </div>
);
export default AboutMe;
