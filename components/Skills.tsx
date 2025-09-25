// components/Skills.tsx
import FadeInWhenVisible from "./FadeInWhenVisible";

const skills = {
Languages: ["Python", "Java", "C#", "C++", "TypeScript", "SQL"],
"Web & Tools": ["React", "Next.js", "Node.js", "Firebase", "Tailwind CSS", "Prisma", "Git", "Railway"],
Other: ["Unity", "Blender"],
};

export default function Skills() {
return (
<div className="max-w-4xl mx-auto py-16 px-4">
    <FadeInWhenVisible>
    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
    </FadeInWhenVisible>
    <div className="grid md:grid-cols-3 gap-8 text-center">
    {Object.entries(skills).map(([category, items], index) => (
        <FadeInWhenVisible key = {index} delay = {index * 0.1}>
        <div key={index}>
        <h3 className="text-xl font-semibold mb-4">{category}</h3>
        <ul className="space-y-2 text-gray-700">
            {items.map((skill, i) => (
            <li key={i}>{skill}</li>
            ))}
        </ul>
        </div>
        </FadeInWhenVisible>
    ))}
    </div>
</div>
);
}
