import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Catalog } from './pages/Catalog'
import { About } from './pages/About'
import { Details } from './pages/Details'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:productId" element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App
