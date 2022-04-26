import React from 'react';
import StaticDatePickerDemo from '../components/StaticDatePickerDemo';
import TimeDisplay from '../components/TimeDisplay';

const Home = () => (
    <div className="title">
        <h1>Gerênciamento</h1>
        <StaticDatePickerDemo/>
        <TimeDisplay />
        <p>Descrição do horário</p>
    </div>
);

export default Home;