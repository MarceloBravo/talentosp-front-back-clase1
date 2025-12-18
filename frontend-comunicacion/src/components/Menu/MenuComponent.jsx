import React from 'react'
import { Link } from 'react-router'
import styles from './MenuComponent.module.css'

const MenuComponent = () => {
  return (
    <div className={styles.menu}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </div>
  )
}

export default MenuComponent