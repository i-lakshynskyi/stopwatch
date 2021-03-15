import React, { useState } from 'react';
import { interval } from 'rxjs';
import style from './style.module.css';
import Button from '../Button/Button';
import { take } from 'rxjs/operators';

const Stopwatch = () => {
   const [timerHours, setTimerHours] = useState('00');
   const [timerMin, setTimerMin] = useState('00');
   const [timerSec, setTimerSec] = useState('00');
   const [timerMs, setTimerMs] = useState('00');
   const [isPaused, setIsPaused] = useState(false);
   const [timerId, setTimerId] = useState(0);
   const [intervalData, setIntervalData] = useState([]);
   const [disabledStart, setDisabledStart] = useState(false);
   const [disabledStop, setDisabledStop] = useState(true);
   const [disabledReset, setDisabledReset] = useState(true);
   const [disabledWait, setDisabledWait] = useState(true);

   const startStopwatch = () => {
      setTimerHours('00');
      setTimerMin('00');
      setTimerSec('00');
      setTimerMs('00');
      setIsPaused(false);
      setDisabledStart(true);
      setDisabledStop(false);
      // setDisabledWait(false);

      let countMs = 0;
      let countSec = 0;
      let countMin = 0;
      let countHours = 0;

      let stream$ = interval(10)
         // .pipe(take(100))
         .subscribe((tick) => {
            if (!isPaused) {
               countMs++;
               setTimerMs(countMs < 10 ? '0' + countMs : countMs);
               if (countMs === 100) {
                  countMs = 0;
                  setTimerMs(countMs);
                  countSec++;
                  setTimerSec(countSec < 10 ? '0' + countSec : countSec);
               }
               if (countSec === 60) {
                  countSec = 0;
                  setTimerSec(countSec);
                  countMin++;
                  setTimerMin(countMin < 10 ? '0' + countMin : countMin);
               }
               if (countMin === 60) {
                  countMin = 0;
                  setTimerMin(countMin);
                  countHours++;
                  setTimerHours(countHours < 10 ? '0' + countHours : countHours);
               }
            }
         });
      setTimerId(stream$);
   };
   const saveInterval = () => {
      let interval = `${timerHours} : ${timerMin} : ${timerSec} : ${timerMs}`;
      let arrIntervalsInDiv = [...intervalData, interval].map((item, index) => (
         <div className={style.resInterval} key={index}>
            {item}
         </div>
      ));
      setIntervalData(arrIntervalsInDiv);
      setDisabledReset(false);
   };
   const wait = () => {
      // setIsPaused(true);
      setDisabledStart(false);
      console.log(isPaused);
   };
   const stop = () => {
      timerId.unsubscribe();
      setDisabledStart(false);
      setDisabledReset(false);
      setDisabledStop(true);
   };
   const reset = () => {
      timerId.unsubscribe();
      setTimerHours('00');
      setTimerMin('00');
      setTimerSec('00');
      setTimerMs('00');
      setIsPaused(false);
      setIntervalData([]);
      setDisabledReset(true);
      setDisabledStart(false);
   };

   return (
      <div>
         <div className={style.timer}>
            <div className={style.time}>{timerHours}</div>
            <div className={style.time}>{timerMin}</div>
            <div className={style.time}>{timerSec}</div>
            <div className={style.time}>{timerMs}</div>
         </div>
         <div className={style.buttons}>
            <Button disabled={disabledStart} text={'start'} onClick={() => startStopwatch()} />
            <Button text={'interval'} onClick={() => saveInterval()} />
            <Button disabled={disabledWait} text={'wait'} onClick={() => wait()} />
            <Button disabled={disabledStop} text={'stop'} onClick={() => stop()} />
            <Button disabled={disabledReset} text={'reset'} onClick={() => reset()} />
         </div>
         <div className={style.output}>{intervalData}</div>
      </div>
   );
};

export default Stopwatch;
