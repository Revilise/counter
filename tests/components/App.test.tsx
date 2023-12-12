// 1. рендерит 3 карточки card
// 2. изначально результат=0
// 3. набираем в карточку 1 значение 10 и нажимаем на кнопку. Результат прибавился к 0 и стал 10.

import App from "../../src/App";
import {fireEvent, render, screen} from "@testing-library/react";
import Card from "../../src/components/Card/Card";

function setup() {
    const app = render(<App />)
    const cards = app.queryAllByTestId('card');
    const result = app.getByTestId('result');

    return {app, cards, result}
}

function generateRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}


describe('Рендеринг элементов на странице', () => {
    test('3 карточки присутствуют на странице', async () => {
        setup()
        const cards = await screen.queryAllByTestId('card');
        expect(cards.length).toEqual(3);
    })

    test('Шапка присутствует на странице', async () => {
        setup()
        const header = await screen.queryAllByTestId('header');
        expect(header.length).toEqual(1);
    })

    test('Подвал присутствует на странице', async () => {
        setup()
        const footer = await screen.queryAllByTestId('footer');
        expect(footer.length).toEqual(1)
    })
})

test('При инициализации приложения установлен результат = 0', async () => {
    const {result} = setup()

    if (!result) console.assert('Строка с результатом отсутствует на странице.');

    expect(result).toBeInTheDocument()
    expect(result.textContent?.toLowerCase()).toEqual('0');
})

describe('Ввод значения в карточку c последующим сохранением',() => {
    test('1 вариант', () => {
        const {result, cards} = setup()

        for(let card of cards) {
            const [input] = card.getElementsByTagName('input');
            let [button] = card.getElementsByTagName('button');

            fireEvent.change(input, {target: {value: 1}});
            fireEvent.click(button)

            expect(input.value).toEqual("");
        }

        expect(result.textContent).toEqual("3")
    })

    test('2 вариант', () => {
        const {cards, result} = setup();
        let accum = 0;

        for(let card of cards) {
            const [input] = card.getElementsByTagName('input');
            let [button] = card.getElementsByTagName('button');
            const rand_int = generateRandomInt(100);
            accum += rand_int;

            fireEvent.change(input, {target: {value: rand_int}});
            fireEvent.click(button)

            expect(input.value).toEqual("");
        }

        expect(result.textContent).toEqual(accum.toString())
    })
})