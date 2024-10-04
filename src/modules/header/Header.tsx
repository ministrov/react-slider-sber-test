import Logo from '../../components/logo/Logo'
import GitHubIcon from '../../components/gitHubIcon/GitHubIcon';
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles['header']}>
      <Logo />

      <ul className={styles['main-nav__list']}>
        <li className={styles['nav-list__item']}>
          <a href="https://github.com/ministrov" target='_blank' className={styles['nav-list__link']}>
            <GitHubIcon/>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;