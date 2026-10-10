import { Joystick } from 'react-joystick-component'
import { useEffect, useState } from 'react'
import { useControlsStore } from './controlsStore'

export function MobileControls() {
  const setControls = useControlsStore((s) => s.setControls)
  const teleportTo = useControlsStore((st) => st.teleportTo)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 900 || 'ontouchstart' in window
      )
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) return null

  const handleMove = (e) => {
    setControls({
      forward: e.y > 0.3,
      backward: e.y < -0.3,
      left: e.x < -0.3,
      right: e.x > 0.3,
    })
  }

  const handleStop = () => {
    setControls({
      forward: false,
      backward: false,
      left: false,
      right: false,
    })
  }

  return (
    <>
    <nav className='atalhos-mobile' aria-label='Ir para'>
      <button onClick={() => teleportTo('sobre')}>Sobre Mim</button>
      <button onClick={() => teleportTo('projetos')}>Projetos</button>
      <button onClick={() => teleportTo('contato')}>Contato</button>
    </nav>
    <div className='joy-stick' style={{
      position: 'fixed',
      bottom: '10%',
      right: '25%',
      zIndex: 500,
      touchAction: 'none',
    }}>
      <Joystick
        size={100}
        baseColor="rgba(255,255,255,0.2)"
        stickColor="rgba(255,255,255,0.8)"
        move={handleMove}
        stop={handleStop}
      />
    </div>
    </>
  )
}
