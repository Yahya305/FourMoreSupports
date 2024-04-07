import { nanoid } from "@reduxjs/toolkit";

type MenuItem = {
    name: string;
    path: string;
    id: string;
    nestedItems?: MenuItem[];
};

export const HeaderMenu: MenuItem[] = [
    {
        name: "Home",
        path: "/",
        id: nanoid(),
    },
    {
        name: "NDIS Services",
        path: "/",
        id: nanoid(),
        nestedItems: [
            {
                name: "NDIS",
                path: "/",
                id: nanoid(),
            },
            {
                name: "Blog",
                path: "/",
                id: nanoid(),
            },
            {
                name: "Contact Us",
                path: "/",
                id: nanoid(),
            },
        ],
    },
    {
        name: "About FMS",
        path: "/",
        id: nanoid(),
    },
    {
        name: "NDIS",
        path: "/",
        id: nanoid(),
    },
    {
        name: "Blog",
        path: "/",
        id: nanoid(),
    },
    {
        name: "Contact Us",
        path: "/",
        id: nanoid(),
    },
];
