// components/About.tsx
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
return (
<div className="max-w-4xl mx-auto py-16 px-4">
    <FadeInWhenVisible>
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.1}>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
        I’m a software engineer with a strong foundation in full-stack
        development, data science, and game design. I recently graduated{" "}
        <span className="font-semibold">Summa Cum Laude</span> with a B.S. in
        Computer Science and a Minor in Data Science from Cal Poly Pomona.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
        I enjoy building robust applications that merge functionality with
        usability — from web platforms to satellite communication systems. My
        technical skills span languages like Python, Java, C#, C++, and
        TypeScript, as well as tools like React, Next.js, Node.js, Firebase, and
        Unity.
        </p>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.2}>
    <p className="text-lg text-gray-700 leading-relaxed">
    I’m currently seeking opportunities as a full-stack or backend
    developer, where I can contribute to solving complex problems and
    delivering impactful solutions.
    </p>
    </FadeInWhenVisible>
</div>
);
}
