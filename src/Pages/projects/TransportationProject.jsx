import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'
import tp1 from '@assets/tp_1.png'
import tp2 from '@assets/tp_2.png'
import tp4 from '@assets/tp_4.png'

const TransportationProject = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/projects')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <section className="max-w-7xl mx-auto sm:px-10 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Transportation Impacts Video Project (December 2025)</h2>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        This video project explores the social and environmental impacts of a transportation-related project, created for CIV331: Transport I – Introduction to Transportation Systems. It challenged us to move beyond classroom concepts and investigate real-world consequences shaped by transportation infrastructure, from emissions and environmental impact to community well-being and equity. For the project, we focused on an ongoing or completed public transportation project, analyzing its social and environmental impacts in a short video format.
      </p>

      <img src={tp1} className="float-left mr-6 mb-12 w-80 sm:w-96 aspect-square object-cover rounded-lg shadow-lg" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Which transportation project did we choose?</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-12">
        For this project, our group chose to study the Ontario Line. The reason why is because it represents one of the most significant transportation interventions in Toronto's recent history and one that directly affects our lived experience as daily TTC riders. Line 1 overcrowding, unreliable travel times, and bottlenecks like the Millwood Road Bridge are issues we encountered firsthand, making this project both personally relevant and technically compelling to analyze.
      </p>
      <div className="clear-both"></div>

      <img src={tp2} className="float-right ml-8 mt-8 mb-12 h-80 sm:h-96 w-[350px] sm:w-[500px] object-cover rounded-lg shadow-lg" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">My Role and Filming the Video</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-12">
        For this project, my main responsibility was serving as the group's video editor, which meant shaping the video's format, flow, pacing, and content visualization. I also handled much of the filming. This included documenting the heavy construction presence around neighbourhoods like Thorncliffe Park and Flemingdon Park, where community spaces were surrounded by barriers. I also assisted in filming the overcrowding shots of Lines 1 and 2 at Bloor–Yonge station during the Wednesday afternoon peak hours. Gathering these visuals gave our team firsthand material to work with and helped us present the transportation impacts in a way that felt real and connected to lived experience.
      </p>
      <div className="clear-both"></div>

      <img src={tp4} className="float-left mr-8 mt-9 mb-12 h-80 sm:h-80 w-[350px] sm:w-[470px] object-cover rounded-lg shadow-lg" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Philosophy of the Finalized Video Format</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-12">
        In the initial assignment criteria, the instructing team wanted us to be as creative as we can. And during the editing of the video, I wanted to create something that is unique and diverse whilst at the same time, wouldn't require too much extra time to do so. During the production of the video, time was a very important factor and we had a very little amount of it. In the end, our group decided to make the video a b-roll format with the addition of a comedy skit in the intro to hook the audience in. This would allow the video to be educational in a fun and positive way that doesn't feel forced or rushed. I tried to be as creative as I could by using my video editing skills to make the comedic jokes as funny and organic as possible, and it proved to be a success.
      </p>
      <div className="clear-both"></div>

      {/* Video Player */}
          <div className="float-right mt-8 mb-12 ml-8 w-[500px] sm:w-[600px] h-[380px] sm:h-[452px] rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src="https://drive.google.com/file/d/1A4j9Gl2Z9Grtg6yeV-J0GTFZqDdkm5UH/preview"
              title="Transportation Impacts Video"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What this project taught me </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Looking back on this project, what stood out to me most was how much intention goes into telling a clear and meaningful story about transportation. Every shot we captured, every edit we made, and every idea we shaped had to work together in a way that made the final message feel honest and grounded. Working on this video pushed me to think more carefully about how real people experience the systems around them and how small improvements in clarity, structure, and presentation can make a big difference in understanding those systems. It also gave me a better appreciation for the value of refining work until it feels smooth, coherent, and impactful. The entire process strengthened the way I approach engineering challenges today, always trying to make ideas easier to follow, systems more understandable, and solutions more optimized for the people who depend on them. Feel free to watch the Transportation Impacts Video below.
          </p>

      <button
        onClick={handleBackClick}
        className="mt-8 px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        style={{ backgroundColor: '#334e68' }}
      >
        ← Back to Projects
      </button>
      </section>
      <Footer />
    </div>
  )
}

export default TransportationProject
