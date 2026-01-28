import Image from "next/image";
import image1 from "../../public/team/image1.jpg";
import image2 from "../../public/team/image2.jpg";


const people = [
  {
    name: 'Jolly Chakraborty',
    role: 'Founder & Director',
    imageUrl: image1,
    bio: 'Jolly Chakraborty passed PGPRP from IISWBM Kolkata. She has extensive experience in the Manufacturing and Recruitment industry, specializing in HR & Administration, Recruitment, and Training Development. She has been running Uppraisal Consultant since 2015, overseeing client relations, team management, and business administration.',
  },
  {
    name: 'Sukanya Guha Das',
    role: 'Co-Founder & HR Head',
    imageUrl: image2,
    bio: 'Sukanya Guha Das holds an MBA in HR from EIM Kolkata. She has extensive experience in the Software, Hospitality, and Recruitment industries, specializing in HR & Administration, Recruitment, and Training Development. She has been running Uppraisal Consultant since 2015, managing client relations, team operations, and business administration.',
  }
]

export default function TeamSection() {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image alt={person.name} src={person.imageUrl} className="aspect-4/5 w-52 flex-none rounded-2xl object-cover shadow-lg" placeholder="blur" />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-foreground">{person.name}</h3>
                <p className="text-base/7 text-primary">{person.role}</p>
                <p className="mt-6 text-base/7 text-muted-foreground">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
