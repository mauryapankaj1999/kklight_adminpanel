"use client"
import React, { useState } from 'react'
import style from './sidebar.module.scss'
import Image from 'next/image'
import imgicon from '@/assets/img/Vector.svg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Button from 'react-bootstrap/Button';
import userimg from '@/assets/img/user.png'
import Collapse from 'react-bootstrap/Collapse';
import Link from 'next/link'
import { RxDashboard } from 'react-icons/rx'
import { FaCog } from 'react-icons/fa'
import { IoChevronDownOutline } from 'react-icons/io5'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'

const Sidebar = () => {



  // const sidebarItems = [
  //   {
  //     title: "Dashboard",
  //     icon: imgicon,
  //     link: "/",
  //     subItems: [],
  //   },
  //   {
  //     title: "Product Manage",
  //     icon: imgicon,
  //     link: "/product",
  //     subItems: [],
  //   },
  //   {
  //     title: "Size Manage",
  //     icon: imgicon,
  //     link: "/size",
  //     subItems: [],
  //   },
  //   {
  //     title: "Category Manage",
  //     icon: imgicon,
  //     link: "/category",
  //     subItems: [],
  //   },
  //   {
  //     title: "Distributor Manage",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       {
  //         title: "All Distributor",
  //         link: "/DistributorManage/all-distributor",
  //       },
  //       { title: "Approved", link: "/DistributorManage/approved" },
  //       { title: "Pending", link: "/DistributorManage/pending" },
  //       { title: "Reject Order", link: "/DistributorManage/reject" },
  //     ],
  //   },
  //   {
  //     title: "Salon Management",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "All Salon", link: "/SalonManage/all-salon" },
  //       { title: "Approved Salon", link: "/SalonManage/approved" },
  //       { title: "Pending Salon", link: "/SalonManage/pending" },
  //       { title: "Rejected Salon", link: "/SalonManage/rejected" },
  //     ],
  //   },
  //   {
  //     title: "Corporate Account",
  //     icon: imgicon,
  //     link: "/Corporateaccount",
  //     subItems: [],
  //   },
  //   {
  //     title: "Range Discount",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "Distributor", link: "/RangeDiscount/Distributor" },
  //       { title: "Salon", link: "/RangeDiscount/Salon" },
  //       {
  //         title: "Corporate Account",
  //         link: "/RangeDiscount/corporateaccount",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Inventory Manage",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "Add Inventory", link: "/InventoryManage/addoinventory" },
  //       { title: "View Inventory", link: "/InventoryManage/view" },
  //     ],
  //   },
  //   {
  //     title: "Order Management",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "All Order", link: "/OrderManagement/Allorders" },
  //       {
  //         title: "Distributor Order",
  //         link: "/OrderManagement/DistributorOrder",
  //       },
  //       {
  //         title: "Corporate Clients",
  //         link: "/OrderManagement/CorporateClients",
  //       },
  //       { title: "Regular Salon", link: "/OrderManagement/RegularSalon" },
  //     ],
  //   },
  //   {
  //     title: "Role Management",
  //     icon: imgicon,
  //     link: "/Rolemanagment",
  //     subItems: [],
  //   },
  //   {
  //     title: "Slab Management",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "Slab", link: "/SlabManagement/Slab" },
  //       {
  //         title: "Terms & Condition",
  //         link: "/SlabManagement/Terms&Condition",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Query Manage",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "All Query", link: "/QueryManage/Allquery" },
  //       { title: "Distributor Query", link: "/QueryManage/DistributorQuery" },
  //       { title: "Salon Query", link: "/QueryManage/SalonQuery" },
  //       { title: "Corporate Query", link: "/QueryManage/CorporateQuery" },
  //     ],
  //   },
  //   {
  //     title: "Profile Manage",
  //     icon: imgicon,
  //     link: "",
  //     subItems: [
  //       { title: "All Request", link: "/EditRequestManage/AllRequest" },
  //       {
  //         title: "Distributor Request",
  //         link: "/EditRequestManage/DistributorRequest",
  //       },
  //       { title: "Salon Request", link: "/EditRequestManage/SalonRequest" },
  //       { title: "Corporate Request", link: "" },
  //     ],
  //   },
  // ];




  const [mainmenu, setMainmenu] = useState([
    {
      menuname: 'Dashboard',
      mainlinks: '/',
      icon: '',
      menuitem: []
    },
    {
      menuname: 'Product Management',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'All Product',
          links: 'ProductManagement/allproduct'
        },
        {
          submenuitem: 'Products Manage',
          links: '#'
        },
        {
          submenuitem: 'What’s New Manage',
          links: ''
        },
      ]
    },
    {
      menuname: 'Dealers Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Residential',
          links: '/Residential-project'
        },
        {
          submenuitem: 'Communal',
          links: '#'
        },
        {
          submenuitem: 'International',
          links: '#'
        },

      ]

    },
    {
      menuname: 'Sales Team Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]

    },
    {
      menuname: 'Portal Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]

    },
    {
      menuname: 'Order Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },

    {
      menuname: 'Ledgers Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },
    {
      menuname: 'Scheme Master Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },
    {
      menuname: 'Location Management',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },
    {
      menuname: 'Notification Management',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },
    {
      menuname: 'Support Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },
    {
      menuname: 'Edit Request Manage',
      mainlinks: '',
      icon: <HiOutlineChevronRight />,
      menuitem: [
        {
          submenuitem: 'Pooja Rooms',
          links: '/Pooja-room-under-our-creation'
        },
        {
          submenuitem: 'Dream Temples',
          links: '/Dream-Temple'
        },
        {
          submenuitem: 'Communal Temples',
          links: '#'
        },

      ]
    },

    {
      menuname: 'Reports',
      mainlinks: '/Blog',
      menuitem: []
    },

  ]);

  return (
    <>
      {/* <div className={style.sidebar}>
        <div className={style.sidebarher}>
          <div className={style.sidebarlogo}>
            <Image src={userimg} alt="" fill />
          </div>
          <h6>Welcome Back!</h6>
          <h5>Muneer Khan</h5>
          <p>Application Administrator <IoChevronDownOutline />
          </p>

        </div>
        <div className={style.sidebarcontent}>
          <ul className={style.mainlist}>
            {sidebarItems.map((item, index) => (
              <li key={index} className={activeItemIndex === index ? style.active : ''}>
                {item.subItems.length === 0 ? (
                  <Link href={item.link} className=''>
                    <div className={style.iconside} onClick={() => setActiveItemIndex(index)}>
                      <FaCog />
                      <h6>{item.title}</h6>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div onClick={() => handleItemClick(index)} aria-controls="example-collapse-text" aria-expanded={openIndex === index} className={style.flexbetwnsubmenu}>
                      <div className={style.dropflex}>
                        <FaCog />

                        <h6>{item.title}</h6>
                      </div>
                      <div>{openIndex === index ? <HiOutlineChevronRight /> : <HiOutlineChevronRight />}</div>
                    </div>
                  






                    <div  className={style.submenulist}>
                      <div  className={style.dropdownsubmenu}>
                        <div className={style.submenu}>
                          <div>
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex} className={activeItemIndex === index && activeSubItemIndex === subIndex ? style.submenuactive : ''}>
                                <Link href={subItem.link} onClick={() => handleSubItemClick(index, subIndex)}>{subItem.title}</Link>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      <div className={style.sidebar}>
        <div className={style.sidebarher}>
          <div className={style.sidebarlogo}>
            <Image src={userimg} alt="" fill />
          </div>
          <h6>Welcome Back!</h6>
          <h5>Muneer Khan</h5>
          <p>Application Administrator <IoChevronDownOutline />
          </p>

        </div>
        <div className={style.headertopnav}>
          <div className={style.megamenu}>
            <ul className={style.listtopmenu}>

              {
                mainmenu.map((el, index) => {
                  return (

                    <li className={style.dropmenulist} key={index}><a href={el.mainlinks} className={style.menuname}>
                      <div className={style.flexarrow}>
                        <div className="">
                          <FaCog /> &nbsp; {el.menuname}
                        </div>
                        <div>
                          {el.icon}
                        </div>
                      </div>


                    </a>


                      {
                        el.menuitem && el.menuitem.length > 0 && (
                          <div className={style.megamenudropdonw}>
                            <ul className={style.listmenu}>
                              {el.menuitem.map((item, ind) => (
                                <li key={ind}>
                                  <a href={item.links} className={style.submenulist}>
                                  <div className={style.flexarrow}>
                                    <div className="">
                                    <MdOutlineDashboard />
                                    &nbsp;  {item.submenuitem}
                                    </div>
                                  </div>
                                </a>
                                </li>
                              )
                              )}
                            </ul>
                          </div>
                        )
                      }

                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
