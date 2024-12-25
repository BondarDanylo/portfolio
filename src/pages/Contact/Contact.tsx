import axios from "axios";
import { ChangeEvent, FC, JSX, useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import FormItem from "../../components/FormItem/FormItem";
import Popup from "../../components/Popup/Popup";
import IFormItem from "../../interfaces/IFormItem";
import styles from './Contact.module.scss';

const Contact: FC = (): JSX.Element => {


    const [popupStatus, setPopupStatus] = useState<Boolean>(false)


    const popupText: string = 'Thank you for your request! I will be in touch with you shortly 😊'

    return (
        <main className='main'>
            <section className={styles.contact}>
                <div className={styles.wrapper}>
                    <Form status={setPopupStatus} />
                   <div className={styles.text}>
                    <h1 className="title">
                            Contact Form
                        </h1>
                        <p className={styles.subtitle}>
                            You can send me your message and I will answer you soon. It is totally free.
                        </p>
                        <p className={styles.subtitle}>
                            You don’t have to see the whole staircase, just take the first step. Good luck!
                        </p>
                   </div>
                </div>
            </section>
            {popupStatus ?  <Popup text={popupText} status={setPopupStatus}/> : null}
        </main>
    )
}

export default Contact