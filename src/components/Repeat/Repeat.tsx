interface RepeatProps {
    container: Function,
    containerProps?: object,
    item: Function,
    itemProps?: object,
    repeat: number
}

export default function Repeat({
  container,
  containerProps = {},
  item,
  itemProps = {},
  repeat
}: RepeatProps): JSX.Element {
    const Container = container;
    const items = (new Array(repeat)).fill(item)

    return (
        <Container {...containerProps}>
            { items.map((Item, i) => <Item key={i} {...itemProps}/>) }
        </Container>
    )
}