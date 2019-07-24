import React, { useEffect, useState } from 'react';
import FullScreenPicture from './components/full-screen-picture';
import ProgressBar from './components/progress-bar';
import CloseCross from './components/close-cross';

import './styles.css';

const picture = {
  'landscape-primary': '960x576_1',
  'portrait-primary': 'nc_ss19_620x960px_1'
};

const App = () => {
  const delay = 1000;

  const [isCross, setCrossStatus] = useState(false);
  const [isProgressBar, setProgressBarStatus] = useState(true);
  const [screen, setScreen] = useState(window.screen.orientation.type);

  const calcViewportVH = () => {
    const vh = window.innerHeight * 0.01;
     document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const handleScreenPortrait = mql => {
    calcViewportVH();
    const orientation = mql.matches ? 'portrait-primary' : 'landscape-primary';
    setScreen(orientation);
    setCrossStatus(false);
    setProgressBarStatus(true);
  };

  const handleDoneProgress = () => {
    setCrossStatus(true);
    setProgressBarStatus(false);
  };

  useEffect(() => {
    calcViewportVH();
    const mqlPortrait = window.matchMedia('screen and (orientation: portrait)');
    mqlPortrait.addListener(handleScreenPortrait);

    return () => {
      mqlPortrait.removeListener(handleScreenPortrait);
    };
  });

  return (
    <section className="main">
      <CloseCross isAvailable={isCross} />
      <FullScreenPicture pictureTitle={picture[screen]} />
      <ProgressBar
        isAvailable={isProgressBar}
        onTimerDone={handleDoneProgress}
        delay={delay}
      />
    </section>
  );
};

export default App;
