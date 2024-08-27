import Customebread from '@/app/CommonComponent/Customebread/Customebread'
import Header from '@/app/CommonComponent/Header'
import React from 'react'
import styles from './page.module.scss'
import Filterbutton from '@/app/CommonComponent/Filterbutton/Filterbutton'
import Searchbar from '@/app/CommonComponent/Searchbar/Searchbar'
import ProductTable from './_components/AllproductTable/ProductTable'


const page = () => {
    return (
        <>
            <Header backbtn pageurl="All Product" />
            <Customebread breadcumname="All Product" />

            <div className="paddingleftright">
                <div className='wraper_body'>
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <Filterbutton />
                        </div>

                        <div className="col-md-4">
                            <Searchbar />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="lower-z-index">
                                <ProductTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page
