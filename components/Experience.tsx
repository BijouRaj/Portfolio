// components/Experience.tsx
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Experience() {
return (
<div className="max-w-4xl mx-auto py-16 px-4">
    <FadeInWhenVisible>
    <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
    </FadeInWhenVisible>
    <div className="space-y-8">
    <FadeInWhenVisible delay = {0.1}>
    <div>
        <h3 className="text-2xl font-semibold">CubeSTEP</h3>
        <p className="italic text-gray-600">
        Ground Station & Mission Control Team Lead | Feb 2024 – May 2025
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
        <li>
            Led automation of ground station design and communication protocols
            for CubeSAT launch.
        </li>
        <li>
            Collaborated cross-functionally to meet aerospace mission standards.
        </li>
        <li>
            Authored mission-critical documentation and managed FCC licensing.
        </li>
        </ul>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay = {0.2}>
    <div>
        <h3 className="text-2xl font-semibold">Target</h3>
        <p className="italic text-gray-600">
        Guest Service Advocate | Jul 2019 – Aug 2023
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
        <li>Delivered excellent customer support and service resolution.</li>
        <li>Trained and onboarded new team members.</li>
        <li>Handled returns, inventory, and fast-paced problem solving.</li>
        </ul>
    </div>
    </FadeInWhenVisible>
    </div>
</div>
);
}
