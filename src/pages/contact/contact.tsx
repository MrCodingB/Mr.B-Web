import { Component } from 'react';
import PageTitle from '../../components/page-title/page-title';

import './contact.scss';

export default class ContactPage extends Component {
  render() {
    return (
      <div className='contact-page'>
        <PageTitle title='Contact' />
        <div className='contact-container'>
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td><a href='mailto:bastiwoess@gmail.com'>bastiwoess@gmail.com</a></td>
              </tr>
              <tr>
                <td>Twitter:</td>
                <td><a href='https://twitter.com/@MrTweetingB'>@MrTweetingB</a></td>
              </tr>
              <tr>
                <td>GitHub:</td>
                <td><a href='https://github.com/MrCodingB'>MrCodingB</a></td>
              </tr>
              <tr>
                <td>Patreon:</td>
                <td><a href='https://www.patreon.com/mrpatreonizedb'>MrPatreonizedB</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
