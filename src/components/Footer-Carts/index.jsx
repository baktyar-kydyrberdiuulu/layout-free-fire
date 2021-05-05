import React from 'react'
import './Footer-Carts.css'
import block from './images/block.png'
import icon from './images/icon.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon 3).png'
import polygon from './images/Polygon.png'

function Footer_Carts() {
  return (
    <div className='title'>
      {/* 1 */}
      <div className='cart1'>
        {/* 1.1 */}
        <div className='cart1-texts'>
          <h6>BASIC</h6>
          <p>Slow Orb</p>
          <div className='texts'>Heal an ally or yourself to full health over a few seconds.</div>
        </div>
        {/* 1.2 */}
        <div className='cart1-img'>
          <div className='img1'>
            <img alt='' src={block}></img>
          </div>
          <div className='img2'>
            <img alt='' src={icon}></img>
          </div>
        </div>

      </div>
      {/* 2 */}
      <div>
        <div className='cart1'>
          {/* 1.1 */}
          <div className='cart1-texts'>
            <h6>SIGNATURE</h6>
            <p>Healing Orb</p>
            <div className='texts'>Heal an ally or yourself to full health over a few seconds.</div>
          </div>
          {/* 1.2 */}
          <div className='cart1-img'>
            <div className='img1'>
              <img alt='' src={block}></img>
            </div>
            <div className='img2'>
              <img alt='' src={icon2}></img>
            </div>
          </div>

        </div>
      </div>
      {/* 3 */}
      <div>
        <div className='cart1'>
          {/* 1.1 */}
          <div className='cart1-texts'>
            <h6>ULTIMATE</h6>
            <p>Resurrection</p>
            <div className='texts'>Target a friendly corpse. After a short delay, revive them with full health.</div>
          </div>
          {/* 1.2 */}
          <div className='cart1-img'>
            <div className='img1'>
              <img alt='' src={block}></img>
            </div>
            <div className='img2'>
              <img alt='' src={icon3}></img>
            </div>
          </div>

        </div>
      </div>
      {/* 4 */}

      <div className='cart4'>
        <img alt='' src={polygon} ></img>
      </div>

    </div>
  )
}

export default Footer_Carts
