import React from 'react'

const HabitList = ({ habits, deleteHabit }) => {
  return (
    <section className="habits">
      <h2>This are the lists of habits that you want develop</h2>
      <ul>
        {habits.length > 0 ? (
            habits.map(habit => (
              <li key={habit.id} className="habit">
                {habit.title}
                <span
                  className="habit--remove"
                  role="img"
                  aria-label="cross emoji"
                  onClick={(e) => deleteHabit(habit.id) }
                >
                  ❌
                </span>
              </li>
            ))
          ) : (
            <li className="habit">
              <strong>You need add habits</strong>
            </li>
          )
        }
      </ul>

      <style jsx>{`
        .habits {
          margin-top: 1.5rem;
          text-align: center;
        }

        .habits ul {
          margin: 0;
          padding-left: 0;
        }

        .habit {
          margin-top: 1rem;
          display: block;
        }

        .habit--remove {
          cursor: pointer;
        }
      `}</style>
    </section>
  )
}

export default HabitList
