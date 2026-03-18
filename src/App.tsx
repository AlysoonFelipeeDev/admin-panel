import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { GlobalStyles } from './styles/GlobalStyles'
import { Profile } from './pages/Profile'

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <DefaultLayout>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App
