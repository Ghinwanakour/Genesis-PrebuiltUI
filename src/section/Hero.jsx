import Button from '../shared/Button'

function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center gap-3 mt-32">
        <p>Smart, Fast, Always Active.</p>
        <Button className=" text-xs border! border-white/20! py-1! px-3!">Launch App</Button>
      </div>

      <h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold max-w-3xl tracking-tight">
        Build, Deploy & Talk to AI Agents in Seconds.
      </h1>

      <p className="text-center text-gray-100 max-w-md mt-6 text-base/7">
        Design AI assistants that research, plan, and execute tasks — all powered by your prompts.
      </p>

      <div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6 ">
        <Button className="btn max-md:w-full glass py-3 border! border-white/30!">Create Agent</Button>
        <Button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3 border! border-white/30!">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
          Watch Demo
        </Button>
      </div>
    </section>
  )
}

export default Hero