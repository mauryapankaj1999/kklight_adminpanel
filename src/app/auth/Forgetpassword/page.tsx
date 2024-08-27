
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
                                    <h3>Forgot Password</h3>
                                    <p className={styles.topcare}>We will send a OTP to your Email ID.</p>
                                    <div className="mb-3">
                                        <FormControl variant="outlined" fullWidth size='medium' >
                                            <InputLabel>Email</InputLabel>
                                            <OutlinedInput
                                                type='email'
                                                endAdornment={
                                                    <IconButton edge="end" disableRipple disableFocusRipple >
                                                        <MailOutlineSharp />
                                                    </IconButton>
                                                }
                                                label="Password"

                                            />
                                        </FormControl>
                                    </div>

                                    <div className="mb-3">
                                        <Button className={styles.loginbtn} fullWidth size='large'>Send OTP</Button>
                                    </div>
                                    <div className="text-end">
                                        <Link href="/auth/login" className={styles.bakloing}>Back to Login</Link>
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
