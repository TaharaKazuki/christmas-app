import type { ReactNode } from 'react'
import { Navigate } from 'react-router'
import { useAppSelector } from '../app/hook'

type Props = {
  children: ReactNode
}

export const CheckUserExist = ({ children }: Props) => {
  const auth = useAppSelector((state) => state.result.userId)
  return auth ? <>{children}</> : <Navigate to={'/'} replace={true}></Navigate>
}
