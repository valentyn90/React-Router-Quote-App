import { NavLink } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span className={classes.quote}>
          <FaQuoteLeft />
        </span>
        Great Quotes
        <span className={classes.quote}>
          <FaQuoteRight />
        </span>
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' className={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' className={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
