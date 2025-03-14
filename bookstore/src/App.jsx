import './App.css'
import CardsList from './components/CardsList.jsx'
import Backet from './components/Backet.jsx'

function App() {
  return (
    < div className='container'>
      <h1 className='title'>Добро пожаловать в наш книжный магазин!</h1>
      <Backet />
      <CardsList />
    </div>
  )
}

export default App
