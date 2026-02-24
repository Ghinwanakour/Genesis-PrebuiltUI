import MainTitle from '../shared/MainTitle'
import Card from '../shared/Card'



function Agent() {
  const features = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot size-8.5" aria-hidden="true"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>),
      title: 'Autonomous Agents',
      desc: 'Agents that plan, execute & think step-by-step.'
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain size-8.5" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>),
      title: 'Memory & Learning',
      desc: 'Agents retain memory and improve over time.'
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap size-8.5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>),
      title: 'Real-time Execution',
      desc: 'Fast responses with async task processing.'
    }
  ]

  return (
    <section className="mt-32">
      <MainTitle 
        title="Agent features"
        description="Design AI assistants that research, plan, and execute tasks — all powered by your prompts."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
        {features.map((feat, index) => (
          <Card key={index} className="max-w-80 w-full glass space-y-4 rounded-xl p-6 hover:-translate-y-0.5 transition duration-300">
            <div className="text-4xl mb-4">{feat.icon}</div>
            <h3 className="text-base font-medium text-white mb-2">{feat.title}</h3>
            <p className="text-gray-100 line-clamp-2 pb-2">{feat.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Agent