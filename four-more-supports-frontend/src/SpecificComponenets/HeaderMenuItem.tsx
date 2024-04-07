import { HeaderMenu } from "@/Lib/Data/HeaderMenu";

type MenuItemType = { Item: (typeof HeaderMenu)[0] };
const HeaderMenuItem = ({ Item }: MenuItemType) => {
    return (
        <li key={Item.name}>
            <a href={Item.path}>{Item.name}</a>
        </li>
    );
};

export default HeaderMenuItem;
