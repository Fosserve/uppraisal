import image1 from "../../public/team/img1.jpg";
import image2 from "../../public/team/image2.jpg";

const people = [
  {
    name: "Jolly Chakraborty",
    role: "Founder & Director",
    imageUrl: image1.src,
    bio: 'Jolly Chakraborty passed PGPRM from IISWBM Kolkata. She has extensive experience in the Manufacturing and Recruitment industry, specializing in HR & Administration, Recruitment, and Training Development. She has been running Uppraisal Consultant since 2015, overseeing client relations, team management, and business administration.',
  },
  {
    name: "Sukanya Guha Das",
    role: "Co-Founder & HR Head",
    imageUrl: image2.src,
    bio: "Sukanya Guha Das holds an MBA in HR from EIM Kolkata. She has extensive experience in the Software, Hospitality, and Recruitment industries, specializing in HR & Administration, Recruitment, and Training Development. She has been running Uppraisal Consultant since 2015, managing client relations, team operations, and business administration.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We’re a dynamic group of professionals dedicated to delivering exceptional results for our clients.
          </p>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-16">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center space-y-6 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-8"
            >
              <img
                alt={person.name}
                src={person.imageUrl}
                className="h-68 w-48 rounded-full object-cover  shadow-lg"
              />
              <div className="max-w-md lg:text-left">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm font-medium text-blue-600">{person.role}</p>
                <p className="mt-4 text-gray-500 text-md  font-serif">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
