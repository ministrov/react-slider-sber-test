import Logo from '../../components/logo/Logo'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles['header']}>
      <Logo />

      <ul className={styles['main-nav__list']}>
        <li className={styles['nav-list__item']}>
          <a href="https://github.com/ministrov" target='_blank' className={styles['nav-list__link']}>
            <img src="../../assets/github.svg" width={23} height={23}  alt="Github logo picture" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;