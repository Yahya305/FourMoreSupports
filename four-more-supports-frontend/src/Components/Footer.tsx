import FacebookIconCircle from "@/Assets/Icons/FacebookIconCircle";
import InstaIconCircle from "@/Assets/Icons/InstaIconCircle";
import Logo from "@/Assets/Icons/Logo";
import WhatsAppIconCircle from "@/Assets/Icons/WhatsAppIconCircle";
import { FooterMenu } from "@/Lib/Data/FooterMenu1";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="foot-main">
                        <div className="left">
                            <Logo type="LIGHT" />
                            <div className="desc">
                                Lorem ipsum dolor sit amet consectetur. Felis
                                vulputate facilisis ut nulla ut mauris metus
                                elementum
                            </div>
                            <div className="icons">
                                <FacebookIconCircle />
                                <WhatsAppIconCircle />
                                <InstaIconCircle />
                            </div>
                        </div>
                        <div className="mid">
                            <nav>
                                <h2 className="title">Site Map</h2>
                                <ul>
                                    {FooterMenu.FooterMenu1.map((item) => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.path}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                            <nav>
                                <h2 className="title">Useful Links</h2>
                                <ul>
                                    {FooterMenu.FooterMenu2.map((item) => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.path}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                            <div className="contacts">
                                <h2 className="title">Contact Us</h2>
                                <ul>
                                    <li>
                                        <h4>Address:</h4>
                                        <span>
                                            PO Box 89, Surrey Downs SA, 5126
                                        </span>
                                    </li>
                                    <li>
                                        <h4>Email:</h4>
                                        <span className="emails">
                                            <p>
                                                risha.bhura@fourmoresupports.com.au
                                            </p>
                                            <p>info@fourmoresupports.com.au</p>
                                        </span>
                                    </li>
                                    <li>
                                        <h4>Phone:</h4>
                                        <span>+61 426393517</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Join our mailing List</div>
                            <input type="text" placeholder="Full Name" />
                            <input type="number" placeholder="Phone Number" />
                            <input type="email" placeholder="Email Address" />
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                    <div className="mid hidden">
                        <nav>
                            <h2 className="title">Site Map</h2>
                            <ul>
                                {FooterMenu.FooterMenu1.map((item) => {
                                    return (
                                        <li key={item.name}>
                                            <a href={item.path}>{item.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <nav>
                            <h2 className="title">Useful Links</h2>
                            <ul>
                                {FooterMenu.FooterMenu2.map((item) => {
                                    return (
                                        <li key={item.name}>
                                            <a href={item.path}>{item.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <div className="contacts">
                            <h2 className="title">Contact Us</h2>
                            <ul>
                                <li>
                                    <h4>Address:</h4>
                                    <span>
                                        PO Box 89, Surrey Downs SA, 5126
                                    </span>
                                </li>
                                <li>
                                    <h4>Email:</h4>
                                    <span className="emails">
                                        <p>
                                            risha.bhura@fourmoresupports.com.au
                                        </p>
                                        <p>info@fourmoresupports.com.au</p>
                                    </span>
                                </li>
                                <li>
                                    <h4>Phone:</h4>
                                    <span>+61 426393517</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot-foot">
                        <div className="code">ABN 15 101 252 171</div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur. Felis
                            vulputate facilisis ut nulla ut mauris metus
                            elementum
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right">
                Copyright 2024. FMS PTY LTD. | Disclaimer | Privacy policy |
                Terms & Conditions
            </div>
        </>
    );
};

export default Footer;
