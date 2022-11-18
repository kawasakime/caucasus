import React from "react";

const Timer = ({ endtime }) => {
  const deadline = new Date(endtime);
  const [time, setTime] = React.useState(getTimeRemaining(deadline));

  React.useEffect(() => {
    const initializeClock = setInterval(() => {
      setTime(getTimeRemaining(deadline));
    }, 1000);

    if (time.total <= 0) {
      clearInterval(initializeClock);
    }
  }, []); //eslint-disable-line

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function numberFormatting(number) {
    return number >= 10 ? number : `0${number}`;
  }

  return (
    <div className="timer">
      <div id="days">
        <h1>{time.days < 0 ? "00" : numberFormatting(time.days)}</h1>
        <p>Дней</p>
      </div>
      <div id="hours">
        <h1>{time.hours < 0 ? "00" : numberFormatting(time.hours)}</h1>
        <p>Часов</p>
      </div>
      <div id="minutes">
        <h1>{time.minutes < 0 ? "00" : numberFormatting(time.minutes)}</h1>
        <p>Минут</p>
      </div>
      <div id="seconds">
        <h1>{time.seconds < 0 ? "00" : numberFormatting(time.seconds)}</h1>
        <p>Секунд</p>
      </div>
    </div>
  );
};

export default Timer;
