import React from 'react';
import { render, screen } from '@testing-library/react';
import DynamicForm from './DynamicForm';
import { FormType, InputType, OptionType, SelectType, SubmitType } from "../../@types";


const mockInputName: InputType = { type: 'text', label: 'name', value: '', change: jest.fn() };
const mockInputAge: InputType = { type: 'number', label: 'age', value: '32', change: jest.fn() };
const mockMaleGenderOption: OptionType = {value: 'male', text: 'Male'};
const mockFemaleGenderOption: OptionType = {value: 'female', text: 'Female'};
const mockNonBinaryOption: OptionType = {value: 'nonBinary', text: 'Non-Binary'};
const mockSelectGender: SelectType = {
    name: 'gender',
    value: '',
    options: [mockMaleGenderOption, mockFemaleGenderOption, mockNonBinaryOption]
    , change: jest.fn()
};
const mockEmptySelectGender: SelectType = { name: 'gender', options: [], value: '', change: jest.fn() };
const mockSubmitButton: SubmitType = { text: 'go', action: jest.fn() };

describe('dynamic form component tests', () => {
    it('render complete form', () => {
        const { items, submit }: FormType = {
            items: [
                { type: 'text',body: mockInputName},
                { type: 'text', body: mockInputAge },
                { type: 'select', body: mockSelectGender }
            ],
            submit: mockSubmitButton
        };
        render(<DynamicForm items={items} submit={submit} />);
        const selectElement = screen.queryByText(/select your gender/i);
        expect(selectElement).toBeInTheDocument();
    });

    it('render form without a select without options', () => {
        const { items, submit }: FormType = {
            items: [
                { type: 'text',body: mockInputName},
                { type: 'text', body: mockInputAge },
                { type: 'select', body: mockEmptySelectGender }
            ],
            submit: mockSubmitButton
        };
        render(<DynamicForm items={items} submit={submit} />);
        const selectElement = screen.queryByText(/select your gender/i);
        expect(selectElement).not.toBeInTheDocument();
    });

    it('render error message', () => {
        const { items, submit }: FormType = {
            items: [],
            submit: mockSubmitButton
        };
        render(<DynamicForm items={items} submit={submit} />);
        const errorMessage = screen.queryByText(/empty form/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('render complete form', () => {
        const { items, submit }: FormType = {
            items: [
                { type: 'text',body: mockInputName},
                { type: 'text', body: mockInputAge },
                { type: 'select', body: mockSelectGender }
            ],
            submit: mockSubmitButton
        };
        render(<DynamicForm items={items} submit={submit} />);
        const selectElement = screen.queryByText(/select your gender/i);
        expect(selectElement).toBeInTheDocument();
    });

});
