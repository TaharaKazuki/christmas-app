import React, { useEffect } from 'react'
import Layout from './Layout'
import Questions from './Questions'

import { useAppSelector } from '../redux/hook'

const Quiz = () => {
  const state = useAppSelector((state) => state)

  useEffect(() => {
    console.info(state)
  })

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
