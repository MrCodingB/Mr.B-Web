import { Route, RouteProps } from 'react-router-dom';
import NavMenu from '../nav-menu/nav-menu';

import './page-route.scss';

const baseTitle = 'Mr.B';

export interface PageRouteProps extends RouteProps {
  hideNavbar?: boolean;
  title?: string;
}

export default class PageRoute extends Route<PageRouteProps | { title?: string }> {
  render() {
    document.title = this.props.title
        ? `${this.props.title} | ${baseTitle}`
        : baseTitle;

    return (
      <div className='page-route'>
        {(!('hideNavbar' in this.props) || !this.props['hideNavbar']) && <NavMenu />}
        <div className='app-content'>
          <Route {...this.props} />
        </div>
      </div>
    );
  }
}
