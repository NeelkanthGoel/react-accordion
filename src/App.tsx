import { useEffect, useState } from 'react';
import style from './App.module.scss';
import AppHeader from './component/appHeader/appHeader';
import Accordion from './component/accordion/accordion';
import {userDataType} from './types/types';



function App() {

  const [data, setData] = useState<userDataType | []>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/NeelkanthGoel/react-accordion/demo/src/data/questionAnswerList.json')
    .then(result => result.json())
    .then(data => {
      setData(data?.data ?? []);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className={style.container}>
        <AppHeader heading="Accordion"/>
        <section className={style.question}>
          <h2>
            <span>Question:</span>
            <span>You need to implement the accordion as shown below. You can fetch the data for the accordion using the link:
              <a target='_blank' href=' https://raw.githubusercontent.com/NeelkanthGoel/react-accordion/demo/src/data/questionAnswerList.json'> https://raw.githubusercontent.com/NeelkanthGoel/react-accordion/demo/src/data/questionAnswerList.json</a>
            </span>
          </h2>
        </section>
        <section className={style.answer}>
          <h2>Answer:</h2>
          { data.length > 0 ? <Accordion data={data}/>
          : <h2>data if fetching</h2>
          }
        </section>
    </div>
  )
}

export default App
