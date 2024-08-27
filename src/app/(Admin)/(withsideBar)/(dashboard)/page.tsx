import Customebread from '@/app/CommonComponent/Customebread/Customebread'
import Header from '@/app/CommonComponent/Header'
import React from 'react'
import styles from './page.module.scss'
import iconimg from '@/assets/img/iconone.png'
import iconimg1 from '@/assets/img/icon2.png'
import iconimg2 from '@/assets/img/icon3.png'
import iconimg4 from '@/assets/img/icon4.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Header backbtn pageurl="Welcome Dashboard" />
      <Customebread />

      <div className="wraper_body">
        <div className="bgwhite">
          <div className={styles.listcard}>
            <ul>
              <li>
                <div className={styles.cardbox}>
                  <div className={styles.cardimg}>
                      <Image src={iconimg} alt=''  width={30} height={30}  />
                  </div>
                  <div className={styles.cardtext}>
                    <h3>60</h3>
                    <h6>Total Dealers Registered</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.cardbox}>
                  <div className={styles.cardimg}>
                      <Image src={iconimg} alt=''  width={30} height={30}  />
                  </div>
                  <div className={styles.cardtext}>
                    <h3>1,410</h3>
                    <h6>Pending Dealer Requests</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.cardbox}>
                  <div className={styles.cardimg}>
                      <Image src={iconimg1} alt=''  width={30} height={30}  />
                  </div>
                  <div className={styles.cardtext}>
                    <h3>500</h3>
                    <h6>Total Products Added</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.cardbox}>
                  <div className={styles.cardimg}>
                      <Image src={iconimg2} alt=''  width={30} height={30}  />
                  </div>
                  <div className={styles.cardtext}>
                    <h3>1001</h3>
                    <h6>Pending Requests</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.cardbox}>
                  <div className={styles.cardimg}>
                      <Image src={iconimg4} alt=''  width={30} height={30}  />
                  </div>
                  <div className={styles.cardtext}>
                    <h3>20,4,550</h3>
                    <h6>Total Sales</h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
