// components/Projects.tsx
import FadeInWhenVisible from "./FadeInWhenVisible";
import Link from "next/link";

const projects = [
{
title: "Blog Creator",
description:
    "Full-stack blog publishing platform with Next.js and TypeScript. Integrated Kinde Authentication and Prisma ORM for secure, scalable content management. Responsive UI with Tailwind CSS and optimized performance with server-side rendering.",
tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Kinde"],
link: "https://github.com/BijouRaj/blog_creator",
},
{
title: "Minty Exterior",
description:
    "Location-based service discovery platform built with React, Next.js, and TypeScript. Integrated Firebase Authentication with credential + OTP login. Added tag-based filtering and map-snapping for enhanced usability.",
tech: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
link: "https://github.com/EPOK-BH25/whatsitgonnabe"
},
{
title: "BRIC App",
description:
    "University gym portal with Node.js + Railway backend. Designed multiple user flows and automated high-volume student login handling with secure credential storage.",
tech: ["Node.js", "JavaScript", "HTML/CSS", "Railway"],
link: "https://github.com/bimuk/4800-BRIC"
},
{
title: "LunarByte (Game)",
description:
    "Space-themed cooking/delivery game built with Unity. Designed and modeled 3D assets in Blender, integrated event-driven logic, and contributed to level design.",
tech: ["Unity", "C#", "Blender", "GitHub"],
link: "https://github.com/LunarByteCPP" 
},
];

export default function Projects() {
return (
<div className="max-w-6xl mx-auto py-16 px-4">
    <FadeInWhenVisible>
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
    </FadeInWhenVisible>
    <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
        <FadeInWhenVisible key = {index} delay = {index * 0.1}>
        <div
        key={index}
        className="border rounded-2xl p-6 shadow hover:shadow-lg transition"
        >
        <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
            <span
                key={i}
                className="text-sm bg-gray-100 px-2 py-1 rounded-md"
            >
                {t}
            </span>
            ))}
        </div>
        {project.link && (
            <Link
            href={project.link}
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
            >
            View on GitHub →
            </Link>
        )}
        </div>
        </FadeInWhenVisible>
    ))}
    </div>
</div>
);
}
