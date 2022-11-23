import React from 'react'
import PageLayout from './common/PageLayout'
import ResultTable from './ResultTable'
import '../styles/Result.scss'
import { Link } from 'react-router-dom'

import { resetAllAction } from '../features/questionSlice'
import { resetResult } from '../features/resultSlice'
import { useAppDispatch } from '../app/hook'

const Result = () => {
  const dispatch = useAppDispatch()

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
          <span>問題総数：</span>
          <span className="bold">5</span>
        </div>
        <div className="flex">
          <span>回答数：</span>
          <span className="bold">3</span>
        </div>
        <div className="flex">
          <span>獲得得点</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>最終結果</span>
          <span className="bold">合格</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={'/'} onClick={onReset}>
          再挑戦
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </PageLayout>
  )
}

export default Result
