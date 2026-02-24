import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Hero from './section/Hero'
import Trusting from './section/Trusting'
import Agent from './section/Agent'
import FromIdea from './section/FromIdea'
import UserAbout from './section/UserAbout'
import Faqs from './section/Faqs'
import OurPricing from './section/OurPricing'
import Ready from './section/Ready'


function App() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
        <div className="absolute rounded-full top-80 left-0 -translate-x-1/2 size-130 bg-bg-pink blur-[100px]"></div>
        <div className="absolute rounded-full top-80 left-0 -translate-x-1/2 size-130 bg-bg-purple blur-[100px]"></div>
        <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-bg-orange blur-[100px]"></div>
      </div>

      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Trusting />
              <Agent />
              <FromIdea />
              <UserAbout />
              <Faqs />
              <OurPricing />
              <Ready />
            </>
          }/>
        </Routes>
      </Layout>
    </>
  )
}

export default App