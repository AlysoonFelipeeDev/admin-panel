import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  return (
    <>
    <GlobalStyles />
      <DefaultLayout> 
        {<Dashboard/>}
        <Users/>
      </DefaultLayout>
      
    </>
  )
}

export default App
