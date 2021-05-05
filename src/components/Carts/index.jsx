import React from 'react'
import agent from './images/AGENTS.png'
import ply1 from './images/player.png'
import ply2 from './images/player (1).png'
import ply3 from './images/player (2).png'
import ply4 from './images/player (3).png'
import './Carts.css'
import pod1 from './images/podval-1.png'
import pod2 from './images/podval-2.png'
import pod3 from './images/podval-3.png'
import pod4 from './images/podval-4.png'
import phonex from './images/PHOENIX.png'
import united from './images/United Kingdom.png'
import jet from './images/JETT.png'
import kore from './images/South Korea.png'
import sova from './images/SOVA.png'
import rus from './images/Russia.png'
import sage from './images/SAGE.png'
import china from './images/China.png'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'

export const Carts = () => {
  return (
    <div className='carts'>
      <div className='carts-imgs'>
        {/* 1 */}
        <div className='agency'>
          <img alt='' src={agent}></img>
        </div>
        {/* 2 */}
        <div>
          <div className='phonex'>
            <img alt='' src={phonex}></img>
          </div>
          <div className='united'>
            <img alt='' src={united}></img>
          </div>
          <img alt='' src={ply1}></img>
          <div className='podval-1'>
            <img alt='' src={pod1}></img>
            <img alt='' src={pod2}></img>
            <img alt='' src={pod3}></img>
            <img alt='' src={pod4}></img>

          </div>
        </div>
        {/* 3 */}
        <div>
          <div className='jet'>
            <img alt='' src={jet}></img>
          </div>
          <div className='kore'>
            <img alt='' src={kore}></img>
          </div>
          <img alt='' src={ply2}></img>
          <div className='podval-1'>
            <img alt='' src={pod1}></img>
            <img alt='' src={pod2}></img>
            <img alt='' src={pod3}></img>
            <img alt='' src={pod4}></img>

          </div>
        </div>
        {/* 4 */}
        <div>
          <div className='sova'>
            <img alt='' src={sova}></img>
          </div>
          <div className='rus'>
            <img alt='' src={rus}></img>
          </div>
          <img alt='' src={ply3}></img>
          <div className='podval-1'>
            <img alt='' src={pod1}></img>
            <img alt='' src={pod2}></img>
            <img alt='' src={pod3}></img>
            <img alt='' src={pod4}></img>

          </div>
        </div>
        {/* 5 */}
        <div>
          <div className='sage'>
            <img alt='' src={sage}></img>
          </div>
          <div className='china'>
            <img alt='' src={china}></img>
          </div>
          <img alt='' src={ply4}></img>
          <div className='podval-4'>
            <img alt='' src={one}></img>
            <img alt='' src={two}></img>
            <img alt='' src={three}></img>
            <img alt='' src={four}></img>

          </div>
        </div>
        {/* =========== */}
      </div>
    </div>
  )
}
