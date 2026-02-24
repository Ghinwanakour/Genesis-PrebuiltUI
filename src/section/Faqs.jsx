import { useState } from 'react'
import MainTitle from '../shared/MainTitle'

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'Do I need coding or design experience to use PrebuiltUI?',
      a: "Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design skills aren't required. You can use components as-is or customize them."
    },
    {
      q: 'What is PrebuiltUI and how does it help developers and designers?',
      a: 'PrebuiltUI provides ready-to-use, customizable UI components and templates, saving time for developers and designers.'
    },
    {
      q: 'Can I use PrebuiltUI components in my existing project?',
      a: 'Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS.'
    },
    {
      q: 'How customizable are the generated components?',
      a: 'Components are highly customizable with Tailwind utility classes, theming, and structural adjustments.'
    },
    {
      q: 'Does PrebuiltUI support team collaboration?',
      a: "There's no clear documentation on built-in collaboration features. Check their support for team options."
    },
    {
      q: 'Can I try PrebuiltUI before purchasing a plan?',
      a: 'Yes, you can try PrebuiltUI with full access to features.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="mt-32">
      <MainTitle 
        title="FAQ's"
        description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find."
      />

      <div className="max-w-xl mx-auto mt-12 space-y-4 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="glass rounded-md flex flex-col">
            <div 
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-white/10"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-medium">{faq.q}</h3>
              <span className={`transform transition-transform duration-400 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>

            {openIndex === index && (
              <p className="px-4 pb-4 text-sm/6 transition-all duration-400 max-h-80 text-gray-100">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faqs