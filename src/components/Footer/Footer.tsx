import './Footer.scss'
import Text from '../Text/Text';
import Link from "../Link/Link";

interface FooterProps {}

export default function Footer(props: FooterProps) : JSX.Element {
    return (
        <footer className="footer">
            <Text>
                portfolio:&nbsp;
                <Link href="https://github.com/Revilise">
                    github.com/Revilise
                </Link>
            </Text>
        </footer>
    )
}