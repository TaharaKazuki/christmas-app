import React, { useEffect } from 'react'
import Layout from './Layout'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'

import { useAppSelector, useAppDispatch } from '../redux/hook'

const Quiz = () => {
  const dispatch = useAppDispatch()
  const { queue, trace } = useAppSelector((state) => state.questions)

  useEffect(() => {
    console.info(trace)
  })

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion())
      dispatch(PushAnswer(1))
    }
  }

  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }

  return (
    <Layout>
      <Questions />
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
