import React from 'react'
import PageLayout from './common/PageLayout'
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

  const totalPoints = queue.length * 4
  const attempts = attemptNum(result)
  const earnPoints = earnPointNum(result, answers, 4)
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
          <span className="bold">{userId}さん</span>
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
          <span style={{ color: `${flag ? '#ffffff' : '#ffffff'}` }} className="bold">
            {flag
              ? 'おめでとうございます！！見事クリアです！！'
              : 'く、、クリア、、、と言っていいでしょう。。ぅぅ'}
          </span>
        </div>
      </div>
      <div>
        <p className="info">
          今年も残すところ僅かとなりましたがこうやって楽しいクリスマスを迎えられることを大変嬉しく思っています。
          れなと一緒だから毎日がとても充実してあっという間の1年でした！
          <br />
          二人で迎えられるクリスマスはひとまず最後になりますが
          来年は待望の👶が爆誕ッ！！となり一層賑やかな家族になっていくことを楽しみにしています！
          大変なこともあるとは思いますが思い遣りながらともに助け合って幸せな毎日にしていきたいと思います！
          今年もありがとう！！
        </p>
      </div>

      <div className="start">
        <Link className="btn" to={'/'} onClick={onReset}>
          再挑戦する
        </Link>
      </div>
    </PageLayout>
  )
}

export default Result
