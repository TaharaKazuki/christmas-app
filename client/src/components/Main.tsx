import { useRef } from 'react'
import { Link } from 'react-router-dom'

import PageLayout from './common/PageLayout'

import '../styles/Main.scss'

const Main = () => {
  const inputRef = useRef(null)

  return (
    <PageLayout>
      <ol>
        <li>サンプル文章</li>
        <li>サンプル文章</li>
        <li>サンプル文章</li>
        <li>サンプル文章</li>
        <li>サンプル文章</li>
      </ol>

      <form className="form">
        <input ref={inputRef} type="text" className="userId" placeholder="Username" />
      </form>

      <div className="start">
        <Link className="btn" to={'quiz'}>
          Start Quiz
        </Link>
      </div>
    </PageLayout>
  )
}

export default Main
