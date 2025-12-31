import './App.css'

import AddChallenges from './components/AddChallenges'
import Auth from './components/Auth'
import LeaderBoard from './components/LeaderBoard'
import Challenges from './components/Challenges'
import Challenge from './components/Challenge'
import Splash from './components/Splash'
import Rules from './components/Rules'
import Rtag from './components/Rtag'
import Rtags from './components/Rtags'

function App() {
    function handleClick() {
        alert("ALive")
    }

  return (
    <div>
      <Splash onClick={handleClick} />
      <AddChallenges />
      <Auth />
      <LeaderBoard />
      <Challenges />
      <Challenge />
      <Rules />
      <Rtag />
      <Rtags />
    </div>
  )
}

export default App
