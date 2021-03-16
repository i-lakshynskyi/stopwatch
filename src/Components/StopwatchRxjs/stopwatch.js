import React, { useState } from 'react';
import { interval } from 'rxjs';
import style from './style.module.css';
import Button from '../Button/Button';

const Stopwatch = () => {
   const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
   const [stream$, setStream] = useState({});
   const [intervalData, setIntervalData] = useState([]);
   const [status, setStatus] = useState(0);

   const start = () => {
      countDataTime();
      setStatus(1);
      let stream$ = interval(10).subscribe((tic) => {
         countDataTime();
      });
      setStream(stream$);
   };

   let milliseconds = time.ms,
      sec = time.s,
      min = time.m,
      hours = time.h;

   const countDataTime = () => {
      milliseconds++;
      if (min === 60) {
         hours++;
         min = 0;
      }
      if (sec === 60) {
         min++;
         sec = 0;
      }
      if (milliseconds === 100) {
         sec++;
         milliseconds = 0;
      }

      return setTime({ ms: milliseconds, s: sec, m: min, h: hours });
   };

   const stop = () => {
      stream$.unsubscribe();
      setStatus(2);
   };

   const reset = () => {
      stream$.unsubscribe();
      setStatus(0);
      setTime({ ms: 0, s: 0, m: 0, h: 0 });
      setIntervalData([]);
   };

   const saveInterval = () => {
      let interval = `${time.h >= 10 ? time.h : '0' + time.h} : 
      ${time.m >= 10 ? time.m : '0' + time.m} : 
      ${time.s >= 10 ? time.s : '0' + time.s} : 
      ${time.ms >= 10 ? time.ms : '0' + time.ms}`;
      let arrIntervalsInDiv = [...intervalData, interval];
      setIntervalData(arrIntervalsInDiv);
   };
   let outputData = intervalData
      .map((item, index) => (
         <div className={style.resInterval} key={index}>
            {item}
         </div>
      ))
      .reverse();

   const resume = () => start();

   return (
      <div>
         <div className={style.timer}>
            <div>
               <div className={style.time}>{time.h >= 10 ? time.h : '0' + time.h}</div>
               <div className={style.time}>{time.m >= 10 ? time.m : '0' + time.m}</div>
               <div className={style.time}>{time.s >= 10 ? time.s : '0' + time.s}</div>
               <div className={style.time}>{time.ms >= 10 ? time.ms : '0' + time.ms}</div>
            </div>
         </div>
         <div className={style.buttons}>
            <Button status={status} resume={resume} reset={reset} stop={stop} start={start} saveInterval={saveInterval} />
         </div>
         <div className={style.output}>{outputData}</div>
      </div>
   );
};

export default Stopwatch;
