import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTopButton'
import tp1 from '@assets/tp_1.png'
import tp2 from '@assets/tp_2.png'
import tp3 from '@assets/tp_3.png'
import tp4 from '@assets/tp_4.png'
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

const Experience = () => {
  // Google Drive file ID from the link
  const videoFileId = '1A4j9Gl2Z9Grtg6yeV-J0GTFZqDdkm5UH'
  const videoEmbedUrl = `https://drive.google.com/file/d/${videoFileId}/preview`
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Work Experience</h1>
            <p className="text-xl opacity-90">
              My professional journey and key accomplishments
            </p>
          </div>
        </section>

        {/* Experience Content Section */}
        <section className="max-w-7xl mx-auto sm:px-10 py-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Aimsun Microsimulation Project (February 2026 - April 2026)
           </h2>
           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            This project focused on developing and analyzing a simplified traffic network using Aimsun Next microsimulation to evaluate the impacts of incidents and control strategies on traffic performance created for CIV332: Transportation II. The model represented a freeway corridor with adjacent arterial routes and on-ramps, allowing for the study of congestion propagation, rerouting behavior, and control interventions. The objective was to simulate realistic traffic dynamics under both incident and non-incident conditions, and to assess how traffic signal control and ramp metering strategies influence flow efficiency and delay across the network. 
           </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Network Modeling and Traffic Dynamics</h3>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            The network was constructed using sections (links) and nodes (intersections), with an incident introduced by applying a capacity reduction to a short freeway segment (roughly 30 m), creating a bottleneck. Simulation results showed clear shockwave propagation, where reduced discharge capacity increased upstream congestion. Delay peaked at approximately 80 seconds before stabilizing at 20 to 30 seconds after the incident cleared, indicating persistent downstream constraints. Traffic redistribution was also observed, with flow on an alternative arterial route increasing from around 600 to 1200 veh/h, leading to secondary congestion and delays up to 130 seconds. This demonstrated how localized disruptions can impact the entire network. 
           </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Control Strategies and Performance</h3>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Traffic signal timing was optimized using the Webster Method, where critical lane flows extracted from the simulation were used to define phase priorities and allocate green time. A four-phase signal system (north-south and west-east, each with separate left-turn and through movements) was implemented to reflect realistic intersection operations. The design incorporated key operational assumptions, including a saturation flow rate of 2000 veh/hr/lane, lost time of 3.5 seconds per phase, and no heavy vehicle effects to ensure consistency across all approaches. Yellow timing was selected to eliminate the dilemma zone based on approach speeds, and pedestrian crossing requirements were explicitly checked, leading to adjustments in green times and an increased overall cycle length to maintain safety. Ramp metering was applied at two on-ramps to regulate merging flows under congested conditions. By controlling vehicle entry rates onto the freeway, the system reduced turbulence at merging points and improved discharge flow at bottlenecks. However, the level of improvement differed between the two ramps due to variations in local demand and network configuration, highlighting the sensitivity of control strategies to surrounding conditions.
           </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Results of the microsimulation and conclusion</h3>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            To showcase the results of the microsimulation, our group recorded a short video that described our network, methodology for obtaining our data, and the results of the microsimulation. The results showed that the incident significantly reduced freeway performance on the QEW and generated a clear backward-propagating shockwave. As fewer vehicles were able to exit the incident zone, delay increased to approximately 80 seconds before falling once the incident cleared. However, the network did not fully return to its original condition, as delays later stabilized at around 20 to 30 seconds, indicating lingering downstream congestion near the Mississauga Road exit. The model also captured broader network redistribution effects, as drivers diverted away from the freeway onto South Sheridan Way. On this route, flow increased from roughly 600 to 1200 veh/hr, and the added demand caused arterial delays to rise to about 130 seconds before gradually declining after conditions on the freeway improved.
           </p>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                The simulation also showed that the west and east on-ramps responded differently to ramp metering control. Under uncontrolled conditions, the west on-ramp operated at a higher average density of 95.90 veh/km and a lower mean exit-based flow of 5740 veh/h, indicating that it functioned as the more critical bottleneck. In contrast, the east on-ramp had a lower mean density of 77.18 veh/km and a higher mean exit-based flow of 6454 veh/hr, suggesting it was less constrained before control was introduced. As a result, ramp metering produced a more noticeable improvement at the west merge area, where regulating entering vehicles more directly relieved congestion. Overall, these results show that the simulation captured both the direct effect of an incident on freeway performance and the location-dependent effectiveness of control strategies across the surrounding network.
            </p>


           <h2 className="text-4xl font-bold text-gray-900 mb-8">Concrete Bridge Design Project (February 2026 - April 2026)
           </h2>
           
           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            This group project involved the design of a two-span reinforced concrete pedestrian bridge in the CIV313: Reinforced Concrete course. The bridge system consisted of a continuous, monolithic reinforced concrete girder, a central pier, and a spread footing founded on sound rock. Our group wanted to end up with a design that uses minimal steel for economic purposes, whilst providing an adequate factor of safety for both ultimate and serviceability limit states of the bridge. Unlike a purely analytical design exercise, this project required both a complete structural design and a full graphical description of the bridge through professionally organized engineering drawings. The final work therefore combined structural analysis using automated formulas in excel, reinforced concrete design under Canadian Standards Association (CSA) standards, and technical engineering drafting into one coordinated deliverable.
           </p>

           <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technical Context</h3>
           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            As mentioned earlier, the bridge was required to follow a fixed structural configuration in which the girder remained continuous over the central pier through a monolithic connection, while the abutments supported the girder on bearings that transferred vertical force only. The bridge was designed as a two-span reinforced concrete pedestrian structure with a total span of 35 m, divided into a 15 m span on the left side of the central pier and a 20 m span on the right side. The superstructure was required to carry a total slab width of 4.5 m, while maintaining a minimum walkway width of 4.0 m. These dimensional requirements were provided directly by the client, which created the main structural constraints of the project, since the bridge proportions, span arrangement, and deck width directly influenced bending demand, shear demand, pier loading, and reinforcement requirements. Within these limits, the design process became an optimization problem of selecting member dimensions and reinforcement layouts that could safely resist loading without introducing unnecessary concrete volume or steel congestion.
           </p>

           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Because the girder was continuous over the pier through a monolithic connection, the system had to be designed for both positive bending in the spans and negative bending over the support. At the abutments, the girder was supported on bearings that transferred vertical force only, which made support reactions and uplift checks important parts of the design. The asymmetrical span arrangement of 15 m and 20 m also meant that force effects were not distributed evenly across the bridge, so the design required careful attention to how the longer span increased structural demand and influenced the sizing of the girder, pier, and foundation.
           </p>

           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Optimization in this project was also governed by serviceability and detailing constraints, not just ultimate strength. The bridge had to satisfy loading and movement requirements while remaining practical to reinforce and draw clearly. Since the slab width and walkway width were fixed, there was limited flexibility in plan geometry, so efficiency had to be achieved through the depth and proportions of the girder, the design of the pier and footing, and the curtailment and arrangement of reinforcing steel. This made the project a technical exercise in balancing structural performance, material economy, and constructible detailing within a tightly defined bridge configuration.
           </p>

           <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Project Conclusion</h3>
           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            This project strengthened my understanding of optimization in reinforced concrete design by showing that an effective bridge is not simply one that is strong enough, but one that satisfies structural, serviceability, and constructability requirements with an efficient use of material and a clear system of documentation. It developed my ability to make design decisions that balanced load resistance, deformation control, reinforcement detailing, and drawing clarity within one coordinated structure. In the context of my broader interest in optimization, this project demonstrated how civil engineering design often depends on refining a system under multiple constraints rather than maximizing any one parameter alone.
           </p>
           
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Transportation Impacts Video Project (December 2025)</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            This video project explores the social and environmental impacts of a transportation-related project, created for CIV331: Transport I – Introduction to Transportation Systems. It challenged us to move beyond classroom concepts and investigate real-world consequences shaped by transportation infrastructure, from emissions and environmental impact to community well-being and equity. For the project, we focused on an ongoing or completed public transportation project, analyzing its social and environmental impacts in a short video format.
          </p>
            
            <img
              src={tp1}
              alt="Ontario Line / transportation project"
                className="float-left mr-6 mb-12 w-80 sm:w-96 aspect-square object-cover rounded-lg shadow-lg"
            />
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Which transportation project did we choose?</h3>
      <div className="-mb-6">
            
            <p className="text-lg text-gray-700 leading-relaxed">
              For this project, our group chose to study the Ontario Line. The reason why is because it represents one of the most significant transportation interventions in Toronto’s recent history and one that directly affects our lived experience as daily TTC riders. Line 1 overcrowding, unreliable travel times, and bottlenecks like the Millwood Road Bridge are issues we encountered firsthand, making this project both personally relevant and technically compelling to analyze.
            </p>
            <div className="clear-both" />
          </div>

            <img
              src={tp2}
              alt="Filming / construction documentation"
                className="float-right ml-8 mt-8 mb-12 h-80 sm:h-96 w-[35px] sm:w-[500px] object-cover rounded-lg shadow-lg"
            />

<h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">My Role and Filming the Video</h3> 
      <div className="-mb-6">
            

            <p className="text-lg text-gray-700 leading-relaxed">
              For this project, my main responsibility was serving as the group’s video editor, which meant shaping the video’s format, flow, pacing, and content visualization. I also handled much of the filming. This included documenting the heavy construction presence around neighbourhoods like Thorncliffe Park and Flemingdon Park, where community spaces were surrounded by barriers. I also assisted in filming the overcrowding shots of Lines 1 and 2 at Bloor–Yonge station during the Wednesday afternoon peak hours. Gathering these visuals gave our team firsthand material to work with an helped us present the transportation impacts in a way that felt real and connected to lived experience.
            </p>
            <div className="clear-both" />
          </div>
            
            <img
              src={tp4}
              alt="Video format / editing approach"
            className="float-left mr-8 mt-9 mb-12 h-80 sm:h-80 w-[350px] sm:w-[470px] object-cover rounded-lg shadow-lg"
            />
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Philosophy of the Finalized Video Format</h3>

      <div className="-mb-6">
            
            <p className="text-lg text-gray-700 leading-relaxed">
              In the initial assignment criteria, the instructing team wanted us to be as creative as we can. And during the editing of the video, I wanted to create something that is unique and diverse whilst at the same time, wouldn’t require too much extra time to do so. During the production of the video, time was a very important factor and we had a very little amount of it. In the end, our group decided to make the video a b-roll format with the addition of a comedy skit in the intro to hook the audience in. This would allow the video to be educational in a fun and positive way that doesn’t feel forced or rushed. I tried to be as creative as I could by using my video editing skills to make the comedic jokes as funny and organic as possible, and it proved to be a success.
            </p>
            <div className="clear-both" />
          </div>


{/* Video Player */}
          <div className="float-right mt-6 mb-12 ml-8 w-[500px] sm:w-[600px] h-[380px] sm:h-[452px] rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src={videoEmbedUrl}
              title="Transportation Impacts Video"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />

          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What this project taught me </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Looking back on this project, what stood out to me most was how much intention goes into telling a clear and meaningful story about transportation. Every shot we captured, every edit we made, and every idea we shaped had to work together in a way that made the final message feel honest and grounded. Working on this video pushed me to think more carefully about how real people experience the systems around them and how small improvements in clarity, structure, and presentation can make a big difference in understanding those systems. It also gave me a better appreciation for the value of refining work until it feels smooth, coherent, and impactful. The entire process strengthened the way I approach engineering challenges today, always trying to make ideas easier to follow, systems more understandable, and solutions more optimized for the people who depend on them. Feel free to watch the Transportation Impacts Video below.
          </p>

          

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Groundwater Engineering Internship (May 2024 - July 2024)</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This internship opportunity highlights my hands-on groundwater engineering experience during my internship with Fyfe Well & Water Services in Vancouver Island, British Columbia that took place during the summer of 2024. I was directly involved in field operations that supported well construction, aquifer assessment, and groundwater management in real community settings. My responsibilities included assisting with drilling operations, developing wells, conducting pumping tests, collecting water-level and flow data, and preparing subsurface logs used to evaluate aquifer conditions.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This role gave me a practical understanding of how groundwater systems respond to pumping, how well performance is assessed, how to adequately analyze well data and perform optimization, and how decisions in the field translate into long-term water supply reliability. I gained experience interpreting drawdown data, documenting geological formations, and analyzing pumping-test results, which are skills that strengthened both my technical foundation and my confidence working on real engineering sites.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What did my work involve?</h3>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This internship opportunity involved both office work and field work. Field work mostly involved drilling and testing new well units. During drilling operations, I assisted in producing detailed lithologic logs, documenting grain-size transitions, overburden thickness, and the presence of confined or unconfined water-bearing units. The production of these logs required data from soil sampling and collecting qualitative metrics such as pH, turbidity, temperature, and observable changes in formation behavior. 
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Since the team I worked with had flight experience and the knowledge to pilot a plane, we were able to provide service across many locations on the island and even some sites on the BC mainland. This was a truly unique experience that I will never forget, and I had a lot of opportunities to learn, grow, and gain confidence working in real groundwater environments.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In terms of office work, my work involved analyzing well pumping test data using Excel, analyzing water level drawdown, discharge rate, and water level recovery over a period of 6 hours, and sometimes even 24 hours. I also used Google Earth Pro to accurately map out the aquifer that the well unit is situated in, as well as the well unit location itself. All of the data and visuals mentioned is essential in providing adequate transparency on a well report for our customers. 
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Groundwater Engineering in Practice</h3>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            One of the notable highlights during my fieldwork was that one of the newly drilled well units had a faulty screen which was inefficient at keeping higher diameter aggregates away from the aquifer. Before replacing and installing the new well screen we had to do a test on the new well screen but lacked a well casing to contain the screen on-site. I made the suggestion of creating a makeshift well casing using a plastic bucket and water sealing tape. The temporary solution worked and we were able to fully perform adequate analysis on the well screen and successfully installed it onto the well unit.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Reflection and Takeaways</h3>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This experience also changed the way I think about engineering work. Every decision in the field, from interpreting soil changes to adjusting a pumping test, required careful judgment and a mindset focused on doing things the right way the first time. Working across so many different sites taught me to stay adaptable, to think ahead, and to always look for the most effective path forward. It reinforced the way I approach all of my projects today, pushing me to understand systems deeply, refine my methods, and always aim for solutions that make the work stronger and more reliable.

          </p>
        </section>
      </main>

      <BackToTop />
      <Footer />
    </div>
  )
}

export default Experience
