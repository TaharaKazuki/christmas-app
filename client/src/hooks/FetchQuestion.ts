import { useEffect, useState } from 'react'
import { useAppDispatch } from '../redux/hook'
import { data } from '../database/data'
import { DataType } from '../database/type'

import { startExamAction } from '../redux/reducers/question'

type State = {
  isLoading: boolean
  apiData: DataType
  serverError: string | null
}

export const useFetchQuestion = () => {
  const dispatch = useAppDispatch()

  const [getData, setGetData] = useState<State>({
    isLoading: false,
    apiData: [],
    serverError: null,
  })

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }))
    ;(async () => {
      try {
        let question = data
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false, apiData: question }))
          dispatch(startExamAction(question))
        } else {
          throw new Error('No Question Available')
        }
      } catch (error: any) {
        setGetData((prev) => ({ ...prev, isLoading: false, serverError: error }))
      }
    })()
  }, [dispatch])

  return [getData, setGetData] as const
}
