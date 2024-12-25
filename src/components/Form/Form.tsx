import { ChangeEvent, FC, JSX, useState } from "react";
import IFormItem from "../../interfaces/IFormItem";
import Button from "../Button/Button";
import FormItem from "../FormItem/FormItem";
import styles from './Form.module.scss';

const Form: FC<IForm> = ({status}): JSX.Element => {

    const [formState, setFormState] = useState<Array<IFormItem>>([
        {
            type: 'text',
            name: 'Name',
            required: true,
            itemType: 'input',
            value: '',
        },
        {
            type: 'email',
            name: 'Email',
            required: true,
            itemType: 'input',
            value: '',
        },
        {
            type: 'text',
            name: 'Message',
            required: false,
            itemType: 'textarea',
            value: '',
        },
    ])

    const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setFormState((prevItems:Array<IFormItem>):Array<IFormItem> =>
            prevItems.map((item:IFormItem):IFormItem =>
              item.name === e.target.name ? { ...item, value: value } : item
            )
        )
    }

    const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const responseArray: Array<string> = []

        formState.map((item: IFormItem): void => {
            responseArray.push(item.value)
        })

        const TOKEN = process.env.React_App_TOKEN
        const CHAT_ID = process.env.React_App_CHAT_ID
        const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

        const message = `Website request! 
        \n <b>Name:</b> ${responseArray[0]} 
        \n <b>Email:</b> ${responseArray[1]} 
        \n <b>Message:</b> ${responseArray[2]}`

       status((prev:boolean): boolean => !prev)
        
    }
    
    return (
        <form action="POST" className={styles.form} onSubmit={handleSubmit}>
            {formState.map((input: IFormItem, index: number): JSX.Element => {
                return(
                    <FormItem {...input} key={index} onChange={handleChange}
                    type={input.type} required={input.required} />
                )
            })}
            <Button type={'submit'}><>Submit</></Button>
        </form>
    )
}

export default Form