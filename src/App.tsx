import './App.css'
import Logo from './components/logo'
import { InitFirebase } from './firebase'

function App() {
  InitFirebase();

  return (
    <main>
      <Logo />
    </main>
  )
}

export default App
