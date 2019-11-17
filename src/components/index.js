import React from 'react'
import HeaderBar from './HeaderBar'
import BodyList from './BodyList'

const MainPage = () => {
  return (
    <main>
      {/* <HeaderBar /> */}
      <div style={{ diplay: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%', height: 50, backgroundColor: 'blue' }}>
        <h3 style={{ color: 'white' }}>BlindBook</h3>
      </div>
      <BodyList />
    </main>
  )
}

export default MainPage
