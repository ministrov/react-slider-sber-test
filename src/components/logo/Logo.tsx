import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles['main-nav__logo logo']}>
      <a href='/' className={styles['logo__name']}>
        Anton Zhilin
      </a>
    </div>
  )
}

export default Logo