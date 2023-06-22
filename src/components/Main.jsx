import { useContext } from 'react';
import { Context } from './Context'

function Main() {
  const { darkmode } = useContext(Context);
  return (
    <section className={
      darkmode ? 'darkmode' : ''
    }>
      <h1>main</h1>
    </section>
  )
}

export default Main