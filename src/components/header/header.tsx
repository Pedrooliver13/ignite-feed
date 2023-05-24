// Styles
import styles from './header.module.css';

// Assets
import IgniteLogo from '../../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Ignite logo" />
    </header>
  );
};
