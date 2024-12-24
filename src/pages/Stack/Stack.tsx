import { FC, JSX } from "react";
import styles from './Stack.module.scss';

const Stack: FC = (): JSX.Element => {

    const stackList:Array<string> = [
        'HTML/CSS', 
        'SASS/SCSS', 
        'JavaScript ES6', 
        'TypeScript',
        'React', 
        'Redux', 
        'JQuery',
        'Webpack/Vite', 
        'Git', 
        'Figma/Photoshop'
    ]

    return (
        <main className='main'>
            <section className={styles.stack}>
                <h1 className="title">
                    My Stack
                </h1>
                <ul className={styles.list}>
                    {stackList.map((item: string, index: number): JSX.Element => {
                        return (
                            <li key={index} className={styles['list__item']}>
                                <div className={styles.circle}>
                                    <p className={styles.count}>
                                        {index + 1}
                                    </p>
                                </div>
                                <p className={styles['list__text']}>
                                    {item}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Stack