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

  const handleScreenOrientationChange = () => {
    setScreen(window.screen.orientation.type);
    setCrossStatus(false);
    setProgressBarStatus(true);
  };

  const handleDoneProgress = () => {
    setCrossStatus(true);
    setProgressBarStatus(false);
  };

  useEffect(() => {
    window.screen.orientation.onchange = handleScreenOrientationChange;

    return () => {
      window.screen.orientation.onchange = null;
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
