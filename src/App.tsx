import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Dashboard'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  return (
    <>
    <GlobalStyles />
      <DefaultLayout> 
        {<Dashboard/>}
      </DefaultLayout>
      
    </>
  )
}

export default App
