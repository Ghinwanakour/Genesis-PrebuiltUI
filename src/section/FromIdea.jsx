import React from 'react'
import MainTitle from '../shared/MainTitle'
import workflow1 from '../assets/image/workflow1.png' 
import workflow2 from '../assets/image/workflow2.png'
import workflow3 from '../assets/image/workflow3.png'

function FromIdea() {
  const steps = [
    {
      num: '01',
      title: 'Start with a prompt',
      desc: 'Start with a simple prompt describing what you want your agent to do. Our builder interprets your idea and creates the structure for you in seconds',
      img: workflow1 
    },
    {
      num: '02',
      title: 'Adjust and personalize',
      desc: 'Adjust tasks, actions and integrations. Add personality, rules and data sources to make the agent work exactly the way you want.',
      img: workflow2
    },
    {
      num: '03',
      title: 'Launch & Automate',
      desc: 'Deploy your agent and let it run. It executes tasks autonomously, reports results, and continues working in the background.',
      img: workflow3
    }
  ]

   return (
    <section className="mt-32 relative">
      <div className="text-center">
        <MainTitle 
          title="From idea to autonomous agent quickly and effortlessly."
        />
        <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
          Empower your business with AI agents that optimize processes and accelerate performance.
        </p>
      </div>

      <div className="relative space-y-20 md:space-y-30 mt-20">
        <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                {step.num}
              </p>
              {index < steps.length - 1 && (
                <div className="h-72 w-0.5 bg-linear-to-b from-transparent via-white to-transparent"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex items-center justify-center gap-6 md:gap-20 flex-col ${
              index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <img 
              src={step.img}
              alt={step.title}
              className="flex-1 h-auto w-full max-w-sm rounded-2xl"
            />

            <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
              <h3 className="text-[24px] font-medium text-white">{step.title}</h3>
              <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">{step.desc}</p>
              
              <a href="#" className="flex items-center gap-2 mt-2 hover:underline">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link size-4" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FromIdea