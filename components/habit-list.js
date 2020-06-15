import React from 'react';

const HabitList = ({ habits, deleteHabit }) => {

  const changeStatus = (ev) => {
    const listOfClasses = ev.target.classList
    if (listOfClasses.contains('is--done')) {
      listOfClasses.replace('is--done', 'not--done')
    } else if (listOfClasses.contains('not--done')){
      listOfClasses.replace('not--done', 'is--done')
    } else {
      listOfClasses.add('is--done')
    }
  }

  return (
    <div style={{
      gridColumn: '1/33',
      margin: 0,
      padding: '1rem 0',
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }}
    >
      {habits.map(habit => (
        <li key={habit.id} className="habit">
          <span className="habit__title">
            {habit.title} {" "}
            <span
              className="habit--remove"
              role="img"
              aria-label="cross emoji"
              onClick={(e) => deleteHabit(habit.id) }
            >
              ❌
            </span>
          </span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>
          <span onClick={changeStatus} className="habit__day"></span>

          <style jsx>{`
            .habit__list{
              grid-column: 1/33;
              margin: 0;
              padding: 1rem 0;
              min-width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
            }

            .habit--remove {
              cursor: pointer;
            }

            .habit {
              min-height: 2rem;
              align-self: start;
              min-width: 100%;
              margin: 5px 0 0;
              display: grid;
              grid-template-columns: repeat(32, 1fr);
              grid-gap: 1em;
            }

            .habit__title {
              width: 15rem;
              grid-column: 1/2;
            }

            .habit__day {
              width: 2rem;
              height: 2rem;
              cursor: pointer;
              display: inline-block;
              background-color: white;
            }

            .habit__day.is--done {
              background-color: lightgreen;
            }
            .habit__day.not--done {
              background-color: red;
            }
          `}</style>

        </li>
      ))}
    </div>
  )
}

export default HabitList
