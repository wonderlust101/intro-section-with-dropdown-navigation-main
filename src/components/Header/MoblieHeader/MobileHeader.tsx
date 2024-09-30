import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Button from "../../Button/Button";
import menuIcon from "/images/icon-menu.svg";
import closeIcon from "/images/icon-close-menu.svg";
import dropdownArrowDark from "/images/icon-arrow-down.svg";
import "./MobileHeader.scss";

type mobileHeaderHeader = {
    links: links[];
}

export default function MobileHeader({links}: mobileHeaderHeader) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const menuVariants = {
        initial: {
            scaleX         : 0,
            opacity        : 0,
            transformOrigin: "right",
        },
        animate: {
            scaleX         : 1,
            opacity        : 1,
            transformOrigin: "right",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
        exit   : {
            scaleX         : 0,
            opacity        : 0,
            transformOrigin: "right",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
    };

    const subLinksListVariants = {
        initial: {
            scaleY         : 0,
            opacity        : 0,
            transformOrigin: "top",
        },
        animate: {
            scaleY         : 1,
            opacity        : 1,
            transformOrigin: "top",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
        exit   : {
            scaleY         : 0,
            opacity        : 0,
            transformOrigin: "top",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
    };

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <nav className="mobile-header">
            <img
                className="mobile-header__menu-icon"
                src={isOpen ? closeIcon : menuIcon}
                alt="Menu"
                onClick={() => setIsOpen(!isOpen)}
            />

            <AnimatePresence>
                {isOpen && <div className="mobile-header__modal-background"></div>}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="header-list"
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mobile-header__modal"
                    >
                        <ul className="mobile-header__page-links">
                            {links.map((link, index) => (
                                link.subLinks.length !== 0 ?
                                    (<li className="mobile-header__link-section" key={link.title}>
                                            <div className="mobile-header__link"
                                                 onClick={() => toggleAccordion(index)}
                                            >
                                                <p>{link.title}</p>

                                                <img
                                                    className={`mobile-header__arrow${activeIndex === index ? "--rotate" : "--normal"}`}
                                                    src={dropdownArrowDark}
                                                    alt="Toggle Dropdown"
                                                    role="presentation"
                                                />
                                            </div>

                                            <AnimatePresence>
                                                {activeIndex === index && (
                                                    <motion.ul
                                                        key="accordian"
                                                        variants={subLinksListVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        className="mobile-header__sub-links-list"
                                                    >
                                                        {link.subLinks.map((subLink) => (
                                                            <li key={subLink.title} className="mobile-header__sub-link">
                                                                {subLink.icon !== "" &&
                                                                    <img
                                                                        src={`/images/${subLink.icon}`}
                                                                        alt=""
                                                                        role="presentation"
                                                                    />
                                                                }

                                                                <a href={"#"}>
                                                                    {subLink.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ) : (
                                        <li>
                                            <a href="#">{link.title}</a>
                                        </li>
                                    )))}
                        </ul>

                        <ul className="mobile-header__account-links">
                            <li>
                                <a className="mobile-header__login" href="">Login</a>
                            </li>
                            <li>
                                <Button variant="button--white mobile-header__register" location="#">Register</Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
