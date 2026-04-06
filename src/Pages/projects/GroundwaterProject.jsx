import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'
import IMG_5821 from '@assets/IMG_5821.jpg'
import IMG_5829 from '@assets/IMG_5829.jpg'
import IMG_5830 from '@assets/IMG_5830.jpg'
import IMG_5834 from '@assets/IMG_5834.jpg'
import IMG_5838 from '@assets/IMG_5838.jpg'
import IMG_5839 from '@assets/IMG_5839.jpg'
import IMG_5879 from '@assets/IMG_5879.jpg'
import IMG_5889 from '@assets/IMG_5889.jpg'
import IMG_5911 from '@assets/IMG_5911.jpg'
import IMG_5919 from '@assets/IMG_5919.jpg'
import IMG_5924 from '@assets/IMG_5924.jpg'
import unnamed1 from '@assets/unnamed.png'
import unnamed2 from '@assets/unnamed_1.png'
import unnamed3 from '@assets/unnamed_3.png'
import unnamed4 from '@assets/unnamed_4.png'

const GroundwaterProject = () => {
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
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Groundwater Research Intern (May - July 2024)</h2>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        During the summer of 2024, I worked as a Groundwater Research Intern at the University of Toronto, focusing on hydrogeological assessment and data analysis. This role provided hands-on experience with water quality monitoring, geological mapping, and environmental impact assessment. I contributed to research initiatives aimed at understanding groundwater contamination and remediation strategies, working alongside senior researchers and graduate students. The internship solidified my commitment to environmental engineering and deepened my understanding of how scientific research directly informs policy and sustainable infrastructure decisions.
      </p>

<img src={IMG_5879} className="float-right ml-8  mb-12 h-80 sm:h-56 w-[350px] sm:w-[500px] object-cover object-top rounded-lg shadow-lg" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What did my work involve?</h3>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        This internship opportunity involved both office work and field work. Field work mostly involved drilling and testing new well units. During drilling operations, I assisted in producing detailed lithologic logs, documenting grain-size transitions, overburden thickness, and the presence of confined or unconfined water-bearing units. The production of these logs required data from soil sampling and collecting qualitative metrics such as pH, turbidity, temperature, and observable changes in formation behavior. 
      </p>

<img src={IMG_5821} className="float-right ml-8 -mt-16 mb-12 h-80 sm:h-52 w-[350px] sm:w-[500px] object-cover object-center rounded-lg shadow-lg" />
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        Since the team I worked with had flight experience and the knowledge to pilot a plane, we were able to provide service across many locations on the island and even some sites on the BC mainland. This was a truly unique experience that I will never forget, and I had a lot of opportunities to learn, grow, and gain confidence working in real groundwater environments.
      </p>


<img src={unnamed1} className="float-left mr-2 h-80 sm:h-56 w-[350px] sm:w-[180px] object-cover object-left rounded-lg shadow-lg" />
<img src={unnamed2} className="float-left mr-8 h-80 sm:h-56 w-[350px] sm:w-[350px] object-cover object-left rounded-lg shadow-lg" />
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            In terms of office work, my work involved analyzing well pumping test data using Excel, analyzing water level drawdown, discharge rate, and water level recovery over a period of 6 hours, and sometimes even 24 hours. I also used Google Earth Pro to accurately map out the aquifer that the well unit is situated in, as well as the well unit location itself. All of the data and visuals mentioned is essential in providing adequate transparency on a well report for our customers. 
          </p>
          <img src={unnamed4} className="float-right h-80 sm:h-80 w-[350px] sm:w-[570px] object-cover object-top rounded-lg shadow-lg" />
          <img src={unnamed3} className="mr-8 h-80 sm:h-80 w-[350px] sm:w-[620px] object-cover object-bottom rounded-lg shadow-lg" />
          

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Groundwater Engineering in Practice</h3>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            One of the notable highlights during my fieldwork was that one of the newly drilled well units had a faulty screen which was inefficient at keeping higher diameter aggregates away from the aquifer. Before replacing and installing the new well screen we had to do a test on the new well screen but lacked a well casing to contain the screen on-site. I made the suggestion of creating a makeshift well casing using a plastic bucket and water sealing tape. The temporary solution worked and we were able to fully perform adequate analysis on the well screen and successfully installed it onto the well unit.
          </p>

        <img src={IMG_5834} className="float-right ml-8 h-80 sm:h-80 w-[350px] sm:w-[570px] object-cover object-top rounded-lg shadow-lg" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Reflection and Takeaways</h3>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This experience also changed the way I think about engineering work. Every decision in the field, from interpreting soil changes to adjusting a pumping test, required careful judgment and a mindset focused on doing things the right way the first time. Working across so many different sites taught me to stay adaptable, to think ahead, and to always look for the most effective path forward. It reinforced the way I approach all of my projects today, pushing me to understand systems deeply, refine my methods, and always aim for solutions that make the work stronger and more reliable.
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

export default GroundwaterProject
