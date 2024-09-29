import logo from "/images/logo.svg";
import linksJSON from "/src/data/links.json";
import "./Header.scss";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FullSizeHeader from "./FullSizeHeader";
import MobileHeader from "./MoblieHeader";

const links: links[] = linksJSON;

export default function Header() {
    const {height, width} = useWindowDimensions();

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img src={logo} alt="Snap Logo"/>

                {width >= 1024 ? (
                    <FullSizeHeader links={links}/>
                ) : (
                    <MobileHeader links={links}></MobileHeader>
                )}
            </div>
        </header>
    );
}

