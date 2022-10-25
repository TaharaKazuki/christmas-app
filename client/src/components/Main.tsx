import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { FC } from 'react'
import '../styles/Main.scss'

type Props = {}

const Main: FC<Props> = () => {
  const inputRef = useRef(null)

  return (
    <div className="container">
      <h1 className="title text-light">クリスマスクイズ</h1>
      <ol>
        <li>これから20問のクイズが出題されます。</li>
        <li>正解の場合は5ポイント獲得できます。</li>
        <li>各問題には4つの選択肢があるので、その中から1つ選んでください。</li>
        <li>答えはあとから選び直すことも可能です。</li>
        <li>結果は最後に発表されます。</li>
        <li>全問正解者には素敵なプレゼントをご用意しております!</li>
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
    </div>
  )
}

export default Main
