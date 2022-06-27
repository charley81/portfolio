import React from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

const navLinks = [
  {
    id: 1,
    url: '/about',
    section: 'about',
    text: 'About & Contact',
  },
]

const socialLinks = [
  {
    id: 1,
    name: 'github',
    icon: <FaGithubAlt />,
    url: 'https://github.com/charley81',
  },
  {
    id: 2,
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/charley81/',
  },
]

export { navLinks, socialLinks }
