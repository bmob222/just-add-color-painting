import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Just Add Color Painting LLC',
  description: 'Professional painting services including interior, exterior, commercial painting, and cabinet refinishing. Quality craftsmanship guaranteed.',
}

const services = [
  {
    id: 'interior',
    name: 'Interior Painting',
    tagline: 'Transform Your Living Spaces',
    description: 'Create the perfect atmosphere in every room of your home with our professional interior painting services. From accent walls to complete home makeovers, we deliver flawless results.',
    features: [
      'Living rooms, bedrooms, and dining areas',
      'Kitchen and bathroom painting',
      'Ceiling and trim work',
      'Accent walls and feature designs',
      'Color consultation included',
      'Furniture protection and room prep',
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    tagline: 'Protect & Beautify Your Home',
    description: 'Your home\'s exterior is the first thing people see. Our exterior painting services protect your investment while boosting curb appeal with weather-resistant, long-lasting finishes.',
    features: [
      'Full house exterior painting',
      'Siding, stucco, and brick surfaces',
      'Trim, fascia, and soffit',
      'Deck and fence staining',
      'Pressure washing prep',
      'Weather-resistant premium paints',
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 'commercial',
    name: 'Commercial Painting',
    tagline: 'Professional Spaces, Professional Results',
    description: 'Make the right impression on clients and employees with our commercial painting services. We work efficiently to minimize disruption to your business operations.',
    features: [
      'Office buildings and workspaces',
      'Retail stores and showrooms',
      'Restaurants and hospitality',
      'Healthcare and medical facilities',
      'After-hours and weekend scheduling',
      'Minimal business disruption',
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: 'cabinets',
    name: 'Cabinet Refinishing',
    tagline: 'Refresh Without Replacing',
    description: 'Give your kitchen or bathroom a dramatic makeover without the cost of new cabinets. Our expert refinishing transforms tired cabinets into beautiful focal points.',
    features: [
      'Kitchen cabinet painting',
      'Bathroom vanity refinishing',
      'Built-in shelving and bookcases',
      'Hardware updates available',
      'Color matching expertise',
      'Smooth, factory-like finish',
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
    ),
  },
]

const additionalServices = [
  'Wallpaper removal',
  'Drywall repair',
  'Popcorn ceiling removal',
  'Power washing',
  'Color consultation',
  'Texture matching',
]

const process = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'We visit your property, discuss your vision, and provide expert color recommendations.',
  },
  {
    step: 2,
    title: 'Detailed Quote',
    description: 'Receive a comprehensive, no-obligation quote with transparent pricing and timeline.',
  },
  {
    step: 3,
    title: 'Expert Preparation',
    description: 'We carefully prepare surfaces, protect your belongings, and ensure optimal conditions.',
  },
  {
    step: 4,
    title: 'Quality Execution',
    description: 'Our skilled painters apply premium paints with precision and attention to detail.',
  },
  {
    step: 5,
    title: 'Final Walkthrough',
    description: 'We review the completed work together to ensure your complete satisfaction.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Professional painting solutions for every project, from cozy bedrooms to sprawling commercial spaces.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-lg text-primary-600 font-medium">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-gray-600 text-lg">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary">
                      Get a Quote for {service.name}
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      {service.icon}
                      <p className="mt-4 text-lg font-medium opacity-90">{service.name} image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Additional Services</h2>
            <p className="mt-4 section-subheading mx-auto">
              We offer a range of complementary services to complete your project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service) => (
              <div key={service} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Process</h2>
            <p className="mt-4 section-subheading mx-auto">
              A seamless experience from first contact to final walkthrough.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step) => (
                <div key={step.step} className="relative text-center">
                  <div className="relative z-10 mx-auto w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Get a free, no-obligation quote today. We're excited to bring color to your world!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:+18609366338" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Call (860) 936-6338
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
