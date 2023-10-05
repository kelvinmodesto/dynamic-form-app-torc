import { FunctionComponent } from 'react';
import {FormType, InputType, OptionType, SelectType} from "../../@types";
import './DynamicForm.css';

const DynamicForm: FunctionComponent<FormType> = (form: FormType) => {
    const showErrorMessage = (message: string) => <p>{message}</p>;

    return <div className="container">{form.items.length === 0 ? showErrorMessage('Empty Form'):
        <form onSubmit={form.submit.action} className="form">
            {form.items.map((item, index) => {
                    const { body } = item;
                    if (item.type !== 'select') {
                        const input: InputType = body as InputType;
                        return <input autoFocus placeholder={input.placeholder} key={`${input.value}-${index}`} onChange={input.change} type={input.type} value={input.value} />
                    }
                    const select: SelectType = body as SelectType;
                    if (select.options.length > 0) {
                        return <select onChange={select.change} key={index}>
                            <option key='gender' defaultChecked value=''>Select your gender</option>
                            {select.options.map((sel: OptionType, index) => {
                                return <option key={`${sel.value}-${index}`} value={sel.value}>{sel.text}</option>;
                            })}
                        </select>;
                    }
                    return null;
                })
            }
            <button type="submit">{form.submit.text}</button>
        </form>}
    </div>
};

export default DynamicForm;
