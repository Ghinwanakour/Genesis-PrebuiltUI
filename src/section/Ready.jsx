import Button from '../shared/Button'

function Ready() {
  return (
    <div className="max-w-5xl mx-auto mt-40 px-4">
      <div className="glass rounded-xl py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-medium">Ready to build?</h2>
        <p className="mt-4 max-w-md mx-auto">
          See how fast you can turn your ideas into reality. Get started for free, no credit card required.
        </p>
        <Button className="flex items-center gap-2 mx-auto mt-8 border! border-white/30!">
          Try now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Ready