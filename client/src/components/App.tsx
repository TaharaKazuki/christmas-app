import '../styles/App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CheckUserExist } from '../helper/checkUserExist'

import Main from './Main'
import Quiz from './Quiz'
import Result from './Result'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quiz',
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: '/result',
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
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
