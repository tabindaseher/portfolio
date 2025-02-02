import Image from 'next/image'
import Link from 'next/link'
import portfolio from "../../../public/portfolio.webp"

const Hero = () => {
  return (
    <div>
             <section className="flex items-center justify-center text-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/portfolio.web")' }}>
    <div className="flex flex-col items-center">
        <Image
            src={portfolio} 
            alt="profile" 
            width={400} 
            height={400} 
            className="h-80 w-80 rounded-full mb-10 "
        />
        <h2 className="text-5xl font-extrabold mb-4">Hello, I&apos;m Tabinda Seher</h2>
        <p className="text-2xl mb-8 text-gray-800 font-bold">A passionate web developer and UI/UX designer with innovative solutions.</p>
        <div className="flex justify-center space-x-4">
            <Link href="/about" className="bg-pink-600 text-black  font-bold py-2 px-6 rounded-lg hover:bg-pink-700 transition">About Me</Link>
            <Link href="/contact" className="bg-pink-600 text-black font-bold py-2 px-6 rounded-lg hover:bg-pink-700 transition">Contact Me</Link>
        </div>
    </div>
 
</section>
    </div>
  )
}

export default Hero