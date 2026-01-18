import { useState } from 'react'

function NewSession() {
  return (
    <>
        <div className="card">
          What kind of race are you doing?
          <div>
            <a href='/newsession/vsrace'>VS Race</a>
          </div>
          <div>
            <a href='/newsession/knockouttour'>Knockout Tour</a>
          </div>
        </div>
    </>
  )
}



export default NewSession
