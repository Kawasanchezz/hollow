import { KeyboardControls, PerformanceMonitor, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Grama } from './components/Grama'
import { MobileControls } from './components/MobileControls'
import { MagicMissionCircle } from './components/CirculoMagico'
import { Placas } from './components/Placas'
import { Renders } from './components/Renders'
import { Barreiras } from './components/Barreiras'
import { Player } from './components/Player'
import { Menu } from './components/menu/Menu'
import { MenuSobre } from './components/portfolio/sobre/MenuSobre'
import { MenuProjetos } from './components/portfolio/projetosLayout/MenuProjetos'
import { MenuContato } from './components/portfolio/contato/MenuContato'
import { DetectGpu } from './components/DetectGpu'
import { useControlsStore } from './components/controlsStore'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projeto } from './projetosPortfolio/Projetos'
import { TerrainPlane } from './Mapa'

const Controls = {
  forward: "forward",
  backward: "backward",
  left: "left",
  right: "right",
}

const presets = {
  mobile: {
    dpr: 1.5,
    shadows: false,
    bloom: false,
    grass: 1400,
    sparkles: 5
  },
  low: {
    dpr: 1,
    shadows: false,
    bloom: false,
    grass: 800,
    sparkles: 5
  },
  medium: {
    dpr: 1.25,
    shadows: false,
    bloom: true,
    grass: 1400,
    sparkles: 10
  },
  high: {
    dpr: 1.5,
    shadows: true,
    bloom: true,
    grass: 2200,
    sparkles: 15
  }
}

function BackgroundMusic({ started }) {
  const audioRef = useRef(null)
  const muted = useControlsStore((s) => s.muted)

  useEffect(() => {
    const audio = new Audio('/Instrumental.mp3')
    audio.loop = true
    audio.volume = 0.15
    audioRef.current = audio
    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
  }, [muted])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (started) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [started])

  return null
}

function ZonaSensor({ position, aoEntrar, aoSair }) {
  return (
    <RigidBody type="fixed" colliders={false} position={position}>
      <CuboidCollider
        args={[1, 1, 1]}
        sensor
        onIntersectionEnter={(e) => {
          if (e.other.rigidBodyObject?.name !== "player") return
          aoEntrar()
        }}
        onIntersectionExit={(e) => {
          if (e.other.rigidBodyObject?.name !== "player") return
          aoSair()
        }}
      />
    </RigidBody>
  )
}

const EVITAR_GRAMA = [
  [-12.2, -8.8, -13, 13.8],
  [-12.2, 9, -12.8, -9.4],
  [5.8, 9, -12.8, 5],
  [-12.2, 9, 0.6, 4],
  [-2.6, 1.4, -9.4, 0.6],
  [-8.8, -3.2, -5.2, -0.4],
  [-3.8, 2.4, -12.5, -6],
  [2.4, 8, -10.5, -6],
  [-6.5, 5.8, 4, 10.2],
]

function BotaoSom() {
  const muted = useControlsStore((s) => s.muted)
  const toggleMute = useControlsStore((s) => s.toggleMute)
  return (
    <button className="botao-som" onClick={toggleMute} aria-label={muted ? 'Ativar som' : 'Silenciar'} title={muted ? 'Ativar som' : 'Silenciar'}>
      {muted ? '🔇' : '🔊'}
    </button>
  )
}

