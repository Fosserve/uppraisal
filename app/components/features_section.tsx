import { Briefcase, Users, Search } from "lucide-react"


const features = [
  {
    name: 'Permanent Staffing Solution(PSS)',
    description:
      'Find the perfect permanent talent for your organization with our comprehensive staffing solutions.',
    href: '#',
    icon: Briefcase,
  },
  {
    name: 'Training & Development',
    description: "Enhance your team's skills with our specialized training and development programs",
    href: '#',
    icon: Users,
  },
  {
    name: 'Executive Search',
    description: "Connect with top-tier executive talent through our specialized search services.",
    href: '#',
    icon: Search,
  },

]

export default function FeaturesSection() {
  return (
    <div className="relative bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-primary">WHAT WE DO</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our Areas Of Expertise
        </p>
        <p className="mx-auto mt-5 max-w-prose text-lg/8 text-muted-foreground">
          We conduct extensive search for quality candidates based on our client preferences and requirements for filling up various positions in their companies.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-card h-full px-6 pb-8 border border-border hover:shadow-lg transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-primary p-3 shadow-lg">
                        <feature.icon aria-hidden="true" className="size-8 text-primary-foreground" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-card-foreground">{feature.name}</h3>
                    <p className="mt-5 text-base/7 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
