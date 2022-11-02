import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hook'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

type Props = {
  onChecked: (i: number) => void
}

const Questions: FC<Props> = ({ onChecked }) => {
  const [checked, setChecked] = useState<number | undefined>(undefined)
  const { trace } = useAppSelector((state) => state.questions)
  const result = useAppSelector((state) => state.result.result)
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()

  const questions = useAppSelector((state) => state.questions.queue[state.questions.trace])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(updateResult({ trace, checked }))
  }, [checked, dispatch, trace])

  const onSelect = (i: number) => {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({ trace, checked }))
  }

  if (isLoading) return <h3 className="text-light">Loading</h3>
  if (serverError) return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={'false'}
              id={`q${i}-option`}
              name="options"
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check${result[trace] === i ? 'checked' : ''}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questions
