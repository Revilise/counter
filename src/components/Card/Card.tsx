import "./Card.scss";

import React, {useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";
import Text from "../Text/Text";

interface CardProps {}

export default function Card(props: CardProps): JSX.Element {
    const [value, setValue] = useState<string>("")
    const [count, setCount] = useState<number>(0);

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;

        // не пропускать дробные значения и числа со знаком
        const operators = ["+", "-", "."];
        if(operators.some(o => value.includes(o))) return;

        // разрешить вводить только числа
        if (!isNaN(Number(value))) {
            setValue(value)
        }
    }

    function onFormSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        setCount(count + Number(value));
        setValue("");
    }

    return (
        <form data-testid="card" onSubmit={onFormSubmit} className="card">
            <Layout space="sp-8" orientation="vertical">
                <Input
                    type="text"
                    value={value}
                    onChange={onInputChange}
                    placeholder="введите число..."
                    required={true}
                />
                <Button disabled={value.trim().length === 0}>
                    Прибавить к результату
                </Button>
                <Text>Результат: {count}</Text>
            </Layout>
        </form>
    )
}