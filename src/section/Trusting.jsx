import React from 'react'
import company1 from '../assets/image/company-logo-1.svg'
import company2 from '../assets/image/company-logo-2.svg'
import company3 from '../assets/image/company-logo-3.svg'
import company4 from '../assets/image/company-logo-4.svg'
import company5 from '../assets/image/company-logo-5.svg'

function Trusting() {
  const companies = [
    { id: 1, logo: company1 },
    { id: 2, logo: company2 },
    { id: 3, logo: company3 },
    { id: 4, logo: company4 },
    { id: 5, logo: company5 }
  ]

  return (
    <section className="mt-14">
      <p className="text-center py-6">Trusted by leading brands, including —</p>
      
      <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4">
        {companies.map(company => (
          <img 
            key={company.id}
            src={company.logo}
            alt={`company-${company.id}`}
            className="h-7 w-auto"
          />
        ))}
      </div>
    </section>
  )
}

export default Trusting