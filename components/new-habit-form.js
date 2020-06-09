import React, { useState } from 'react';

const HabitForm = ({addHabit}) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addHabit(inputValue)
    setInputValue('')
  }

  const discardHabit = (e) => {
    e.preventDefault()
    setInputValue("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="habit">Habit: {" "}
        <input
          id="habit"
          type="text"
          value={inputValue}
          placeholder="enter your habit to develop"
          onChange={ e => setInputValue(e.target.value) }
        />
      </label>
      <br/>
      <button type="submit">
        <span role="img" aria-label="plus emoji">➕</span> Add
      </button>
      <button typle="submit" onClick={discardHabit}>
        <span role="img" aria-label="cross emoji">❌</span> Discard
      </button>
    </form>
  )
}

export default HabitForm
