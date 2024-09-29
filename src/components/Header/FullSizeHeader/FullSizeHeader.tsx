import {useState} from "react";
import HeaderLink from "./HeaderLink";
import Button from "../../Button";
import "./FullSizeHeader.scss";

type fullSizeHeader = {
    links: links[];
}

export default function FullSizeHeader({links}: fullSizeHeader) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (header: string) => {
        setOpenDropdown((prev) => (prev === header ? null : header));
    };

    return (
        <nav className="full-sized-header">
            <ul className="full-sized-header__page-links">
                {links.map((link) => (
                    link.subLinks.length !== 0 ? (
                        <HeaderLink
                            key={link.title}
                            link={link}
                            isOpen={openDropdown === link.title}
                            onToggle={() => handleDropdownToggle(link.title)}
                            closeDropdown={() => setOpenDropdown(null)}
                        />
                    ) : (
                        <li>
                            <a href="#">{link.title}</a>
                        </li>
                    )))}
            </ul>

            <div className="header__account-links">
                <a href="#">Login</a>
                <Button variant="button--white">Register</Button>
            </div>
        </nav>
    );
}