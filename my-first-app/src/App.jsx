import React from 'react'
import CardContainer from './CardContainer'
import ClickEvent from './ClickEvent'
import UseStatePracticeOne from './IncDecCounter'
import UseStatePracticeTwo from './ShowOrHide'
import UseStatePracticeThree from './DelProfile'
import UseStatePracticeFour from './FormFill'
import UseStatePracticeFive from './ToDoList'
import UseEffectPracticeOne from './UseEffectPracticeOne'
import UseEffectPracticeTwo from './UseEffectPracticeTwo'
import UseEffectPracticeThree from './UseEffectPracticeThree'
import UseEffectPracticeFour from './UseEffectPracticeFour'
import UseContext from './UseContext'
import UseReducerExampleOne from './UseReducerExampleOne'
const App = () => {
  return (
    <>

    <UseStatePracticeOne />
    <UseStatePracticeTwo />
    <UseStatePracticeThree />
    <UseStatePracticeFour />
    <UseStatePracticeFive />

    <UseEffectPracticeOne/>
    <UseEffectPracticeTwo/>
    <UseEffectPracticeThree/>
    <UseEffectPracticeFour />
    <UseContext />
    <UseReducerExampleOne/>
    <ClickEvent />
    <CardContainer />
    </>
  )
}

export default App