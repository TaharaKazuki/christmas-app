import { useEffect, useState } from 'react'

import { useAppDispatch } from '../app/hook'
import data from '../database/data'

import { startExamAction } from '../features/questionSlice'
import type { apiDataType } from '../features/questionSlice'

export type getDataType = {
  isLoading: boolean
  apiData: apiDataType
  serverError: string | null
}

export const useFetchQuestion = () => {
  const dispatch = useAppDispatch()

  const [getData, setGetData] = useState<getDataType>({
    isLoading: false,
    apiData: [],
    serverError: null,
  })

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }))

    const fetcherStart = async () => {
      try {
        let question = await data

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false, apiData: question }))
          dispatch(startExamAction(question))
        } else {
          throw new Error('No Question Available')
        }
      } catch (error: any) {
        setGetData((prev) => ({ ...prev, isLoading: false, serverError: error }))
      }
    }
    fetcherStart()
  }, [dispatch])

  return [getData, setGetData] as const
}

export const MoveNextQuestion = () => async(dispatch) => {
  try{
    dispatch()
  }
}
