import React from 'react'
import { useMyHook } from 'use-scroll-into-view'

const App = () => {
  const example = useMyHook()
  return <div>{example}</div>
}
export default App
