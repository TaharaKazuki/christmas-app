import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { useAppSelector } from '../redux/hook'
import { useFetchQuestion } from '../hooks/FetchQuestion'

type Props = {
  onChecked: (i: number) => void
}

const Questions: FC<Props> = ({ onChecked }) => {
  const [checked, setChecked] = useState<boolean | undefined>(undefined)
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()

  const questions = useAppSelector((state) => state.questions.queue[state.questions.trace])

  useEffect(() => {})

  const onSelect = (i: number) => {
    onChecked(i)
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
            <div className="check" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questions
