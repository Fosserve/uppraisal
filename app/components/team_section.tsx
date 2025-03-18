import image1 from "../../public/team/img1.jpg";
import image2 from "../../public/team/image2.jpg";


const people = [
  {
    name: 'Jolly Chakraborty',
    role: 'Founder & Director',
    imageUrl: image1.src,
    bio: 'Jolly Chakraborty passed PGPRM from IISWBM Kolkata. She has extensive experience in the Manufacturing and Recruitment industry, specializing in HR & Administration, Recruitment, and Training Development. She has been running Uppraisal Consultant since 2015, overseeing client relations, team management, and business administration.',
  },
  {
    name: 'Sukanya Guha Das',
    role: 'Co-Founder & HR Head',
    imageUrl:image2.src,
    bio: 'Sukanya Guha Das holds an MBA in HR from EIM Kolkata. She has extensive experience in the Software, Hospitality, and Recruitment industries, specializing in HR & Administration, Recruitment, and Training Development. She has been running Uppraisal Consultant since 2015, managing client relations, team operations, and business administration.',
  }
  ]
  
  export default function TeamSection() {
    return (
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col items-center justify-center gap-6 xl:flex-row">
                <img alt={person.name} src={person.imageUrl} className=" aspect-5/4 w-[230px] size-56 rounded-full object-cover" />
                <div className="flex flex-col xl:max-w-[350px]">
                  <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base/7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base/7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  