import Head from 'next/head'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='bg-purple-500'>
         <Head>
        <title>My Stylish Portfolio</title>
        <meta name="description" content="Welcome to my stylish portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="py-6">
        <div className="max-w-screen-xl mx-auto px-4  justify-between items-center hidden md:flex">
          <h1 className="text-4xl font-bold text-black">My Portfolio</h1>
          <ul className="flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-gray-300 text-gray-800 font-semibold">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300 text-gray-800 font-semibold">About</Link></li>
            <li><Link href="/project" className="hover:text-gray-300 text-gray-800 font-semibold"> Skills</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300 text-gray-800 font-semibold">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header