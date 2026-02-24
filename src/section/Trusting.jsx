function Trusting() {
  const companies = [1, 2, 3, 4, 5]

  return (
    <section className="mt-14">
      <p className="text-center py-6">Trusted by leading brands, including —</p>
      
      <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4">
        {companies.map(num => (
          <img 
            key={num}
            src={`/src/assets/image/company-logo-${num}.svg`}
            alt={`company-${num}`}
            className="h-7 w-auto"
          />
        ))}
      </div>
    </section>
  )
}

export default Trusting