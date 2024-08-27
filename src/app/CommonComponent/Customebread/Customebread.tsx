import React from 'react'
import styles from './Breadcrumb.module.scss'
import Link from 'next/link'
import logogroup from '@/assets/img/logoright.png'
import Image from 'next/image'

const Customebread = (props:any) => {
    return (
        <>
        <div className={styles.bradumsection}>
            <div className="row g-0">
                <div className="col-md-6">
                    <div className={styles.customeection}>
                        <ul>
                            <li><Link href="">Dashboard </Link></li>
                            <li>{props.breadcumname}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end pe-4" >
                    <div className={styles.logogroup}>
                        <Image src={logogroup} alt='' fill />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Customebread
