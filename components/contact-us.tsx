import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function GetInTouch() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Reach Us At</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">THANK YOU, AND WE LOOK FORWARD TO WORKING WITH YOU.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="border-l-4 border-accent pl-4 font-semibold text-secondary">Office Location</h3>
            <address className="mt-3 space-y-1 text-foreground/70 not-italic">
              <p>Emami City Tower,</p>
              <p>Floor-9, Room No.- 903,</p>
              <p>Jessore Road, Near Nager Bazar,</p>
              <p>Kolkata – 700028, W.B.</p>
            </address>
          </div>
          <div>
            <h3 className="border-l-4 border-accent pl-4 font-semibold text-secondary">Contact Person</h3>
            <ul className="mt-3 space-y-1 text-gray-600">
              <li>
                <a href="tel:+918420623902" className="hover:text-secondary">
                  <PhoneIcon className="h-5 w-5 inline mr-2 text-foreground/70" aria-hidden="true" />
                  Sukanya Guha Das - 8420623902
                </a>
              </li>
              <li>
                <a href="tel:+918017003737" className="hover:text-secondary">
                  <PhoneIcon className="h-5 w-5 inline mr-2 text-foreground/70" aria-hidden="true" />
                  Jolly Chakraborty - 8017003737
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="border-l-4 border-accent pl-4 font-semibold text-secondary">Email & Website</h3>
            <ul className="mt-3 space-y-1 text-gray-600">
              <li>
                <a href="mailto:uppraisalconsultant@gmail.com" className="hover:text-secondary">
                  <EnvelopeIcon className="h-5 w-5 inline mr-2 text-foreground/70" aria-hidden="true" />
                  uppraisalconsultant@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://uppraisalconsultant.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  <MapPinIcon className="h-5 w-5 inline mr-2 text-foreground/70" aria-hidden="true" />
                  uppraisalconsultant.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

