import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logoicon from '@/assets/img/img1.png'
import logoicon1 from '@/assets/img/img2.png'
import logoicon2 from '@/assets/img/img3.png'

const Header = () => {
    return (
        <>
            <div className={styles.headertop}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles.logocion}>
                                <Image src={logoicon} alt='' fill />
                            </div>
                        </div>
                        <div className="col-md-4 text-center" >
                            <div className={styles.logocion} style={{ margin: 'auto' }}>
                                <Image src={logoicon1} alt='' fill />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-end d-flex justify-content-end">
                            <div className={styles.logocion}>
                                <Image src={logoicon2} alt='' fill />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
