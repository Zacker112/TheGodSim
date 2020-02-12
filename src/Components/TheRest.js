import React, { Component } from 'react'
import Intro from './Intro'
import Home from './Home'
import Team from './Team'
import Schedule from './Schedule'
import Results from './Results'
import Decisions from './Decisions'
import News from './News'
import Reading from './Reading'
import Forum from './Forum'

class TheRest extends Component {


    render() {
        return (
           <div>
            <Intro />
            <Home />
            <Team />
            <Schedule />
            <Results />
            <Decisions />
            <News />
            <Reading />
            <Forum />
            </div>
        )
    }
}

export default TheRest
