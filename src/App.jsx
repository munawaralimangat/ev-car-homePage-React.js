import React, { useState } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'


const App = () => {
  let heroData = [
    {text1:"Dive in to",text2:"what you love"},
    {text1:"Indulge your",text2:"passions"},
    {text1:"Give in to",text2:"your passions"}
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App;
