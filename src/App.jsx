
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/DaisyNav/NavBar/NavBar'
import PricingOptions from './components/DaisyNav/PricingOptions/PricingOptions'
import ResultsChart from './components/DaisyNav/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/DaisyNav/MarksChart/MarksChart'


const pricingPromise = fetch('pricingData.json')
     .then(res => res.json())

const marksPromise = axios.get('marksData.json')
function App() {

  return (
    <>
      
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>  
      </Suspense> 

      <ResultsChart></ResultsChart>
      
    </>
  )
}

export default App
