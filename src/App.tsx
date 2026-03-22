import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { GlobalStyles } from './styles/GlobalStyles'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'
import { Register } from './pages/Register'
import { PrivateRoute } from './components/PrivateRoute'

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route element={<PrivateRoute/>}>
              <Route element={<DefaultLayout/>}>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/profile' element={<Profile/>} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
