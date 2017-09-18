import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './Agenda.css'
import c from './content.json';

class Agenda extends Component {
  render() {
    // TODO Replace hardcoded agenda titles
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'agendaTitle'}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container'}>
            <div className={classNames('tabs', 'is-medium')}>
              <ul>
                <li className={'is-active'}>
                  <a>{c.codelabs}</a>
                </li>
                <li><a>{c.talks}</a></li>
                <li><a>{c.hackathon}</a></li>
              </ul>
            </div>
            <table className={classNames('table', 'is-bordered', 'is-striped', 'is-fullwidth')}>
              <tbody>
                <tr>
                  <th>9:00AM</th>
                  <td>Registration</td>
                </tr>
                <tr>
                  <th>9:30AM</th>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <th>10:00AM</th>
                  <td>Keynote Speaker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default Agenda;
