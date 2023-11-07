import Page1 from './Component/Page1'
import Page2 from './Component/Page2'
import { BrowserRouter } from 'react-router-dom'
import { Routes , Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/second' element={<Page2/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
