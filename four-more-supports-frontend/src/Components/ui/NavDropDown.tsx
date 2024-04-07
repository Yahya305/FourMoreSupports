interface NavDropdownProps {
    text: string;
    dropdowns?: {
        text: string;
        href: string;
    }[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ text, dropdowns }) => {
    return (
        <div className="group relative cursor-pointer">
            <div className="flex gap-2.5 justify-center self-stretch p-1">
                <div>{text}</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8163821386e7d53d86887958ecb16eed6df59dad8cb0a8da91348cb0eccada7e?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                    alt=""
                    className="shrink-0 my-auto aspect-[1.37] fill-teal-950 w-[11px]"
                />
            </div>
            <div className="invisible absolute bg-tertiary w-[100%] group-hover:visible border border-secondary border-b-0 rounded-sm z-10">
                {dropdowns?.map((item) => {
                    return <div className="border-b py-1 px-2.5 border-secondary cursor-pointer hover:bg-secondary hover:text-white">{item.text}</div>;
                })}
            </div>
        </div>
    );
};

export default NavDropdown