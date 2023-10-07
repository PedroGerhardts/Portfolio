/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
  <div className={styles.profile}>
    <img className={styles.avatar} src='https://github.com/PedroGerhardts.png' alt="Foto de Cria"/>
    <h1 className={styles.name}>Pedro Gerhardt</h1>

    

  </div>
  )
}