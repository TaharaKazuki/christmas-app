import { FC, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hook'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateAnswer } from '../hooks/SetResult'

type Props = {
  onChecked: (checked: number) => void
}

const Questions: FC<Props> = ({ onChecked }) => {
  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState<number | undefined>(undefined)
  const { trace } = useAppSelector((state) => state.questions)
  const result = useAppSelector((state) => state.result.result)
  const [{ isLoading, serverError }] = useFetchQuestion()

  const questions = useAppSelector((state) => state.questions.queue[state.questions.trace])

  useEffect(() => {
    dispatch(updateAnswer({ trace, checked: checked! }))
  }, [checked, dispatch, trace])

  const onSelect = (i: number) => {
    onChecked(i)
    setChecked(i)
    dispatch(updateAnswer({ trace, checked: checked! }))
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>
  if (serverError) return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>

  return (
    <>
      {questions && (
        <div className="questions">
          <h2 className="text-light">
            <div>第{questions.id}問</div> {questions.question}
          </h2>
          <ul key={questions.id}>
            {questions.options.map((q, i) => (
              <li key={i}>
                <input
                  type="radio"
                  value={checked}
                  name="options"
                  id={`q${i}-option`}
                  onChange={() => onSelect(i)}
                />
                <label className="text-primary" htmlFor={`q${i}-option`}>
                  {q}
                </label>
                <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Questions
