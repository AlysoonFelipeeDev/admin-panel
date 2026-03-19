import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { GlobalStyles } from './styles/GlobalStyles'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route element={<DefaultLayout/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
