import MainTitle from '../shared/MainTitle'
import Card from '../shared/Card'
import Button from '../shared/Button'

function OurPricing() {
  const plans = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket size-3.5" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>),
      name: 'Starter',
      price: '$19',
      desc: 'For individuals and small teams',
      features: ['Up to 10 projects', '10 AI tasks/month', 'Basic text generation','Simple chatbot access','Email support only','Community resources']
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap size-3.5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>),
      name: 'Professional',
      price: '$49',
      desc: 'For growing teams and startups',
      features: ['Unlimited AI tasks', 'API integration', 'Text & image outputs','Priority chat & email support','Detailed analytics','Team collaboration'],
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown size-3.5" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>),
      name: 'Enterprise',
      price: '$149',
      desc: 'For enterprises and agencies',
      features: ['Custom AI models', 'Team access control', 'Dedicated account manager','Secure private API','SLA uptime guarantee','24/7 premium support']
    }
  ]

 return (
    <section className="mt-32">
      <MainTitle 
        title="Our Pricing Plans"
        description="A visual collection of our most recent works - each piece crafted with intention, emotion and style."
      />

      <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
        {plans.map((plan, index) => (
          <Card key={index} className="max-w-80 w-full relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
           

            <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
              {plan.icon}
              <span>{plan.name}</span>
            </div>
            
            <div className="mb-2">
              <span className="mt-4 text-[25px] font-semibold">{plan.price} </span>
              <span className="text-sm font-normal text-gray-300">/month</span>
            </div>

            <p className="text-gray-200 mb-6">{plan.desc}</p>

            <Button className={`w-full mb-6 py-2.5 px-8 font-medium ${plan.name === "Professional" ? "bg-white! text-gray-800! hover:bg-gray-100! rounded-md!" : "rounded-md! text-white"}`}>
              {plan.name === "Enterprise"? "Contact Sales": plan.name === "Professional"? "Upgrade Now": "Get Started"}
            </Button>
            
            <div className="space-y-2">
              {plan.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <div className="glass rounded-full border-0 p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                  </div>
                  <p>{feat}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default OurPricing