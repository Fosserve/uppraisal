export default function NewsLatter() {
    return (
      <div className="bg-secondary/30 rounded-md py-8 sm:py-16 lg:py-20 mb-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-textColor sm:text-3xl lg:col-span-7">
            Want product news and updates? Sign up for our newsletter.
          </h2>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-textColor outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-textColor">
              We care about your data. Read our{' '}
              <a href="#" className="font-semibold text-accent hover:text-secondary">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    );
  }
  