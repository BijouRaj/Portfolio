// components/Hero.tsx
"use client";

export default function Hero() {
return (
<div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
    Bijou Raj
    </h1>
    <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
    Software Engineer • Full Stack Developer
    </h2>
    <p className="max-w-2xl text-gray-700 mb-8">
    I build scalable applications and intuitive user experiences. With
    experience across web, backend, and game development, I’m passionate
    about solving real-world problems through code.
    </p>
    <div className="flex space-x-4">
    <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
        View Projects
    </a>
    <a
        href="/Bijou_Raj_Resume.pdf"
        target="_blank"
        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
    >
        Download Resume
    </a>
    </div>
</div>
);
}
