import hero from '../assets/images/Queens+33+Dublin+Uni+14-85.webp';
import ReactMarkdown from 'react-markdown';
import membershipContent from '../content/pages/membership.md?raw';

export default function Membership() {
    return (
        <div className="text-white">

      {/* Hero */}
      <section className="w-full relative">
        <img src={hero} alt="Membership" className="w-full h-[60vh] object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold uppercase">
          Membership
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert text-center">
        <ReactMarkdown>{membershipContent}</ReactMarkdown>
      </section>

    </div>
    );
}