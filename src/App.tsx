import { useState, lazy, Suspense } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from '/src/components/molecules/Header/Header.tsx';
import Home from '/src/components/pages/Home/Home.tsx';
import About from '/src/components/pages/About/About.tsx';
import NewSession from '/src/components/pages/NewSession/NewSession.tsx';
import VSRaceSession from '/src/components/pages/VSRaceSession/VSRaceSession.tsx';
import KnockoutTourSession from '/src/components/pages/KnockoutTourSession/KnockoutTourSession.tsx';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/newsession' element={<NewSession />} />
            <Route path='/newsession/vsrace' element={<VSRaceSession />} />
            <Route path='/newsession/knockouttour' element={<KnockoutTourSession />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
