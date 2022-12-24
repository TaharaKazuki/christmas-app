import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title text-light">🌟クリスマス恒例1年振り返り大クイズ！！🌟</h1>
      {children}
    </div>
  )
}

export default PageLayout
