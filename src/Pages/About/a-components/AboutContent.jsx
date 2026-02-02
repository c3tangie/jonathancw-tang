import React from 'react'

const AboutContent = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://via.placeholder.com/400x500" 
            alt="Profile"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Hi, I'm [Your Name]</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a passionate developer with a love for creating beautiful and functional web experiences. 
            With a background in [Your Background], I bring a unique perspective to every project I work on.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Over the years, I've honed my skills in various technologies and frameworks, always staying 
            curious and eager to learn new things. My goal is to build products that make a difference 
            and solve real-world problems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in continuous 
            learning and collaboration, and I'm always excited to take on new challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
