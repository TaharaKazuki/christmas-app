import type { FC, ReactNode } from 'react'
import Santa from './Santa'

type Props = {
  children: ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title text-light">🌟クリスマス恒例1年振り返り大クイズ！！🌟</h1>
      {children}
      <Santa />
    </div>
  )
}

export default PageLayout
