import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Maps from '../Maps';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import './Hackathon.css';
import c from './content.json';

class Hackathon extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
              <Timer customOptions={{endDate: '11/04/2017 10:00 AM'}} />
            </div>
          </div>
        </section>
        <Maps
          lat={37.548606}
          lng={-122.059009}
          eventLocation='42 Silicon Valley'
          eventDescription='Desc'
          directions='https://goo.gl/maps/jEcYoErqFuT2'
        />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Hackathon;
