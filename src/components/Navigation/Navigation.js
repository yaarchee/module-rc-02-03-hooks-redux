import { NavLink } from 'react-router-dom';
import routers from '../../routers';
import { Route, Switch } from 'react-router-dom';
import CounterView from '../../Views/CounterView';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        to={routers.counter}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Счётчк
      </NavLink>
      <NavLink
        to={routers.phoneBook}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Телефонная книга
      </NavLink>
      <NavLink
        to={routers.feedback}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Отзывы
      </NavLink>
      <NavLink
        to={routers.imageFinder}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Поиск изображений
      </NavLink>
    </nav>
  );
}

export default Navigation;
