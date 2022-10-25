import React from 'react'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title text-light">クリスマスクイズ in 2022</h1>
      {children}
    </div>
  )
}

export default Layout
