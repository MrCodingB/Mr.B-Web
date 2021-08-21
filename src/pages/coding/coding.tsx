import { Component } from 'react';
import PageTitle from '../../components/page-title/page-title';

import './coding.scss';

export default class CodingPage extends Component {
  render() {
    return (
      <div className='coding-page list-page'>
        <PageTitle title='Coding' />
        <div className='listing-container'>
            <p className='description'>Here you can find some of my coding projects.</p>
			      <h2>Apps</h2>
			      <ol>
				      <li><a href='http://servers.mrb-web.at/home'>ServerDashboard</a></li>
			      </ol>
            <h2>
              <a href='https://github.com/MrCodingB/Mr.B-Web-Downloadables/blob/master/codingStuff/Scratch'>Scratch</a>
            </h2>
            <ol>
                <li><a href='https://github.com/MrCodingB/Mr.B-Web-Downloadables/raw/master/codingStuff/Scratch/Breakout.sb2'>Breakout</a></li>
                <li><a href='https://github.com/MrCodingB/Mr.B-Web-Downloadables/raw/master/codingStuff/Scratch/Dragons Relam.sb2'>Dragons Realm</a></li>
                <li><a href='https://github.com/MrCodingB/Mr.B-Web-Downloadables/raw/master/codingStuff/Scratch/Flipper.sb2'>Flipper</a></li>
                <li><a href='https://github.com/MrCodingB/Mr.B-Web-Downloadables/raw/master/codingStuff/Scratch/Snake.sb2'>Snake</a></li>
                <li><a href='https://github.com/MrCodingB/Mr.B-Web-Downloadables/raw/master/codingStuff/Scratch/Spaceshooter.sb2'>Spaceshooter</a></li>
            </ol>
        </div>
    </div>
    );
  }
}
