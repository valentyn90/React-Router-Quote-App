import { NavLink } from 'react-router-dom';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span className={classes.quote}>
          <ImQuotesLeft />
        </span>{' '}
        Great Quotes{' '}
        <span className={classes.quote}>
          <ImQuotesRight />
        </span>
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>{' '}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
