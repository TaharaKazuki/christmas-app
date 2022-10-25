import React, { useState } from 'react'

const Questions = () => {
  const [checked, setChecked] = useState<boolean | undefined>(undefined)

  const onSelect = () => {}

  return (
    <div className="questions">
      <h2 className="text-light">問題1</h2>
      <ul>
        <li>
          <input type="radio" value={1} id="q1-option" name="options" onChange={onSelect} />
          <label className="text-primary" htmlFor="q1-option">
            <div className="check checked" />
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Questions
