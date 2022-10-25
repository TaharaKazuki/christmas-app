import React from 'react'
import Layout from './Layout'
import Questions from './Questions'

const Quiz = () => {
  const onNext = () => {}

  const onPrev = () => {}

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
