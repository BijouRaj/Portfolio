// components/Education.tsx
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Education() {
return (
<div className="max-w-4xl mx-auto py-16 px-4">
    <FadeInWhenVisible>
    <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
    </FadeInWhenVisible>
    <div className="space-y-8">
        <FadeInWhenVisible delay = {0.1}>
    <div>
        <h3 className="text-2xl font-semibold">
        California Polytechnic University, Pomona
        </h3>
        <p className="italic text-gray-600">B.S. Computer Science, Minor in Data Science</p>
        <p className="text-gray-700">Summa Cum Laude | GPA: 3.94 | Graduated May 2025</p>
        <p className="text-gray-700 mt-2">
        Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming,
        Software Engineering, Big Data Analysis
        </p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay = {0.2}>
    <div>
        <h3 className="text-2xl font-semibold">Moorpark College</h3>
        <p className="italic text-gray-600">A.S. Computer Science</p>
        <p className="text-gray-700">GPA: 3.89 | May 2023</p>
        <p className="text-gray-700 mt-2">
        Relevant Coursework: Discrete Structures, Computer Organization and Assembly, Linear Algebra
        </p>
    </div>
    </FadeInWhenVisible>
    </div>
</div>
);
}
