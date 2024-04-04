import Image from "next/image";
import * as React from "react";

interface SocialMediaIconProps {
    src: string;
    alt: string;
    className?: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
    src,
    alt,
    className,
}) => (
    <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`shrink-0 aspect-square fill-white w-[21px] ${className}`}
    />
);

const PhoneIcon: React.FC = () => (
    <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ed57afe90f97367345833a57adaf735678e903ce8224566dd0f84601c3dabd?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
        alt="Phone icon"
        className="shrink-0 self-start w-5 aspect-[0.95] fill-white"
    />
);

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

interface NavDropdownProps {
    text: string;
    dropdowns?: {
        text: string;
        href: string;
    }[];
}

const navItems: NavItemProps[] = [
    { text: "Home" },
    { text: "About FMS" },
    { text: "NDIS" },
    { text: "Blog" },
];

const navDropdowns: NavDropdownProps[] = [
    {
        text: "NDIS Services",
        dropdowns: [
            { text: "Menu 1", href: "" },
            { text: "Menu 2", href: "" },
        ],
    },
    {
        text: "Contact Us",
        dropdowns: [
            { text: "Menu 1", href: "" },
            { text: "Menu 2", href: "" },
        ],
    },
];
const NavDropdown: React.FC<NavDropdownProps> = ({ text, dropdowns }) => {
    return (
        <div className="group relative cursor-pointer">
            <div className="flex gap-2.5 justify-center self-stretch p-2.5">
                <div>{text}</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8163821386e7d53d86887958ecb16eed6df59dad8cb0a8da91348cb0eccada7e?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                    alt=""
                    className="shrink-0 my-auto aspect-[1.37] fill-teal-950 w-[11px]"
                />
            </div>
            <div className="invisible absolute bg-tertiary w-[100%] group-hover:visible border border-secondary border-b-0 rounded-sm">
                {dropdowns?.map((item) => {
                    return <div className="border-b py-1 px-2.5 border-secondary cursor-pointer">{item.text}</div>;
                })}
            </div>
        </div>
    );
};

const Header: React.FC = () => {
    const socialMediaIcons = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57e9d59678eebe7bce66f2c637ba5401752b5342811439b3bbb0a043e87ef85a?apiKey=fb1b07ce8320474484950edc03c5c0a0&",
            alt: "Social media icon 1",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3e8c99481ae86fc78be10d5a946516c4d25202a0f248b4d49951f216f09734b?apiKey=fb1b07ce8320474484950edc03c5c0a0&",
            alt: "Social media icon 2",
            className: "aspect-[1.05]",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6422789d0e33ca878213e4bdce8fee6c1fb0366f56e6310d2961d9adc92d172?apiKey=fb1b07ce8320474484950edc03c5c0a0&",
            alt: "Social media icon 3",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ceb9ff6cb0ed5812aabd1d63d2ded120028c8d4c8bba40f83e8a419887f32a90?apiKey=fb1b07ce8320474484950edc03c5c0a0&",
            alt: "Social media icon 4",
            className: "w-5 aspect-[0.95]",
        },
    ];

    return (
        <header>
            <div className="flex justify-center items-center px-16 py-3 bg-secondary max-md:px-5">
                <div className="flex gap-5 justify-between w-full max-w-[1620px] text-white max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-2.5 my-auto cursor-pointer">
                        {socialMediaIcons.map((icon, index) => (
                            <SocialMediaIcon
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                className={icon.className}
                            />
                        ))}
                    </div>
                    <div className="flex gap-5 justify-between font-semibold">
                        <div className="flex gap-2.5 my-auto text-white">
                            <PhoneIcon />
                            <div>+61 426393517</div>
                        </div>
                        <button className="justify-center px-5 py-3 text-sm bg-primary rounded-md text-secondary max-md:px-5">
                            Schedule of Supports
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-tertiary max-md:px-5 px-10">
                <div className=" max-w-full w-[1620px] max-md:pr-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0  items-center">
                        <div>
                            <div className="relative h-24 w-24">
                                <Image
                                    loading="lazy"
                                    src="/logo.png"
                                    fill
                                    style={{
                                        objectFit: "contain",
                                    }}
                                    alt="construction image"
                                />
                            </div>
                        </div>
                        <div className="w-[60%] mx-10">
                            <div className="flex gap-3 justify-between items-center self-stretch pr-10 pl-2.5 my-auto  text-teal-950 max-md:flex-wrap max-md:pr-5 max-md:mt-10">
                                {navItems.map((item) => (
                                    <NavItem key={item.text} {...item} />
                                ))}
                                {navDropdowns.map((dropdown) => (
                                    <NavDropdown
                                        key={dropdown.text}
                                        {...dropdown}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
