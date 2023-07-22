import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Selection from './comps/selection';

function App() {
  const theme = 'light'

  const [timeSelect, setTimeSelect] = useState('ALL')
  const tabs = ['1H', '6H', '24H', '7D', '30D', 'ALL']
  var today = new Date()
  const [time, setTime] = useState(today.toString())
  const handleTimeSelect = (e) => {
    var this_time = parseInt(new Date(Date.now()).getTime())
    var yesterday = parseInt(new Date(Date.now()).getTime() - (24 * 60 * 60 * 1000));
    var today = new Date()
    var last_week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var last_hour = new Date(this_time - (1000 * 60 * 60));
    var last_six_hours = new Date(this_time - (6 * 1000 * 60 * 60));
    var last_month = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
    var last_day = new Date(today.getTime() - (24 * 60 * 60 * 1000));
    // for testing if the timestamps are correct ===>

    // var difference = Math.abs(this_time - last_six_hours) / 1000
    // var days = Math.floor(difference / 86400);
    // var hours = Math.floor(difference / 3600) % 24;
    // console.log('day difference', days)
    // console.log('hour difference', hours)

    e.preventDefault()
    console.log(e.target.id)
    setTimeSelect(e.target.id)
    var from;
    var to;
    // var this_time;
    if (e.target.id == '1H') {
      from = last_hour / 1000;
      to = this_time / 1000;
      setTime(last_hour)
    } else if (e.target.id == '6H') {
      from = last_six_hours / 1000;
      to = this_time / 1000;
      setTime(last_six_hours)
    } else if (e.target.id == '24H') {
      from = yesterday / 1000;
      to = this_time / 1000;
      setTime(last_day)
    } else if (e.target.id == '7D') {
      from = last_week / 1000;
      to = this_time / 1000;
      setTime(last_week)
    } else if (e.target.id == '30D') {
      from = last_month / 1000;
      to = this_time / 1000;
      setTime(last_month)
    } else {
      to = this_time / 1000;
      from = undefined;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{time.toString()}</p>
        <Selection id={'home-page'} width={'200px'} theme={theme} tabs={tabs} handleSelect={handleTimeSelect} selectValue={timeSelect} />
      </header>
    </div>
  );
}

export default App;
