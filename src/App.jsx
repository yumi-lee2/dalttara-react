import { useEffect } from 'react'
import Nav from './components/Nav'
import Cover from './components/Cover'
import Summary from './components/Summary'
import Vision from './components/Vision'
import GrowthSystem from './components/GrowthSystem'
import TargetUsers from './components/TargetUsers'
import Metrics from './components/Metrics'
import MvpScope from './components/MvpScope'
import GoNoGo from './components/GoNoGo'
import FutureVision from './components/FutureVision'

const starImgs = ['/assets/star1.png', '/assets/star2.png', '/assets/star3.png']
const sparkleImgs = [
  '/assets/twinkle1.png', '/assets/twinkle2.png', '/assets/twinkle3.png',
  '/assets/twinkle4.png', '/assets/twinkle5.png', '/assets/twinkle6.png',
  '/assets/twinkle7.png',
]
const allImgs = [...starImgs, ...sparkleImgs]

export default function App() {
  useEffect(() => {
    const container = document.getElementById('stars')
    for (let i = 0; i < 35; i++) {
      const e = document.createElement('span')
      e.className = 'star'
      const img = document.createElement('img')
      img.src = allImgs[Math.random() * allImgs.length | 0]
      img.alt = ''
      const sz = 16 + Math.random() * 28
      e.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 4}s;animation-duration:${2 + Math.random() * 3}s;width:${sz}px;height:${sz}px`
      e.appendChild(img)
      container.appendChild(e)
    }
  }, [])

  return (
    <>
      <div id="stars" className="stars" />
      <Nav />
      <div className="page">
        <Cover />
        <Summary />
        <Vision />
        <GrowthSystem />
        <TargetUsers />
        <Metrics />
        <MvpScope />
        <GoNoGo />
        <FutureVision />
      </div>
    </>
  )
}
