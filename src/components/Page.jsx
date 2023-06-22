import { useContext } from 'react'
import Header from './Header'
import Main from './Main'
import { Context } from './Context'

function Page() {
  const { darkmode, setDarkmode } = useContext(Context);
  return (
    <div className={darkmode ? 'App darkmode' : 'App'}>
      <Header />
      <Main />
    </div>
  )
}

export default Page