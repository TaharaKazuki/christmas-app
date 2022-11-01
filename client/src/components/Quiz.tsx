import { useEffect, useState } from 'react'
import Layout from './Layout'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { pushAnswer } from '../hooks/setResult'

import { useAppSelector, useAppDispatch } from '../redux/hook'
import { Navigate } from 'react-router-dom'

const Quiz = () => {
  const [check, setChecked] = useState<number | undefined>(undefined)

  const result = useAppSelector((state) => state.result.result)
  const { queue, trace } = useAppSelector((state) => state.questions)

  const dispatch = useAppDispatch()

  useEffect(() => {
    // console.info(result)
  })

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion())

      if (result.length <= trace) {
        dispatch(pushAnswer(check))
      }
    }
  }

  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }

  const onChecked = (check: number) => {
    setChecked(check)
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace={true} />
  }

  return (
    <Layout>
      <Questions onChecked={onChecked} />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </Layout>
  )
}

export default Quiz
