import { FC, JSX } from "react";
import Button from "../../components/Button/Button";
import styles from './Home.module.scss';
import photo from '../../images/photo.jpg';
import Socials from "../../components/Socials/Socials";


const Home: FC = ():JSX.Element => {
    return (
        <main className='main'>
            <section className={styles.home}>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                    <h1 className='title'>
                            Frontend Developer
                        </h1>
                        <p className={styles.text}>
                            Enthusiastic <span>frontend developer</span> with teamwork and freelancing experience.
                            With a passion for <span>automating</span> routine processes, <span>developing</span> new and unique things, 
                            and <span>creating</span> custom UI elements.
                            Implement your idea so quickly and without problems, let's get started!
                        </p>
                        <Button isLocalLink={true} to='/contact'><>Start now</></Button>
                    </div>
                    <img src={photo} alt="Photo" className={styles.photo} />
                </div>
                <Socials />
            </section>
        </main>
    )
}

export default Home