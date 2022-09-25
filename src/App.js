import './App.css'
import birthdays from './data/data'
import BGBD from './assets/bgbd.jpg'
import BGWBD from './assets/bgwbd.jpg'

function App() {

  const today = new Date();
  console.log(today.getDate())
  const newB = birthdays.reduce((acc, rec) => {
    if (rec.birthdate === today.getDate() && rec.birthmonth === today.getMonth() + 1) {
      return acc.concat(rec.name)
    } return acc
  }, [])

  return (
    <div className='App'>
      {(newB.length > 0)
        ? <div className='container__bd'>
          <h1 className='text'>{
            newB.map(function (item, index) {
              return <span key={index}>
                {(index) ? `, ${item}` : ` ${item}`}
              </span>;
            })
          }, Поздравляем с днём рождения!!!
          </h1>
          <img src={BGBD} alt='birthday' />
        </div>

        : <div className='container__wbd'>
          <h2 className='text'>Привет!! Сегодня без дня рождения у твоих знакомых</h2>
          <img src={BGWBD} alt='without birthday' />
        </div>
      }
    </div>
  )

}

export default App;
