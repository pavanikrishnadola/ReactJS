import React, {useState, useEffect} from 'react';
function Timer() {

const [time, setTime]= useState(0);
useEffect (() => {
const interval = setInterval(() => {
setTime(t => t + 1);
}, 1000);
return () => clearInterval (interval); }, []);
return <h3>Time: {time}</h3>;
}
export default Timer;
