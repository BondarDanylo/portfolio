import { ChangeEventHandler } from "react";

interface IFormItem {
    type: string,
    name: string,
    required?: boolean,
    itemType: 'input' | 'textarea',
    onChange?: ChangeEventHandler,
    value: string,
}

export default IFormItem