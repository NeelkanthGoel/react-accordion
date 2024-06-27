import { useState } from 'react';
import style from './accordion.module.scss';
import { accordionPropType, userDataType } from '../types/types';

const Accordion = ({data}:accordionPropType) => {

    const [dataList, changeDatalist] = useState<userDataType>(data);

    const openClose = (index: number):void => {
        dataList[index].open = !dataList[index].open; 
        changeDatalist([...dataList]);
    }

    return (
        <section className={style.accordion_container}>
            {dataList.length > 0 && dataList.map((result, index) => {
                return(
                    <div key={index} className={style.accordion}>
                        <div className={style.ques} onClick={() => openClose(index)}>
                            <span>{result?.ques}</span>
                            <span>{result?.open ? '-' : '+'}</span>
                        </div>
                        { result?.open && <div className={style.ans}>{result?.ans}</div>
                        }
                    </div>
                )
            })}
        </section>
    )
}

export default Accordion;