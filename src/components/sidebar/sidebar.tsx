import { Avatar } from '../avatar/avatar';

// Packages
import { PencilLine as PencilLineIcon } from 'phosphor-react';

// Styles
import styles from './sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/56042296?v=4" />

        <strong>Pedro Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLineIcon size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
