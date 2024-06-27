import style from './appHeader.module.scss';

type appHeadePropstype = {
    heading: string
}

const AppHeader = ({heading}: appHeadePropstype) => {
    return(
        <header className={style.container}>
            <h1>NG</h1>
            <h1>{heading}</h1>
            <button>
                <a target='_blank' href="https://neelkanthgoel.vercel.app/">Go To Profile</a>
            </button>
        </header>
    )
}

export default AppHeader;