import React from 'react'
import styles from './Filterbutton.module.scss'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { Button } from '@mui/material'

const Filterbutton = () => {
  return (
    <>
        <Button className={styles.btnfilter}>Advance Filter &nbsp; <HiOutlineAdjustmentsHorizontal /></Button>   
    </>
  )
}

export default Filterbutton
