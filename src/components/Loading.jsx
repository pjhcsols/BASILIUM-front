import React from 'react'
import { 
    PacmanLoader
  } from 'react-spinners'

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#212529",
      }}
    >
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <PacmanLoader 
                color="#D9D9D9"
                loading
                speedMultiplier={2}
            />
            <h3>Loading...</h3>
        </div>
    </div>
  )
}

export default Loading