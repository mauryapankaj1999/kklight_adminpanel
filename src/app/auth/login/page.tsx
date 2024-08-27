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
                                    <h3>Login</h3>
                                    <div className="mb-3">
                                        <FormControl variant="outlined" fullWidth size='medium' >
                                            <InputLabel>Email</InputLabel>
                                            <OutlinedInput
                                                type='email'
                                                endAdornment={
                                                    <IconButton
                                                    edge="end"
                                                    disableRipple
                                                    disableFocusRipple
                                                    // sx={{
                                                    //   '&:hover': {
                                                    //     backgroundColor: 'transparent', 
                                                    //   },
                                                    //   cursor: 'default', 
                                                    // }}
                                                    >
                                                        <MailOutlineSharp />
                                                    </IconButton>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </div>
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
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <div className={styles.bordertab}>
                                                        <div className={styles.imgcaptreu}>
                                                            <Image src={captureimg} alt='' fill />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className={styles.btnref}>
                                                    <button className={styles.btnreff}>
                                                        <IoRefresh />
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.sectionimg}>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <TextField id="outlined-basic" label="Security Text" variant="outlined" />

                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                        <input type="checkbox" id="Remember" className='checkboxclor' style={{accentColor:'#d72625'}} />
                                        <label htmlFor="Remember" style={{color:'#767676', marginLeft:10}}> Remember me</label>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            <Link href='/auth/Forgetpassword' className={`${styles.forgetbtn}`}>Forgot Password?</Link>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <Button className={styles.loginbtn} fullWidth size='large'>Login</Button>
                                    </div>

                                    <p className={styles.termtext}>By Continuing, you agree to accept our Privacy Policy & Terms of Use.</p>

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
