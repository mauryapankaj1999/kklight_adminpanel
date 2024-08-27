"use client"
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
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
  
  
    const [confirPassword, setConfirPassword] = useState(false);
    const handleClickconfirmpas = () => setConfirPassword((show) => !show);

    const handleMouseDownconfirpas = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
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
                                    <h3>Change Password</h3>
                                    <p className={styles.passp}>You have verified your account. Please enter new Password.</p>
                                    <div className="mb-3">
                                        <FormControl variant="outlined" fullWidth size='medium'>
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </div>
                                   
                                    <div className="mb-3">
                                        <FormControl variant="outlined" fullWidth size='medium'>
                                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password *</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={confirPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickconfirmpas}
                                                            onMouseDown={handleMouseDownconfirpas}
                                                            edge="end"
                                                        >
                                                            {confirPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </div>


                                    <div className="mb-3">
                                        <Button className={styles.loginbtn} fullWidth size='large'>Change Password</Button>
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
