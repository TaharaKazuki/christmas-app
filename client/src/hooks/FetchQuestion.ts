import { useEffect, useState } from 'react'

import { useAppDispatch } from '../app/hook'
import data, { answers } from '../database/data'

import { startExamAction, moveNextAction, movePrevAction } from '../features/questionSlice'
import type { apiDataType } from '../features/questionSlice'
import { AppDispatch } from '../app/store'

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
          dispatch(startExamAction({ queue: question, answers }))
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

export const MoveNextQuestion = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(moveNextAction())
  } catch (error) {
    console.info(error)
  }
}

export const MovePrevQuestion = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movePrevAction())
  } catch (error) {
    console.info(error)
  }
}
