import './Space.scss'

interface SpaceProps {
    height: "available"
}

export default function Space({
    height
}: SpaceProps) {
    return <div
        className={`space ${height}`}
    />
}