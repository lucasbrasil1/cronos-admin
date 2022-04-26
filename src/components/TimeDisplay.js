import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const zeroToSix = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
];

const sixToHalf = [
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
];

const halfToSix = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30'
];

const sixToEnd = [
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30'
];

export default function ToggleButtons() {
  const [selectedTime, setTime] = React.useState('09:00');

  const handleTime = (event, newTime) => {
    setTime(newTime);
  };

  return (<>
      <ToggleButtonGroup value={selectedTime}
      exclusive
      onChange={handleTime}
      aria-label="selected-time"
    >  
        { zeroToSix.map((time) => <ToggleButton value={time} aria-label={time}> { time } </ToggleButton>) }
    </ToggleButtonGroup>
    <ToggleButtonGroup value={selectedTime}
    exclusive
    onChange={handleTime}
    aria-label="selected-time"
  >  
      { sixToHalf.map((time) => <ToggleButton value={time} aria-label={time}> { time } </ToggleButton>) }
  </ToggleButtonGroup>
  <ToggleButtonGroup value={selectedTime}
  exclusive
  onChange={handleTime}
  aria-label="selected-time"
>  
    { halfToSix.map((time) => <ToggleButton value={time} aria-label={time}> { time } </ToggleButton>) }
</ToggleButtonGroup>
<ToggleButtonGroup value={selectedTime}
      exclusive
      onChange={handleTime}
      aria-label="selected-time"
    >  
        { sixToEnd.map((time) => <ToggleButton value={time} aria-label={time}> { time } </ToggleButton>) }
    </ToggleButtonGroup>

  </>
  )}