import React, { useState } from 'react'

const Questions = () => {
  const [checked, setChecked] = useState<string | undefined>(undefined)

  const onSelect = () => {
    setChecked('true')
  }

  return (
    <div className="questions">
      <h2 className="text-light">Simple Question1</h2>
      <ul>
        <li>
          <input type="radio" value={checked} name="options" id="q1-option" onChange={onSelect} />
        </li>
      </ul>
    </div>
  )
}

export default Questions
