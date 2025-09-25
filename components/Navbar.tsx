// components/Navbar.tsx
"use client";
import { useEffect, useState } from "react";
import { ModeToggle } from "./DarkToggler";

const sections = ["home", "about", "projects", "skills", "experience", "education", "contact"];

export default function Navbar() {
const [active, setActive] = useState("home");


useEffect(() => {
const handleScroll = () => {
    let current = "home";
    sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
        const offset = section.offsetTop - 100; // adjust for navbar height
        if (window.scrollY >= offset) {
        current = id;
        }
    }
    });
    setActive(current);
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
<nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
    <ul className="flex justify-center space-x-6 py-4 font-medium">
    {sections.map((sec) => (
        <li key={sec}>
        <a
            href={`#${sec}`}
            className={`${
            active === sec ? "text-blue-600 font-semibold" : "text-gray-700"
            } hover:text-blue-600 transition`}
        >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </a>
        </li>
        
    ))}

    <li>
        <ModeToggle />
    </li>
    </ul>

</nav>
);
}
