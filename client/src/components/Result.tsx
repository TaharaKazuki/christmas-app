import React from 'react'
import PageLayout from './common/PageLayout'
import ResultTable from './ResultTable'
import '../styles/Result.scss'
import { Link } from 'react-router-dom'

import { resetAllAction } from '../features/questionSlice'
import { resetResult } from '../features/resultSlice'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { attemptNum, earnPointNum, passFlagResult } from '../helper/pointHelper'

const Result = () => {
  const dispatch = useAppDispatch()
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useAppSelector((state) => state)

  const totalPoints = queue.length * 10
  const attempts = attemptNum(result)
  const earnPoints = earnPointNum(result, answers, 10)
  const flag = passFlagResult(totalPoints, earnPoints)

  const onReset = () => {
    dispatch(resetAllAction())
    dispatch(resetResult())
  }

  return (
    <PageLayout>
      <div className="result flex-center">
        <div className="flex">
          <span>お名前：</span>
          <span className="bold">Sample太郎</span>
        </div>
        <div className="flex">
          <span>問題総得点：</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>問題総数：</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>回答数：</span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>獲得得点</span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>最終結果</span>
          <span style={{ color: `${flag ? '#2aff95' : '#ff2a66'}` }} className="bold">
            {flag ? '合格' : '不合格'}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={'/'} onClick={onReset}>
          再挑戦
        </Link>
      </div>

      <div className="container">
        <ResultTable attempts={attempts} earnPoint={earnPoints} flag={flag} />
      </div>
    </PageLayout>
  )
}

export default Result
