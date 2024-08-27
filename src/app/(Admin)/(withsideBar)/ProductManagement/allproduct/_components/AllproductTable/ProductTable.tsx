"use client"
import Datatablecommon from '@/app/CommonComponent/TableComponent/DataTable/Datatablecommon';
import Link from 'next/link';
import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Switch from 'react-switch';
const ProductTable = () => {
    const [toggleState, setToggleState] = useState<any>({});

    const handleToggle = (index:any) => {
        setToggleState((prevState:any) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const columns = [
        {
            name: 'Sr no',
            selector: (row: any, index: number) => index + 1,
            width: '6%',
        },
        {
            name: 'Salon Name',
            selector: (row: any, index: number) => row.SalonName,
             width:'15%'
            
        },
        {
            name: 'City',
            selector: (row: any, index: number) => row.City,
             width:'10%'
        },
        {
            name: 'Area',
            selector: (row: any, index: number) => row.Area,
             width:'13%'
        },
        {
            name: 'PIN Code',
            selector: (row: any, index: number) => row.pinCode,
             width:'12%'
        },
        {
            name: 'Distributor',
            selector: (row: any, index: number) => row.Distributor,
             width:'11%'
        },
        {
            name: 'Request Status',
            selector: (row: any, index: number) =>(
                <span className={`badge badge-${row.requeststatus}`.toLowerCase()}>{row.requeststatus}</span>
                // <span className={`badge badge-${row.requeststatus == 'Pending' ? 'pending':'complete' }`}>{row.requeststatus}</span>
            ),
             width:'18%'
        },
        {
            name: 'Status',
            selector: (row: any, index: number) => (
                <>
                    <Switch
                      checked={toggleState[index] || false}
                      onChange={() => handleToggle(index)}
                        onColor="#111111"
                        onHandleColor="#fff"
                        handleDiameter={15}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={35}
                        className="react-switch"
                        id="material-switch"
                    />
                </>

            ),
            width:'8%'
        
        },
        {
            name: 'Action',
            selector: (row: any, index: number) => (
                <div className="editdelete">
                    <ul>
                        <li><Link href="/SalonManage/view" className='vieweyes'><MdOutlineRemoveRedEye /></Link></li>
                    </ul>
                </div>
            ),
        },

    ];

    const data = [
        {
            SalonName: 'Classy Cuts Salon',
            City: 'Delhi',
            Area: 'NSP Delhi',
            pinCode: '110034',
            Distributor:'------',
            requeststatus: 'Approved',
        },
        
    ]
  return (
    <>
       <Datatablecommon
                data={data}
                columns={columns}

            />
    </>
  )
}

export default ProductTable
