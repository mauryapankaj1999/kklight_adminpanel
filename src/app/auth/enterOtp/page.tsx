
import React, { useState } from 'react'
import Header from '../Login_header/Header'
import styles from './page.module.scss'
import TextField from '@mui/material/TextField';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { MailOutlineSharp, Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';
import captureimg from '@/assets/img/capt.png'
import { IoRefresh } from 'react-icons/io5';
import Link from 'next/link';

const page = () => {
  return (
    <>
    <div className={styles.bglogin}>
        <Header />
        <div className={styles.topleft}>
            <Image src='/img/doticon.png' alt='' width={360} height={360} />
        </div>
        <div className={styles.bottomright}>
            <Image src='/img/doticon.png' alt='' width={360} height={360} />
        </div>
        <div className={styles.logisection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className={styles.logincard}>
                            <h3>Verify OTP</h3>
                            <p className={`mb-0 ${styles.topcare}`}>Check your inbox an OTP sent to</p>
                            <p  className={`${styles.email}`}>muneerkhan897@gmail.com.</p>
                            <div className="mb-3">
                                <FormControl variant="outlined" fullWidth size='medium' >
                                    <InputLabel>Enter OTP</InputLabel>
                                    <OutlinedInput
                                        type='email'
                                     
                                        label="Password"

                                    />
                                </FormControl>
                            </div>

                            <div className="mb-3">
                                <Button className={styles.loginbtn} fullWidth size='large'>Verify OTP</Button>
                            </div>
                            <div className="d-flex justify-content-between">
                            <div className="">
                                <Link href="/auth/login" className={styles.bakloing}>Back to Login</Link>
                            </div>
                            <div className="text-end">
                                <Button className={styles.resnedtop}>Resend OTP</Button>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <p className={styles.priceconten}>@ 2024, Department of Sales and Purchase, KK Light Clarity and Reality </p>
    </div>
</>
  )
}

export default page
