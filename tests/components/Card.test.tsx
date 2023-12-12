// 1. Кнопка заблокирована если поле ввода пустое
// 2. Поле ввода принимает только числа
// 3. Ввести группу рандомных чисел и нажать на кнопку => поле очистится

import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import Card from "../../src/components/Card/Card";
import {ENG_LETTER, NUMBERS, RU_LETTERS, SYMBOLS} from "../../src/const";

function clearInput(input: HTMLElement):void {
    fireEvent.change(input, { target: { value: "" } })
}

function setup() {
    const card = render(<Card key={0} onSum={new Function} />)
    const input = card.getByTestId('input') as HTMLInputElement;
    const button = card.getByTestId('button') as HTMLButtonElement;

    return {card, input, button}
}

describe('Рендеринг и поведение элементов в карточке', () => {
    describe('Карточка имеет базовые элементы', () => {
        test('В карточке есть кнопка', () => {
            const {card} = setup();
            expect(card.getByTestId("button")).toBeInTheDocument();
        })

        test('В карточке есть поле ввода', () => {
            const {card} = setup();
            expect(card.getByTestId("input")).toBeInTheDocument();
        })
    })

    describe('Состояния элементов карточки при инициализации', () => {
        test('При инициализации поле ввода пустое', () => {
            const {card} = setup();
            expect(card.getByTestId("input")).toBeEmptyDOMElement()
        })
        test('При инициализации кнопка заблокирована', () => {
            const {card} = setup();
            expect(card.getByTestId("button")).toBeInTheDocument();
        })

        cleanup();
    })

    describe('Поведение поля ввода в карточке', () => {
        test('В поле ввода нельзя ввести буквы', () => {
            const {input} = setup();

            [...RU_LETTERS, ...ENG_LETTER, ...SYMBOLS].forEach(letter => {
                fireEvent.change(input, {target: {value: letter}});
                expect(input.value).not.toBe(letter)

            })
        })

        test('В поле ввода нельзя ввести спец символы', () => {
            const {input} = setup();

            SYMBOLS.forEach(letter => {
                fireEvent.change(input, {target: {value: letter}})
                expect((screen.getByTestId('input') as HTMLInputElement).value).not.toBe(letter)
            })
        })

        test('В поле ввода можно ввести числа',  () => {
            const {input} = setup();

            NUMBERS.forEach(number => {
                fireEvent.change(input, {target: {value: number}})
                expect(input.value).toEqual(number.toString())
                clearInput(input)
            })
        })

        cleanup();
    })

    describe('Поведение кнопки в карточке', () => {
        test('Кнопка заблокирована если ввести буквы', () => {
            const {input, button} = setup();

            [...RU_LETTERS, ...ENG_LETTER].forEach(letter => {
                fireEvent.change(input, {target: {value: letter}})
                expect(button).toHaveAttribute("disabled", "");
            })
        })

        test('Кнопка заблокирована если ввести спец символы', () => {
            const {input, button} = setup();

            [...RU_LETTERS, ...ENG_LETTER].forEach(letter => {
                fireEvent.change(input, {target: {value: letter}})
                expect(button).toHaveAttribute("disabled", "")
            })
        })

        test('Кнопка разблокирована если введено числовое значение', () => {
            const {input, button} = setup();

            NUMBERS.forEach(number => {
                fireEvent.change(input, {target: {value: number.toString()}})
                expect(button).not.toHaveAttribute("disabled");
                clearInput(input)
            })
        })
    })
})

