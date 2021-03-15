import React, {useState} from 'react';
import style from './style.module.css';
import Button from "../Button/Button";

const Stopwatch = ()=>{
	const [count, setCount] = useState(0);

	return( <div>
		<div className={style.timer}>
			<div className={style.time}>{`${count}`}</div>
		{/*	<div className={style.time}>{`${state.min}`}</div>
			<div className={style.time}>{`${state.sec}`}</div>
			<div className={style.time}>{`${state.ms}`}</div>*/}
		</div>
		<div className={style.buttons}>
			<Button disabled={this.state.disabledStart} text={'start'} onClick={setCount(count+1)} />
		{/*	<Button text={'interval'} onClick={this.saveInterval.bind(this)} />
			<Button disabled={this.state.disabledWait} text={'wait'} onClick={this.wait.bind(this)} />
			<Button disabled={this.state.disabledStop} text={'stop'} onClick={this.stop.bind(this)} />
			<Button text={'reset'} onClick={this.reset.bind(this)} />*/}
		</div>
		{/*<div className={style.output}>{this.state.intervalData}</div>*/}
	</div>);
}

export default Stopwatch;














/*
import React, { Component } from "react";
// import React from "react";
import Button from "../Button/Button";
import { interval } from "rxjs";
import { map, take } from "rxjs/operators";
import style from "./style.module.css";

class Timer extends Component {
	state = {
		stream$: interval(1000),
		sec: 0,
		min: 0,
		hours: 0,
		disabledStart: false,
		disabledWait: false,
		disabledStop: false,
		disabledReset: false,
		intervals: [],
	};

	start(propsHours) {
		this.setState({ disabledStart: true });
		const sub = this.state.stream$
			.pipe(
				take(60),
				map((value) => value + 1)
			)
			.subscribe((res) => {
				this.setState({ sec: res < 10 ? "0" + res : res });
				if (this.state.sec === 60 && this.state.min < 60) {
					this.setState({ sec: 0, min: this.state.min + 1 });
					this.start();
				} else if (this.state.min === 60 && this.state.hours < 24) {
					this.setState({ sec: 0, min: 0, hours: this.state.hours + 1 });
				}
			});
		if (this.state.hours === 24 || propsHours === 24) {
			sub.unsubscribe();
			this.setState({
				disabledStart: false,
				hours: 0,
				min: 0,
				sec: 0,
			});
		}
	}
	reset() {
	}

	render() {
		return (
			<div>
				{/!*        <div className={style.timer}>
          <div className={style.time}>{`${this.state.hours}`}</div>
          <div className={style.time}>{`${this.state.min}`}</div>
          <div className={style.time}>{`${this.state.sec}`}</div>
        </div>
        <div className={style.buttons}>
          <Button
            disabled={this.state.disabledStart}
            text={"start"}
            onClick={this.start.bind(this)}
          />
          <Button text={"wait"} />
          <Button text={"stop"} />
          <Button text={"reset"} onClick={this.reset.bind(this)} />
        </div>*!/}
			</div>
		);
	}
}

export default Timer;
*/
