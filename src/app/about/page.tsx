import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <Image
                src="/portfolio.webp" 
                alt="Your Photo"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold  mb-4">Hi, I&apos;m Tabinda Seher</h2>
              <p className="text-lg  mb-6 leading-relaxed">
                I&apos;m a <span className="font-bold text-pink-900">web developer</span> with a passion for creating intuitive and <span className="text-purple-800 font-bold">responsive websites</span>. I focus on writing <span className="italic text-gray-800 font-bold">clean, efficient code</span> and designing <span className=" text-blue-800 font-bold">user-friendly interfaces</span>.
              </p>
              <p className="text-lg  mb-8 leading-relaxed">
                When I&apos;m not coding, you can find me exploring <span className="text-pink-900 font-bold">new design trends</span>, learning new technologies, or building side projects to improve my skills. I believe in <span className="italic font-bold text-gray-900">continuous learning</span> and always strive to push my limits.
              </p>
              <p className="text-lg  mb-4 leading-relaxed">
                My goal is to build applications that not only look great but also <span className="text-blue-800 font-bold">perform seamlessly</span> and are accessible to all users. I&apos;m constantly evolving, and I love collaborating with teams who share the same passion for building impactful solutions.
              </p>

              <p className="text-lg mb-8">I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me anytime!</p>
              <Link href="/contact" className="inline-block bg-pink-600 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700 transition">
               Send an Email
             </Link>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  )
}

export default About
