import React from 'react'
import style from './Header.module.scss'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'
import { TfiBell } from 'react-icons/tfi'
import Image from 'next/image'
import notifaction from '@/assets/img/notifaction.png'
import golble from '@/assets/img/global.png'
import Link from 'next/link'

const Header = (props: any) => {
    return (
        <>
        <div className={style.headerpading}>

     
            <div className={`bg-white ${style.header}`}>
                <div className="row gx-0 align-items-center">
                    <div className="col-md-6 align-items-center">

                        {
                            props.welcomeuser && (
                                <>
                                    <h4>Welcome Back, Amit!</h4>
                                    <p>Here’s what happening with your store today</p>
                                </>
                            )
                        }


                        {
                            props.backbtn &&

                            <div className="backrea">
                                <FaCircleArrowLeft />
                                <p>{props.pageurl}</p>
                            </div>
                        }

                    </div>
                    <div className="col-md-6 text-end">
                        <div className={style.headersearch}>
                            <ul>
                                <li>
                                    <div className="position-relative">
                                        <Link href='' className={style.notifactionicon}>
                                        <span>5</span>
                                            <Image src={notifaction} alt='' width={25} height={25} />
                                        </Link>
                                    </div>
                                </li>
                                <li className={style.langagesec}>
                                <Image src={golble} alt='' width={34} height={34} />
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>English</option>
                                        <option value="1">Hindi</option>
                                        <option value="2">punjabi</option>
                                        <option value="3">marathi</option>
                                    </select>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




            </div>
            </div>
        </>
    )
}

export default Header
