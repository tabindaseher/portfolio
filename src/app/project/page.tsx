import Image from 'next/image';


export default function Projects() {
  return (
    <div className=" text-white py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
    

      <section className="flex items-center justify-center" >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold underline">My Skills & Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">Take a look at my skillset and some of the projects I&apos;ve worked on. I&apos;m always improving and expanding my expertise!</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 md:px-16 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 underline">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Skill 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
             
              <h3 className="mt-4 text-xl  text-gray-800 font-bold">HTML</h3>
            </div>

            {/* Skill 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
           
              <h3 className="mt-4 text-xl  text-gray-800 font-bold">CSS</h3>
            </div>

            {/* Skill 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
          
              <h3 className="mt-4 text-xl  text-gray-800 font-bold">TypeScript</h3>
            </div>

            {/* Skill 4 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
            
              <h3 className="mt-4 text-xl  text-gray-800 font-bold ">React</h3>
            </div>

            {/* Skill 5 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
        
              <h3 className="mt-4 text-xl font-bold text-gray-800">Node.js</h3>
            </div>

            {/* Skill 6 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
           
              <h3 className="mt-4 text-xl font-bold text-gray-800">Tailwind CSS</h3>
            </div>

            {/* Skill 7 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
            
              <h3 className="mt-4 text-xl font-bold text-gray-800 ">NextJs</h3>
            </div>

            {/* Skill 8 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all hover:bg-pink-200">
             
              <h3 className="mt-4 text-xl font-bold text-gray-800 ">Bootstrap</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 underline">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/p1.PNG" alt="Project 1" width={1000} height={600} className="object-cover w-full h-full" />
           
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/p2.PNG" alt="Project 2" width={1000} height={600} className="object-cover w-full h-full" />
          
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/p3.PNG" alt="Project 3" width={1000} height={600} className="object-cover w-full h-full" />
            
            </div>
          </div>
        </div>
      </section>
   </div>
  );
}
