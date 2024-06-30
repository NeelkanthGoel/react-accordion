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
            <span>
            This task requires the implementation of an accordion component. Data for the accordion, containing questions and answers, can be retrieved from the following JSON file: <a target='_blank' href=' https://raw.githubusercontent.com/NeelkanthGoel/react-accordion/demo/src/data/questionAnswerList.json'> https://raw.githubusercontent.com/NeelkanthGoel/react-accordion/demo/src/data/questionAnswerList.json</a>. 
            Important Note: You should achieve this functionality without relying on any external libraries for the accordion itself or for styling (CSS).  Write the entire codebase from scratch using React concepts.
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
