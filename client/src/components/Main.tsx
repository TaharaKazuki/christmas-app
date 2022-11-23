import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { setUserId } from '../features/resultSlice'

import PageLayout from './common/PageLayout'

import '../styles/Main.scss'
import { useAppDispatch } from '../app/hook'

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current.value))
    }
  }

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
        <input
          ref={inputRef}
          type="text"
          className="userId"
          placeholder="お名前を入力してください"
        />
      </form>

      <div className="start">
        <Link className="btn" to={'quiz'} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </PageLayout>
  )
}

export default Main
