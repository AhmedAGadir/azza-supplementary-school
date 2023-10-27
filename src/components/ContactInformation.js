import { Icon } from '@/components/Icon'
import { getItemData } from '@/lib/getItems'

export const ContactInformation = () => {
  const contact = getItemData('contact', 'global')
  return (
    <section className="relative -mb-52 w-full -translate-y-52 bg-white px-4 pt-56 sm:px-6 sm:pt-64 lg:px-8 lg:pt-72">
      {/* Contact information container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="h2 max-w-4xl text-purple-900">
              Contact information
            </h2>
          </div>
          <div className="mt-3 flex items-center sm:mt-4 lg:mt-0">
            <p className="text-lg text-purple-800 text-opacity-90 sm:text-xl">
              Reach out to us for any inquiries or support. We're here to assist
              and guide you through any needed information or help concerning
              our educational services and community involvement.
            </p>
          </div>
        </div>
        {/* Contact information cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6 lg:mt-20 lg:grid-cols-3 xl:gap-12">
          {/* Address card */}
          <div className="rounded-3xl bg-yellow-200 px-4 py-8 sm:col-span-2 sm:p-8 lg:col-span-1">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-8 w-8 text-purple-700" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
          {/* Email card */}
          <div className="rounded-3xl bg-purple-50 px-4 py-8 sm:col-span-2 sm:p-8 sm:py-10 lg:col-span-1">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-8 w-8 text-purple-700" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  Email us
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.email}
                </p>
              </div>
            </div>
          </div>
          {/* Phone number card */}
          <div className="rounded-3xl bg-rose-50 px-4 py-8 sm:col-span-2 sm:col-start-2 sm:p-8 sm:py-10 lg:col-span-1 lg:col-start-3">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-8 w-8 text-purple-700" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  Call us
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.phoneA}
                </p>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.phoneB}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google map widget */}
      <div className="mt-16 rounded-3xl lg:mx-auto lg:mt-24 lg:max-w-screen-xl">
        <iframe
          className="w-full rounded-3xl"
          height={600}
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_-A3f98PdkgR5Qn6SpOkZs0&key=${process.env.NEXT_PUBLIC_API_KEY}`}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}
