import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      {children}
    </div>
  )
}

export default PageLayout
