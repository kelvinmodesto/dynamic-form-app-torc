import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm/DynamicForm';
import './App.css';

function App() {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<string>('')
  const onChangeName = (evt: any) => {
      setName(evt.target.value)
  }
  const onChangeAge = (evt: any) => {
        setAge(evt.target.value)
  }

  const onChangeGender = (evt: any) => {
      setGender(evt.target.value);
  }

  const onSubmit = () => {
        console.log({name, age, gender});
  }

  return (
      <DynamicForm
          items={[
              { type: 'text',body: { type: 'text', placeholder: 'Type your name here', label: 'name', value: name, change: onChangeName }},
              { type: 'text', body: { type: 'number', placeholder: 'Type your age here', label: 'age', value: age, change: onChangeAge } },
              { type: 'select', body: {
                      name: 'gender',
                      value: gender,
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
