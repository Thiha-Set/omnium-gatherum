import Header from './components/Header'
import MainBody from './components/MainBody'
import './index.css'

function App() {
  return (
    <main>
      <Header titleText={"Omnium-Gatherum"} logo="https://placehold.co/50x50"/>
      <MainBody bgImageUrl={"./public/bgMainPageBody.png"}/>
      
    </main>
  )
}


export default App
