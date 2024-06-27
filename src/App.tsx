import style from './App.module.scss';

function App() {

  return (
    <div className={style.container}>
        <header className={style.heading}>
            <h1>
              Accordion
            </h1>
        </header>
        <section className={style.question}>
          <h2>
            <span>Question:</span>
            <span>You need to implement the accordion as shown below.</span>
          </h2>
        </section>
        <section className={style.answer}>

        </section>
    </div>
  )
}

export default App
