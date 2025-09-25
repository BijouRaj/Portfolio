// components/Contact.tsx
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Contact() {
return (
<div className="max-w-3xl mx-auto py-16 px-4 text-center">
    <FadeInWhenVisible>
    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
    </FadeInWhenVisible>
    <FadeInWhenVisible delay = {0.1}>
    <p className="text-lg text-gray-700 mb-6">
    I’m always open to discussing new opportunities, collaborations, or
    projects. Feel free to reach out!
    </p>
    </FadeInWhenVisible>
    <div className="space-y-4">
    <FadeInWhenVisible delay = {0.2}>
    <p>
        📧 <a href="mailto:bijoubraj@gmail.com" className="text-blue-600 hover:underline">
        bijoubraj@gmail.com
        </a>
    </p>
    </FadeInWhenVisible>
    <FadeInWhenVisible delay = {0.3}>
    <p>
        🖥 <a href="https://github.com/BijouRaj" target="_blank" className="text-blue-600 hover:underline">
        github.com/BijouRaj
        </a>
    </p>
    </FadeInWhenVisible>
    <FadeInWhenVisible delay = {0.4}>
    <p>
        🔗 <a href="https://www.linkedin.com/in/bijou-raj-5b2a632bb/" target="_blank" className="text-blue-600 hover:underline">
        LinkedIn Profile
        </a>
    </p>
    </FadeInWhenVisible>
    </div>
</div>
);
}
