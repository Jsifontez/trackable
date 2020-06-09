import { useState } from 'react'
import Head from 'next/head'
import {v4 as uuidv4 } from 'uuid'
import Habits from '../components/habit-list'

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [habits, setHabits] = useState([])

  const addHabit = (e) => {
    e.preventDefault()

    inputValue === "" ? null : setHabits([...habits, { title: e.target[0].value, id: uuidv4() }])

    setInputValue("")
  }

  const discardHabit = (e) => {
    e.preventDefault()
    setInputValue("")
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  return (
    <div className="container">
      <Head>
        <title>Trackable App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Trackable App
        </h1>

        <p className="description">
          Lets start to add daily habits
        </p>

        <div className="grid">
          <form onSubmit={addHabit}>
            <label htmlFor="habit">Habit: {" "}
              <input
                id="habit"
                type="text"
                value={inputValue}
                placeholder="enter your habit to develop"
                onChange={handleInputChange}
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
          <Habits habits={habits} deleteHabit={deleteHabit} />
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
