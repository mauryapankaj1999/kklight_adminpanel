"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { BiSolidEdit } from 'react-icons/bi';
import { FaEye, FaRegTrashAlt } from 'react-icons/fa';
import productimg from '@/assets/img/product.png'
import Image from 'next/image';
import  style from './ProductManage.module.scss'
import Switch from 'react-switch';

const Datatablecommon = ({ data, columns }: { data: any, columns: any}) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    };

    const customStyles: any = {
        table: {
            style: {
                // marginTop: "25px",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                border: "1px solid #EAECF0",
                backgroundColor: "#FFF",
                boxShadow:
                    "0px 0px 0px 0px rgba(16, 24, 40, 0.06), 0px 1px 8px 0px rgba(16, 24, 40, 0.10)",
                overflow: "visible !important",
            },
        },

        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                borderRadius: '25px',
                outline: '1px solid #FFFFFF',
            },
        },

        headRow: {
            style: {
                borderBottomWidth: "0",
                borderBottomColor: "transparent",
                borderBottomStyle: "solid",
                backgroundColor: "#111111",
                borderTopLeftRadius:'10px',
                borderTopRightRadius:'10px',
            },
        },

        headCells: {
            style: {
                fontSize: "13px",
                fontWeight: "500",
                // color: '#667085',
                paddingLeft: "10px",
                border: "none",
                overflow: "unset",
                color: "#fff",
            },
        },

        cells: {
            style: {
                border: "none",
                borderBottomColor: '#FFFFFF',
                padding: "12px 12px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#667085",
            },
        },
        pagination: {
            style: {
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                border: "1px solid #EAECF0",
                backgroundColor: "#FFF",
                boxShadow:
                    " 0px 0px 0px 0px rgba(16, 24, 40, 0.06), 0px 1px 8px 0px rgba(16, 24, 40, 0.10)",
            },
        },
    };


 

    return (
        <>
            <DataTable
                customStyles={customStyles}
                columns={columns}
                data={data}
            />
        </>
    )
}

export default Datatablecommon
