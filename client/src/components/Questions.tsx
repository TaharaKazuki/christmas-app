import React, { useState, useEffect } from 'react'
import { data } from '../database/data'

const Questions = () => {
  const [checked, setChecked] = useState<boolean | undefined>(undefined)

  const question = data[0]

  useEffect(() => {
    console.info(question)
  })

  const onSelect = () => {}

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={'false'}
              id={`q${i}-option`}
              name="options"
              onChange={onSelect}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              <div className="check" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questions
