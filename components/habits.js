import React, { useState } from 'react'
import HabitList from './habit-list'

const Habits = ({ habits, deleteHabit }) => {
  const [monthDays, setMonthDays] = useState(0);

  const monthsIndex = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dic: 11
  }

  const selectMonth = (ev) => {
    const month = ev.target.innerText
    const year = new Date().getFullYear()
    const days = 32 - new Date(year, monthsIndex[month], 32).getDate()

    ev.target.parentNode.childNodes.forEach( child => {
      if (child.classList.contains('selected')) child.classList.remove('selected')
    })
    ev.target.classList.add('selected')
    setMonthDays(days)
  }

  return (
    <section className="habits">
      <h2>This are the lists of habits that you want develop</h2>
      <div style={{ maxWidth: '90vw' }}>
        {habits.length > 0 ? (
            <div className="habits__grid">
              <p> Year 2020 </p>
              <div className="months__label label__element">
                <span>Months</span>
              </div>
              <div className="months">
                <span className="month" onClick={selectMonth}>Jan</span>
                <span className="month" onClick={selectMonth}>Feb</span>
                <span className="month" onClick={selectMonth}>Mar</span>
                <span className="month" onClick={selectMonth}>Apr</span>
                <span className="month" onClick={selectMonth}>May</span>
                <span className="month" onClick={selectMonth}>Jun</span>
                <span className="month" onClick={selectMonth}>Jul</span>
                <span className="month" onClick={selectMonth}>Aug</span>
                <span className="month" onClick={selectMonth}>Sep</span>
                <span className="month" onClick={selectMonth}>Oct</span>
                <span className="month" onClick={selectMonth}>Nov</span>
                <span className="month" onClick={selectMonth}>Dec</span>
              </div>
              <div className="habits__label label__element">
                <span>Habits</span>
              </div>
              <span className="day">1</span>
              <span className="day">2</span>
              <span className="day">3</span>
              <span className="day">4</span>
              <span className="day">5</span>
              <span className="day">6</span>
              <span className="day">7</span>
              <span className="day">8</span>
              <span className="day">9</span>
              <span className="day">10</span>
              <span className="day">11</span>
              <span className="day">12</span>
              <span className="day">13</span>
              <span className="day">14</span>
              <span className="day">15</span>
              <span className="day">16</span>
              <span className="day">17</span>
              <span className="day">18</span>
              <span className="day">19</span>
              <span className="day">20</span>
              <span className="day">21</span>
              <span className="day">22</span>
              <span className="day">23</span>
              <span className="day">24</span>
              <span className="day">25</span>
              <span className="day">26</span>
              <span className="day">27</span>
              <span className="day">28</span>
              <span className="day">29</span>
              <span className="day">30</span>
              <span className="day">31</span>

              <HabitList habits={habits} deleteHabit={deleteHabit} />

            </div>
          ) : (
            <p>
              <strong>You need add habits</strong>
            </p>
          )
        }
      </div>

      <style jsx>{`
        .habits {
          margin-top: 1.5rem;
          text-align: center;
        }

        .habits__grid {
          width: 100%;
          display: grid;
          padding: 1rem;
          grid-gap: 1em;
          margin: 0 auto;
          overflow: auto;
          background-color: wheat;
          grid-template-columns: repeat(32, 1fr);
          grid-template-rows: repeat(auto-fit, minmax(1rem, max-content));
        }

        .habits__grid > p {
          grid-column: 1/33;
          height: 1rem;
          grid-row: 1;
          text-align: justify;
        }

        .months {
          grid-row: 2;
          grid-column: 2/33;
          display: flex;
          border: 1px dashed white;
          height: 2rem;
          justify-content: space-around;
          align-items: center;
        }

        .months__label {
          grid-column: 1/2;
          grid-row: 2;
        }

        .month {
          cursor: pointer;
        }

        .month.selected {
          font-weight: bold;
        }

        .habits__label{
          grid-column: 1/2;
          grid-row: 3;
        }

        .label__element {
          width: 15rem;
          height: 2rem;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
        }

        .day {
          width: 2rem;
          align-self: center;
          text-align: center;
          justify-self: center;
        }

      `}</style>
    </section>
  )
}

export default Habits
