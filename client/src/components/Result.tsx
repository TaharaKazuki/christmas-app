import { useEffect } from 'react'
import '../styles/Result.scss'
import { Link } from 'react-router-dom'

import Layout from './Layout'
import ResultTable from './ResultTable'
import { useAppDispatch, useAppSelector } from '../redux/hook'

import { resetAllAction } from '../redux/reducers/question'
import { resetResultAction } from '../redux/reducers/result'

const Result = () => {
  const dispatch = useAppDispatch()

  const onRestart = () => {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <Layout>
      <div className="result flex-center">
        <div className="flex">
          <span>お名前</span>
          <span className="bold">サンプル太郎</span>
        </div>
        <div className="flex">
          <span>合計獲得ポイント</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>問題数</span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>正解数</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>獲得合計ポイント</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>クイズ結果</span>
          <span className="bold">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={'/'} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </Layout>
  )
}

export default Result
