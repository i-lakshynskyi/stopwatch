import React from 'react';
import style from './style.module.css';

let Button = (props) => {
	return (<div className={style.button}>
			{props.status === 0 ? <button onClick={props.start}>Start</button> : ''}

			{props.status === 1 ? (<div>
					<button onClick={props.reset}>Stop</button>
					<button className={style.wait} onDoubleClick={props.stop} hint={'DoubleClick'}>
						Wait
					</button>
					<button onClick={props.saveInterval}>Interval</button>
					<button onClick={props.reset}>Reset</button>
				</div>) : ('')}

			{props.status === 2 ? (<div>
					<button onClick={props.resume}>Resume</button>
					<button onClick={props.reset}>Reset</button>
					<button onClick={props.saveInterval}>Interval</button>
				</div>) : ('')}
		</div>);
};

export default Button;
