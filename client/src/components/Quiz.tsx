import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hook'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/SetResult'

import PageLayout from './common/PageLayout'
import Questions from './Questions'

const Quiz = () => {
  const [checked, setChecked] = useState<number | undefined>(undefined)

  const { queue, trace } = useAppSelector((state) => state.questions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(trace)
  }, [trace])

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion())
      dispatch(PushAnswer(checked!))
    }
  }

  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }

  const onChecked = (checked: number) => setChecked(checked)

  return (
    <PageLayout>
      <Questions onChecked={onChecked} />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          前へ
        </button>
        <button className="btn next" onClick={onNext}>
          次へ
        </button>
      </div>
    </PageLayout>
  )
}

export default Quiz
