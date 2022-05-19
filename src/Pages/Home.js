import React from 'react'
import Birds from '../Components/Birds'
import Collection from '../Components/Collection'
import Header from '../Components/Header'
import Highrise from '../Components/Highrise'
import Nesting from '../Components/Nesting'
import Roadmap from '../Components/Roadmap'

function Home() {
  return (
    <>
        <Header/>
        <Birds/>
        <Collection/>
        <Nesting/>
        <Highrise/>
        <Roadmap />
    </>
  )
}

export default Home