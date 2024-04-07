interface NavItemProps {
    text: string;
    href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => {
    if (href) {
        return (
            <a href={href} className="self-stretch my-auto cursor-pointer">
                {text}
            </a>
        );
    }
    return <div className="self-stretch my-auto cursor-pointer">{text}</div>;
};
export default NavItem;