function App() {
  const map = useMemo(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.backward, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
  ], []);

  const [started, setStarted] = useState(false);
  const [sobreIsOpen, setSobreIsOpen] = useState(false);
  const [projetosIsOpen, setProjetosIsOpen] = useState(false);
  const [contatoIsOpen, setContatoIsOpen] = useState(false);
  const [quality, setQuality] = useState("low");
  const preset = presets[quality]
  const magicSound = useRef();

  const audioUnlocked = useRef(false);

  useEffect(() => {
    DetectGpu().then(setQuality).catch(() => {})
  }, [])

  useEffect(() => {
    const unlockAudio = () => {
      if (audioUnlocked.current) return;
      magicSound.current = new Audio("/paper.mp3");
      magicSound.current.volume = 0.3;
      magicSound.current.loop = false;
      audioUnlocked.current = true;
    }

    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("click", unlockAudio);

    return () => {
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("click", unlockAudio);
    };
  }, []);

  const entrarNaZona = (abrir) => {
    abrir(true)
    const som = magicSound.current
    if (!som) return
    som.muted = useControlsStore.getState().muted
    som.play().catch(() => {})
  }

  const sairDaZona = (abrir) => {
    abrir(false)
    const som = magicSound.current
    if (!som) return
    som.pause()
    som.currentTime = 0
  }

  return (
    <BrowserRouter>
      <div style={{ width: '100vw', height: '100vh' }}>
        {!started && <Menu onStart={() => setStarted(true)} />}
        <BackgroundMusic started={started} />
        {started && <BotaoSom />}

        {sobreIsOpen && <MenuSobre fechar={() => setSobreIsOpen(false)} />}
        {projetosIsOpen &&
          <Routes>
            <Route element={<MenuProjetos fechar={() => setProjetosIsOpen(false)}/>}>
              <Route path='/' element={<Projeto />} />
            </Route>
          </Routes>
        }
        {contatoIsOpen && <MenuContato fechar={() => setContatoIsOpen(false)}/>}

        <div className="header">
          <h1>Kawã Sanchez</h1>
          <p className="so-desktop">Explore o vilarejo usando seu teclado(W, A, S, D) ou joystick</p>
          <p className="so-mobile">Use o joystick para explorar o vilarejo</p>
        </div>
        <KeyboardControls map={map}>
          {started && <MobileControls />}
          <Canvas
            shadows={preset.shadows}
            dpr={preset.dpr}
          >
            <PerformanceMonitor
              onDecline={() => {
                setQuality("low")
              }}
            />
              <color attach="background" args={['#3debe2']} />
              <ambientLight intensity={1.5} />
              <directionalLight
                intensity={2}
                color="#ffe603"
                castShadow={preset.shadows}
                shadow-mapSize={preset.shadows ? [1024, 1024] : [256, 256]}
                shadow-camera-near={1}
                shadow-camera-far={100}
                shadow-camera-left={-20}
                shadow-camera-right={30}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                position={[15, 15, 15]}
              />

              {preset.bloom && (
                <EffectComposer>
                  <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
                </EffectComposer>
              )}

              <Suspense fallback={null}>
                <Preload all />
                <Physics>
                  <Player />
                <ZonaSensor position={[-6, 0, -3]} aoEntrar={() => entrarNaZona(setSobreIsOpen)} aoSair={() => sairDaZona(setSobreIsOpen)} />
                <ZonaSensor position={[4.5, 0, -2]} aoEntrar={() => entrarNaZona(setProjetosIsOpen)} aoSair={() => sairDaZona(setProjetosIsOpen)} />
                <ZonaSensor position={[2, 0, 7]} aoEntrar={() => entrarNaZona(setContatoIsOpen)} aoSair={() => sairDaZona(setContatoIsOpen)} />

                <TerrainPlane scale={0.15} position={[-8, -4, -8]}/>

                <Grama count={preset.grass} position={[-17, 0, 0]} larg={[10, 0, 23]} />
                <Grama count={Math.round(preset.grass * 1.2)} position={[-6, 0, 0]} larg={[29, 0, 28]} evitar={EVITAR_GRAMA} />
                <Renders />
                <Placas />
                <Barreiras />

                <MagicMissionCircle position={[-6.1, 0.05, -2.5]} />
                <MagicMissionCircle position={[4.5, 0.05, -1.2]} />
                <MagicMissionCircle position={[2, 0.05, 7]} />
                </Physics>
              </Suspense>
          </Canvas>
        </KeyboardControls>
      </div>
    </BrowserRouter>
  )
}

export default App
