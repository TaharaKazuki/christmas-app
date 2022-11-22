import '../styles/App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>H</div>,
  },
  {
    path: '/quiz',
    element: <div>H</div>,
  },
  {
    path: '/result',
    element: <div>H</div>,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
