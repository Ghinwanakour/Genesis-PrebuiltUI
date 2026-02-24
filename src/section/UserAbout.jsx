import Title from '../shared/MainTitle'
import Card from '../shared/Card'

function UsersAbout() {
  const testimonials = [
    {
      name: 'Richard Nelson',
      role: 'Founder & CEO',
      text: '“Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!”',
      img: '/src/assets/image/photo-1633332755192-727a05c4013d.jfif'
    },
    {
      name: 'Sophia Martinez',
      role: 'Founder & CEO',
      text: '“The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!”',
      img: '/src/assets/image/photo-1535713875002-d1d0cf377fde.jfif'
    },
    {
      name: 'Ethan Roberts',
      role: 'Founder & CEO',
      text: '“Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.”',
      img: '/src/assets/image/imgi_1_photo-1527980965255-d3b416303d12.png'
    },
    {
      name: 'Isabella Kim',
      role: 'Founder & CEO',
      text: '“Clean, elegant, and efficient. These components are a dream for any modern web developer who values beautiful code.”',
      img: '/src/assets/image/imgi_1_photo-1522075469751-3a6694fb2f61.png'
    },
    {
      name: 'Liam Johnson',
      role: 'Founder & CEO',
      text: "“I've tried dozens of UI kits, but this one just feels right. Everything works seamlessly and looks incredibly polished.”",
      img: '/src/assets/image/imgi_1_photo-1438761681033-6461ffad8d80.jfif'
    },
    {
      name: 'Ava Patel',
      role: 'Founder & CEO',
      text: '“Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.”',
      img: '/src/assets/image/userImage1.png'
    }
  ]

  return (
    <section className="mt-32 flex flex-col items-center">
      <Title 
        title="Here what aur trusted users about our best AI agents."
        description="Empower your business with AI agents that optimize processes and accelerate performance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, index) => (
          <Card key={index} className="p-5 w-full max-w-88 space-y-5 rounded-lg glass transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium">{t.role}</p>
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
            </div>
            <p className="line-clamp-3">{t.text}</p>
            <p className="text-gray-300">- {t.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default UsersAbout