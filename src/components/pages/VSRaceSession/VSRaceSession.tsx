import { useState } from 'react'



function VSRaceSession() {
  const [raceCount, setRaceCount] = useState(0)
  const [raceResultsFromThisSession, setRaceResultsFromThisSession] = useState<RaceResult[]>();

  return (
    <>
        <div className="card">
          What place did you get?
          <input type='text'></input>
        </div>
        <div className="card">
          How many racers were there?
          <input type='text'></input>
        </div>
        <div>
            <button>Submit & Continue session</button>
            <button>Submit & Finish Session</button>
            <button>Dont Submit, & Finish Session</button>
        </div>
    </>
  )
}

class RaceResult {
  // Properties with type annotations
  public placement: number;
  public totalRacers: number;

  // Constructor to initialize properties when a new object is created
  public constructor(placement: number, totalRacers: number) {
    this.placement = placement;
    this.totalRacers = totalRacers;
  }

  public GetPercentile(): number {
    return this.placement / this.totalRacers
  }
}

export default VSRaceSession
