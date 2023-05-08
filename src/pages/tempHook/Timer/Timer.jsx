import { useState, useEffect, useRef } from 'react';
import { Section } from '../Section/Section';
import css from './Timer.module.scss';

export const Timer = () => {
  const [time, setTime] = useState(() => null);
  const [timerOn, setTimerOn] = useState(() => false);
  const intervalID = useRef(null);
  const isFirstRender = useRef(true);
  console.log('useRef');

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }
    setTimerOn(false);

    intervalID.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID.current); //  <React.StrictMode>
    };
  }, [timerOn]);

  const stopTimer = () => {
    clearInterval(intervalID.current);
    setTime(null);
  };

  const startTimer = () => {
    isFirstRender.current = false;
    setTimerOn(true);
    setTime(new Date());
  };

  return (
    <Section title="Timer">
      <div className={css.Timer}>
        <button type="button" onClick={startTimer}>
          Start
        </button>
        <button type="button" onClick={stopTimer}>
          Stop
        </button>
        {time && <span>{time.toLocaleTimeString()}</span>}
      </div>
    </Section>
  );
};
