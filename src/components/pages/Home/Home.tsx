import { useState } from 'react'
import '/src/App.css'
import {
  Router,
  Routes,
  Link
} from "react-router-dom";

function Home() {
  const [raceCount, setRaceCount] = useState(0)

  return (
    <>
        <div className="card">
          Welcome to Kart Stats. Track your kart racing performance and keep getting better.
        </div>
    </>
  )
}

export default Home
