import React from "react";

const navMenuItems = [
    "Careers",
    "Fee",
    "Innovaions",
    "Brochures",
    "Portal Login",
];

function NavSection1() {
    return (
        <div className="nav-sec-1">
            <div className="nav-menus">
                {navMenuItems.map((item) => {
                    return <div className="nav-item">{item}</div>;
                })}
            </div>
            <svg
                className="drop-icn"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11 0.814309C10.9371 1.14663 10.7538 1.42314 10.5626 1.69457C9.22946 3.57941 7.89632 5.46424 6.56317 7.35161C6.39555 7.59007 6.19911 7.79809 5.91886 7.91478C5.49456 8.09235 5.01526 7.98835 4.67215 7.64081C4.58572 7.55202 4.50715 7.45562 4.43905 7.35669C3.06662 5.41858 1.69419 3.47794 0.324376 1.53729C0.175084 1.32674 0.0467464 1.10858 0.0100784 0.849824C-0.0501618 0.438864 0.161989 0.136987 0.583671 0.0456622C0.727723 0.0152207 0.879634 0 1.02892 0C4.00689 0 6.98485 0 9.9602 0C10.1226 0 10.2902 0.0177575 10.4474 0.0558093C10.7407 0.126839 10.9293 0.314562 10.9974 0.603756V0.811772L11 0.814309Z"
                    fill="#002035"
                />
            </svg>
        </div>
    );
}

export default NavSection1;
