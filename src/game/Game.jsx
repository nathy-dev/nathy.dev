import { Suspense, lazy, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

import { Map } from './map/Map.jsx';
import { UI } from './components/UI.tsx';
import { FPVControls } from './components/FPVControls.jsx';
import { Staff } from './components/Staff.tsx';
import { TitleScreen } from './components/TitleScreen.tsx';
import { PlayerUi } from './components/PlayerUi.tsx';
import { MuteButton } from './components/MuteButton.tsx';
import { Sound } from './util/constants.ts';
import { useKeyboardControls } from './hooks/useKeyboardControls.ts';
import { useGameStore } from './store.ts';
import { VictoryOverlay } from './components/VictoryOverlay.tsx';
import { DeathOverlay } from './components/DeathOverlay.tsx';

import { useRoute } from 'wouter';
import { useDetectMobile } from '../hooks/useDetectMobile.ts';
import { PixelBox } from '../components/PixelBox.tsx';
import { Choice } from '../components/Choice.tsx';
import { TopBar } from '../components/TopBar.tsx';

const LazyAudio = lazy(() => import('./components/Audio.tsx'));

const Game = () => {
  const { mute } = useKeyboardControls();
  const { toggleMute, status, resetState } = useGameStore();
  const balladRef = useRef(null);
  const FPVref = useRef(null);
  const isMobile = useDetectMobile();

  const [match] = useRoute('/resume-rummager');

  useEffect(() => {
    if (match) {
      resetState();
    }
  }, []);

  useEffect(() => {
    if (mute) {
      toggleMute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mute]);

  return (
    <div className="absolute h-full w-full overflow-hidden">
      {isMobile ? (
        <>
          <TopBar />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-fit w-fit">
            <PixelBox>
              <div className="flex flex-col items-center gap-8">
                <h1>Mobile game coming soon</h1>
                <div>
                  <p>To play, visit again on a desktop.</p>
                  <p>Here is the reward for free.</p>
                </div>

                <Choice
                  icon="chest"
                  handleChoiceClick={() => {
                    window.open('resume.pdf', '_blank');
                  }}
                >
                  Open treasure?
                </Choice>
              </div>
            </PixelBox>
          </div>
        </>
      ) : (
        <>
          <TitleScreen controlRef={FPVref} />
          <UI>
            <Staff />
            <PlayerUi />
            <MuteButton />
            <VictoryOverlay controlRef={FPVref} />
            <DeathOverlay controlRef={FPVref} />
          </UI>
          <Canvas
            shadows={{
              type: 'BasicShadowMap',
            }}
            mode="concurrent"
            camera={{ position: [0, 5, 0], rotation: [0, 3.2, 0] }}
          >
            <Map />
            <FPVControls controlRef={FPVref} />
          </Canvas>
          {status !== 'init' && (
            <Suspense fallback={null}>
              <LazyAudio volume={1} loop={true} sound={Sound.ballad} audioRef={balladRef} />
            </Suspense>
          )}
        </>
      )}
    </div>
  );
};

export default Game;
