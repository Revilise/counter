import './Header.scss';

interface HeaderProps {}

export default function Header(props: HeaderProps): JSX.Element {
    return (
        <header className="header">
            <h1 className="header__title">Тестовое задание для ЛСР</h1>
        </header>
    )
}