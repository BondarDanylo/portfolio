import { FC, JSX } from "react";
import IFormItem from "../../interfaces/IFormItem";
import styles from './FormItem.module.scss';

const FormItem: FC<IFormItem> = ({type, name, required, itemType, onChange, value}): JSX.Element => {
    if(itemType === 'input') {
        return(
            <div className="wrapper">
                <label htmlFor={name} className={styles.label}>{name}</label>
                <input onChange={onChange} value={value} type={type} name={name} required={required? required : undefined} className={styles.input}/>
            </div>
        )
    }else {
        return(
            <div className="wrapper">
                <label htmlFor={name} className={styles.label}>{name}</label>
                <textarea onChange={onChange}  value={value} name={name} required={required? required : undefined} className={styles.textarea}></textarea>
            </div>
        )
    }
}

export default FormItem