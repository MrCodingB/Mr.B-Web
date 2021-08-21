import { Component } from 'react';

import './page-title.scss';

export interface PageTitleProps {
  title: string;
}

export default class PageTitle extends Component<PageTitleProps> {
  render() {
    return (
      <div className='page-title'>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
