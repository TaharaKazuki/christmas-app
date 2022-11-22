import { useEffect } from 'react'
import { useAppSelector } from '../app/hook'

import PageLayout from './common/PageLayout'
import Questions from './Questions'

const Quiz = () => {
  const state = useAppSelector((state) => state)

  useEffect(() => {
    // console.log(state)
  }, [state])

  const onNext = () => {
    console.info('onNext')
  }

  const onPrev = () => {
    console.info('onPrev')
  }

  return (
    <PageLayout>
      <Questions />
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
