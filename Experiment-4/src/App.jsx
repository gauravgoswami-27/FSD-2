import './App.css'
import LocalStateCounter from './components/CounterLocalState'
import CounterContextParent from './components/CounterGlobalContextParent';
import CounterContextProvider from './components/context/CounterGlobalContextAPI';
import { CounterReducer } from './store/CounterReducer'
// import CounterReduxParent from './components/CounterGlobalReduxParent';
import CounterReduxParent from './components/CounterGlobalReduxParent';
// import CounterReducer from './store/CounterReducer';

function App() {

  return (
    <>
      <LocalStateCounter cno="Component A" />
      <LocalStateCounter cno="Component B" />
      <CounterContextProvider>
        <CounterContextParent cno="Component C" />
        <CounterContextParent cno="Component D" />
      </CounterContextProvider>
      <CounterReduxParent cno="Component E" />
      <CounterReduxParent cno="Component F" />



    </>
  )
}

export default App
