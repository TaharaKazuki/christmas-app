import React from 'react'

import PageLayout from './common/PageLayout'
import Questions from './Questions'

const Quiz = () => {
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
