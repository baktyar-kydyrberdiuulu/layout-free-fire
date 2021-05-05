import React from 'react'
import './Header.css'
import games from './images/riot games.png'
import restangle from './images/Rectangle 128.png'
import logo from './images/logo.png'
import akali from './images/akali.png'

function Header() {
  return (
    <div className='header'>
      <div className='h-links'>
        <img alt='' src={games}></img>
        <img alt='' src={restangle}></img>
        <img alt='' src={logo}></img>
        <a href='#'>GAME</a>
        <a href='#'>CHAMPIONS</a>
        <a href='#'>NEWS <b>⏬</b></a>
        <a href='#'>PATCH NOTES</a>
        <a href='#'>DISCOVER <b>⏬</b></a>
        <a href='#'>ESPORTS</a>
        <a href='#'>UNIVERSE</a>
        <a href='#'>SHOP</a>
        <a href='#'>SUPPORT</a>


      </div>
      <div className='h-links2'>
        <img alt='' src={akali}></img>
        <div className='h-links2-text'>UNEPICKID <b>⏬</b></div>
      </div>


    </div>
  )
}

export default Header
