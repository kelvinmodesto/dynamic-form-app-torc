import React, {ChangeEvent, useState} from 'react';
import DynamicForm from './components/DynamicForm/DynamicForm';
import './App.css';

function App() {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<string>('')
  const onChangeName = (evt: ChangeEvent<HTMLInputElement>) => {
      try {
          const { value }= evt.target;
          setName(evt.target.value);
      } catch(err) {
          console.error(`Error: ${err}`)
      }

  }
  const onChangeAge = (evt: ChangeEvent<HTMLInputElement>) => {
        try {
            const value: number = Number(evt.target.value);

            if (isNaN(value)) throw new Error('The value is not a number');
            if (value  < 0 && value > 125) throw new Error('Invalid age');

            setAge(evt.target.value);
        } catch(err){
          console.error(`Error: ${err}`);
        }
  }

  const onChangeGender = (evt: ChangeEvent<HTMLSelectElement>) => {
      setGender(evt.target.value);
  }

  const onSubmit = () => {
        console.log({name, age, gender});
  }

  return (
      <DynamicForm
          items={[
              { type: 'text',body: { type: 'text', placeholder: 'Type your name here', required: true, label: 'Name', value: name, change: onChangeName }},
              { type: 'text', body: { type: 'number', min: 0, max: 125, required: true, placeholder: 'Type your age here', label: 'Age', value: age, change: onChangeAge } },
              { type: 'select', body: {
                      name: 'gender',
                      value: gender,
                      required: true,
                      options: [
                          {value: 'male', text: 'Male'},
                          {value: 'female', text: 'Female'},
                          {value: 'nonBinary', text: 'Non-Binary'}
                      ],
                      change: onChangeGender
                  },

              }
          ]}
          submit={{text: 'go', action: onSubmit}}
      />
  );
}

export default App;
