import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Just Add Color Painting LLC',
  description: 'Learn about Just Add Color Painting LLC - our story, our team, and our commitment to quality craftsmanship in every painting project.',
}

const values = [
  {
    title: 'Quality First',
    description: 'We never cut corners. Every project receives our full attention and the best materials available.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. We listen, communicate, and deliver exactly what you envision.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: 'Professional Team',
    description: 'Our painters are trained, experienced, and take pride in their craft. Background checked and insured.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Conscious',
    description: 'We use low-VOC and eco-friendly paints whenever possible, protecting your family and the environment.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  },
]

const featuredProjects = [
  {
    title: 'Modern Living Room',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    description: 'Complete transformation with contemporary neutrals',
  },
  {
    title: 'Elegant Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    description: 'Cabinet refinishing in crisp white',
  },
  {
    title: 'Cozy Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    description: 'Calming palette for better sleep',
  },
]

const certifications = [
  'Licensed Painting Contractor',
  'Fully Insured & Bonded',
  'EPA Lead-Safe Certified',
  'BBB Accredited Business',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            More than painters – we're your partners in bringing color and life to your spaces.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <div className="mt-6 space-y-4 text-gray-600 text-lg">
                <p>
                  Just Add Color Painting LLC was founded with a simple belief: everyone deserves a beautiful space that reflects their personality and style. What started as a one-person operation has grown into a team of dedicated professionals who share a passion for transforming spaces.
                </p>
                <p>
                  Over the years, we've painted hundreds of homes and businesses, each project teaching us something new about the art and science of color. We've seen how the right shade of paint can change not just a room, but how people feel in it.
                </p>
                <p>
                  Today, we continue to approach every project with the same enthusiasm and attention to detail that we brought to our very first job. Because at the end of the day, we're not just painting walls – we're helping create spaces where memories are made.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
                  alt="Professional painting work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Values</h2>
            <p className="mt-4 section-subheading mx-auto">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="mt-4 section-subheading mx-auto">
              A glimpse of the transformations we've created for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold text-white">Licensed, Insured & Certified</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <svg className="h-5 w-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="section-heading">Our Commitment to You</h2>
          <div className="mt-8 text-lg text-gray-600 space-y-4">
            <p>
              When you choose Just Add Color Painting LLC, you're choosing more than a painting service – you're choosing a partner who cares about your home or business as much as you do.
            </p>
            <p>
              We promise to arrive on time, communicate clearly, work efficiently, and leave your space cleaner than we found it. We stand behind our work with a satisfaction guarantee because we're not happy until you are.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { label: 'Satisfaction Guarantee', value: '100%' },
              { label: 'On-Time Arrival', value: '99%' },
              { label: 'Customer Referrals', value: '85%' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-display font-bold text-primary-600">{stat.value}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Let's Work Together
          </h2>
          <p className="mt-6 text-lg text-white/90">
            We'd love to hear about your project and show you why so many customers trust Just Add Color.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg inline-block">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
