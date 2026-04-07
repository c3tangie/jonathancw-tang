import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'
import Aimsun_GIF from '@assets/aimsun_gif.gif'
import odMatrix from '@assets/od_matrix.png'
import odMatrix2 from '@assets/od_matrix2.png'
import planView from '@assets/plan_view.png'

const AimsunProject = () => {
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
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Aimsun Microsimulation Project (February 2026 - April 2026)</h2>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        This project focused on developing and analyzing a simplified traffic network using Aimsun Next microsimulation to evaluate the impacts of incidents and control strategies on traffic performance created for CIV332: Transportation II. The model represented a freeway corridor with adjacent arterial routes and on-ramps, allowing for the study of congestion propagation, rerouting behavior, and control interventions. The objective was to simulate realistic traffic dynamics under both incident and non-incident conditions, and to assess how traffic signal control and ramp metering strategies influence flow efficiency and delay across the network. 
      </p>


<img src={odMatrix2} className="float-right ml-8 h-80 sm:h-80 w-[350px] sm:w-[470px] object-cover rounded-lg shadow-lg object-center" />
      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Network Modeling and Traffic Dynamics</h3>
      <p className="text-lg text-gray-700 mb-14 leading-relaxed">    
        The network was constructed using sections (links) and nodes (intersections), with an incident introduced by applying a capacity reduction to a short freeway segment (roughly 30 m), creating a bottleneck. Simulation results showed clear shockwave propagation, where reduced discharge capacity increased upstream congestion. Delay peaked at approximately 80 seconds before stabilizing at 20 to 30 seconds after the incident cleared, indicating persistent downstream constraints. Traffic redistribution was also observed, with flow on an alternative arterial route increasing from around 600 to 1200 veh/h, leading to secondary congestion and delays up to 130 seconds. This demonstrated how localized disruptions can impact the entire network. 
      </p>


    <img src={planView} className="float-left mr-8 h-80 sm:h-auto w-[350px] sm:w-[460px] object-cover rounded-lg shadow-lg object-center" />
      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Control Strategies and Performance</h3>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        Traffic signal timing was optimized using the Webster Method, where critical lane flows extracted from the simulation were used to define phase priorities and allocate green time. A four-phase signal system (north-south and west-east, each with separate left-turn and through movements) was implemented to reflect realistic intersection operations. The design incorporated key operational assumptions, including a saturation flow rate of 2000 veh/hr/lane, lost time of 3.5 seconds per phase, and no heavy vehicle effects to ensure consistency across all approaches. Yellow timing was selected to eliminate the dilemma zone based on approach speeds, and pedestrian crossing requirements were explicitly checked, leading to adjustments in green times and an increased overall cycle length to maintain safety. Ramp metering was applied at two on-ramps to regulate merging flows under congested conditions. By controlling vehicle entry rates onto the freeway, the system reduced turbulence at merging points and improved discharge flow at bottlenecks. However, the level of improvement differed between the two ramps due to variations in local demand and network configuration, highlighting the sensitivity of control strategies to surrounding conditions.
      </p>

      <img src={Aimsun_GIF} className="float-right ml-12 mb-4 h-80 sm:h-auto w-[350px] sm:w-[530px] object-cover object-top rounded-lg shadow-lg" />

      {/* Video Player */}
      <div className="float-right ml-12 mb-12 w-[500px] sm:w-[530px] h-[380px] sm:h-[452px] rounded-lg overflow-hidden shadow-lg bg-black clear-right">
        <iframe
          src="https://drive.google.com/file/d/1sVx8priAFIvwy-j9YRayLnNPVkkLPc3D/preview"
          title="Aimsun Microsimulation Video"
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Results of the microsimulation and conclusion</h3>

      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        To showcase the results of the microsimulation, our group recorded a short video that described our network, methodology for obtaining our data, and the results of the microsimulation. The results showed that the incident significantly reduced freeway performance on the QEW and generated a clear backward-propagating shockwave. As fewer vehicles were able to exit the incident zone, delay increased to approximately 80 seconds before falling once the incident cleared. However, the network did not fully return to its original condition, as delays later stabilized at around 20 to 30 seconds, indicating lingering downstream congestion near the Mississauga Road exit. The model also captured broader network redistribution effects, as drivers diverted away from the freeway onto South Sheridan Way. On this route, flow increased from roughly 600 to 1200 veh/hr, and the added demand caused arterial delays to rise to about 130 seconds before gradually declining after conditions on the freeway improved.
      </p>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        The simulation also showed that the west and east on-ramps responded differently to ramp metering control. Under uncontrolled conditions, the west on-ramp operated at a higher average density of 95.90 veh/km and a lower mean exit-based flow of 5740 veh/h, indicating that it functioned as the more critical bottleneck. In contrast, the east on-ramp had a lower mean density of 77.18 veh/km and a higher mean exit-based flow of 6454 veh/hr, suggesting it was less constrained before control was introduced. As a result, ramp metering produced a more noticeable improvement at the west merge area, where regulating entering vehicles more directly relieved congestion. Overall, these results show that the simulation captured both the direct effect of an incident on freeway performance and the location-dependent effectiveness of control strategies across the surrounding network.
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

export default AimsunProject
