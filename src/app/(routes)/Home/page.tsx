"use client"
import img from '../../../../public/img.jpeg'
const Home = () => {
  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://wallpapers.com/images/hd/goku-readyfor-action-aph1g8yp2w006hxu.jpg" alt="Deepak Logo" className="w-10 h-10 rounded-full border-2 border-white" />
            <span className="text-2xl font-bold text-white tracking-wide">Deepak</span>
          </div>
          <div className="flex space-x-8">
            <a href="#hero" className="text-white font-medium hover:text-gray-400 transition">Home</a>
            <a href="#skills" className="text-white font-medium hover:text-gray-400 transition">Skills</a>
            <a href="#projects" className="text-white font-medium hover:text-gray-400 transition">Projects</a>
            <a href="#contact" className="text-white font-medium hover:text-gray-400 transition">Contact</a>
            <a href="/About" className="text-white font-medium hover:text-gray-400 transition">About</a>
            <a href="/users/1" className="text-white font-medium hover:text-gray-400 transition">User</a>
          </div>
        </div>
      </nav>

      
      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <img src= "https://wallpapers.com/images/hd/goku-readyfor-action-aph1g8yp2w006hxu.jpg"alt="Deepak Avatar" className="w-36 h-36 rounded-full border-4 border-white shadow-xl mx-auto mb-6" />
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4">Deepak</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">Full Stack Developer | UI/UX Enthusiast | Open Source Contributor</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Deepak-5431" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 rounded-lg shadow hover:bg-gray-200 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/deepak-chand-27a241262/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 transition">LinkedIn</a>
            <a href="/Deepak_Resume.pdf" className="bg-gradient-to-r from-gray-700 to-black text-white px-5 py-2 rounded-lg shadow hover:from-black hover:to-gray-700 transition">Resume</a>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <span className="animate-bounce text-white text-4xl">&#8595;</span>
        </div>
      </section>
      
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center text-black mb-14 tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { name: "React", icon: "⚛️", color: "bg-gradient-to-r from-blue-500 to-indigo-700" },
            { name: "Next.js", icon: "⏭️", color: "bg-gradient-to-r from-gray-800 to-black" },
            { name: "TypeScript", icon: "🟦", color: "bg-gradient-to-r from-blue-700 to-blue-900" },
            { name: "TailwindCSS", icon: "🌬️", color: "bg-gradient-to-r from-gray-300 to-gray-500" },
            { name: "Node.js", icon: "🟩", color: "bg-gradient-to-r from-green-600 to-green-900" },
            { name: "MongoDB", icon: "🍃", color: "bg-gradient-to-r from-green-400 to-black" },
            { name: "Figma", icon: "🎨", color: "bg-gradient-to-r from-pink-500 to-purple-700" },
            { name: "Docker", icon: "🐳", color: "bg-gradient-to-r from-blue-400 to-blue-800" },
          ].map((skill) => (
            <div
              key={skill.name}
              className={`relative rounded-xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 border border-white ${skill.color}`}
            >
              <span className="text-6xl mb-4 text-white drop-shadow-lg">{skill.icon}</span>
              <span className="text-white font-semibold text-xl tracking-wide mb-2">{skill.name}</span>
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-white opacity-30 animate-pulse"></div>
            </div>
          ))}
        </div>
      </section>
      

      
      <section id="projects" className="bg-gradient-to-r from-black to-gray-900 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {[
            {
              title: "Video Uploader",
              desc: "A Next.js app for uploading and streaming videos with authentication.",
              link: "#",
            },
            {
              title: "Auth System",
              desc: "Secure authentication system using JWT and OAuth.",
              link: "#",
            },
            {
              title: "Portfolio Website",
              desc: "Personal portfolio built with React and TailwindCSS.",
              link: "#",
            },
            {
              title: "Open Source Contributions",
              desc: "Contributed to several popular repositories.",
              link: "#",
            },
          ].map((project) => (
            <div key={project.title} className="bg-black rounded-xl shadow-md p-8 hover:shadow-2xl transition duration-300 border border-white">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-5">{project.desc}</p>
              <a href={project.link} className="text-white font-medium hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Black & White Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-black rounded-xl shadow-lg p-10 flex flex-col space-y-6 border border-white">
          <input type="text" placeholder="Your Name" className="px-5 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-white bg-gray-900 text-white" />
          <input type="email" placeholder="Your Email" className="px-5 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-white bg-gray-900 text-white" />
          <textarea placeholder="Your Message" className="px-5 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-white bg-gray-900 text-white" rows={4} />
          <button type="submit" className="bg-gradient-to-r from-white to-gray-400 text-black px-8 py-3 rounded font-bold hover:from-gray-400 hover:to-white transition-colors duration-200">Send</button>
        </form>
      </section>

      {/* Black & White Footer */}
      <footer className="bg-black text-gray-400 py-8 text-center border-t border-white">
        &copy; {new Date().getFullYear()} Deepak. All rights reserved.
      </footer>
    </>
  )
}
export default Home;