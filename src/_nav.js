import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilApps,
  cilNotes,
  cilPencil,
  cilSettings,
  cilSpeedometer,
  cilSearch,
  cilPeople,
  cilContact,
  cilHome,
  cilShieldAlt,
  cilChatBubble,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'CASTLE ADMIN',
    to: '/dashboard',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },

  // --------- ADMIN TOOLS  ---------------

  {
    component: CNavItem,
    name: 'Home',
    to: '/theme/colors',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/theme/typography',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Admin Tools',
  },
  {
    component: CNavItem,
    name: 'Boarding Passes',
    to: '/theme/typography',
    icon: <CIcon icon={cilShieldAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Docs',
    to: '/theme/colors',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Hangar',
    to: '/theme/typography',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Control Tower',
    to: '/theme/typography',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Comms',
    to: '/theme/typography',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  // --------- USER MANAGEMENT ---------------
  {
    component: CNavTitle,
    name: 'User Management',
  },

  {
    component: CNavItem,
    name: 'Settings',
    to: '/theme/typography',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
