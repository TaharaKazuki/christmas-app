import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { FC } from 'react'
import '../styles/Main.scss'
import Layout from './Layout'

type Props = {}

const Main: FC<Props> = () => {
  const inputRef = useRef(null)

  return (
    <Layout>
      <ol>
        <li>これから20問のクイズが出題されます。</li>
        <li>正解の場合は5ポイント獲得できます。</li>
        <li>各問題には4つの選択肢があります。その中から1つ選んでください。</li>
        <li>選んだ答えをあとから選び直すことも可能です。</li>
        <li>結果は最後に発表されます。</li>
        <li>全問正解（100ポイント）時には素敵なプレゼントをご用意しております！</li>
      </ol>
      <form className="form">
        <input
          ref={inputRef}
          className="userId"
          type="text"
          placeholder="お名前を入力してください"
        />
      </form>
      <div className="start">
        <Link className="btn" to={'quiz'}>
          スタート
        </Link>
      </div>
    </Layout>
  )
}

export default Main
