import { Component } from 'react';
import PageTitle from '../../components/page-title/page-title';

import './other.scss';

export default class OtherPage extends Component {
  render() {
    return (
      <div className='other-page list-page'>
        <PageTitle title='Other' />
        <div className='listing-container'>
            <p className='description'>Here you can find all the other stuff that I did/made(e.g. Piano pieces that I play, etc.).</p>
            <h2><a href='https://www.youtube.com'>YouTube</a></h2>
            <ul>
                <li>YouTube-Piano-Channel: <a href='https://www.youtube.com/channel/UCKuUUX9i8fCFf1o21caa6XQ'>Piano B</a></li>
            </ul>
        </div>
      </div>
    );
  }
}
