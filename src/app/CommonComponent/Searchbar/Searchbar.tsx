import React from 'react'
import styles from './Searchbar.module.scss'
import { CiSearch } from 'react-icons/ci'

const Searchbar = () => {
  return (
    <>
        <div className={styles.searcbar}>
            <input type="search" className={`form-control ${styles.custinput}`} placeholder='Search here...' />
            <CiSearch className={styles.iconbar} />

        </div>
    </>
  )
}
export default Searchbar
