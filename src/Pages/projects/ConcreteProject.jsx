import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'
import autocad from '@assets/autocad.png'
import concExcel from '@assets/conc_excel.png'
import designWorkbook from '@assets/design_workbook.jpeg'
import genArr from '@assets/gen_arr.jpg'
import girdCr from '@assets/gird_cr.jpg'

const ConcreteProject = () => {
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
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Concrete Bridge Design Project (February 2026 - April 2026)</h2>

    <img src={autocad} className="float-right ml-8 mb-12 h-80 sm:h-96 w-[350px] sm:w-[580px] object-cover  rounded-lg shadow-lg" />
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        This group project involved the design of a two-span reinforced concrete pedestrian bridge in the CIV313: Reinforced Concrete course. The bridge system consisted of a continuous, monolithic reinforced concrete girder, a central pier, and a spread footing founded on sound rock. Our group wanted to end up with a design that uses minimal steel for economic purposes, whilst providing an adequate factor of safety for both ultimate and serviceability limit states of the bridge. Unlike a purely analytical design exercise, this project required both a complete structural design and a full graphical description of the bridge through professionally organized engineering drawings. The final work therefore combined structural analysis using automated formulas in excel, reinforced concrete design under Canadian Standards Association (CSA) standards, and technical engineering drafting into one coordinated deliverable.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technical Context</h3>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        As mentioned earlier, the bridge was required to follow a fixed structural configuration in which the girder remained continuous over the central pier through a monolithic connection, while the abutments supported the girder on bearings that transferred vertical force only. The bridge was designed as a two-span reinforced concrete pedestrian structure with a total span of 35 m, divided into a 15 m span on the left side of the central pier and a 20 m span on the right side. The superstructure was required to carry a total slab width of 4.5 m, while maintaining a minimum walkway width of 4.0 m. These dimensional requirements were provided directly by the client, which created the main structural constraints of the project, since the bridge proportions, span arrangement, and deck width directly influenced bending demand, shear demand, pier loading, and reinforcement requirements. Within these limits, the design process became an optimization problem of selecting member dimensions and reinforcement layouts that could safely resist loading without introducing unnecessary concrete volume or steel congestion.
      </p>

<div className="float-left mr-8 mb-12">
  <img src={genArr} className="mb-4 h-80 sm:h-auto w-[350px] sm:w-[440px] object-cover rounded-lg shadow-lg" />
  <img src={concExcel} className="h-80 sm:h-52 w-[350px] sm:w-[440px] object-cover rounded-lg shadow-lg object-top" />
</div>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        Because the girder was continuous over the pier through a monolithic connection, the system had to be designed for both positive bending in the spans and negative bending over the support. At the abutments, the girder was supported on bearings that transferred vertical force only, which made support reactions and uplift checks important parts of the design. The asymmetrical span arrangement of 15 m and 20 m also meant that force effects were not distributed evenly across the bridge, so the design required careful attention to how the longer span increased structural demand and influenced the sizing of the girder, pier, and foundation.
      </p>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        Optimization in this project was also governed by serviceability and detailing constraints, not just ultimate strength. The bridge had to satisfy loading and movement requirements while remaining practical to reinforce and draw clearly. Since the slab width and walkway width were fixed, there was limited flexibility in plan geometry, so efficiency had to be achieved through the depth and proportions of the girder, the design of the pier and footing, and the curtailment and arrangement of reinforcing steel. This made the project a technical exercise in balancing structural performance, material economy, and constructible detailing within a tightly defined bridge configuration.
      </p>


      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Project Conclusion</h3>
      <img src={designWorkbook} className="float-right ml-8 h-80 sm:h-auto w-[350px] sm:w-[500px] object-cover rounded-lg shadow-lg object-top" />
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        This project strengthened my understanding of optimization in reinforced concrete design by showing that an effective bridge is not simply one that is strong enough, but one that satisfies structural, serviceability, and constructability requirements with an efficient use of material and a clear system of documentation. It developed my ability to make design decisions that balanced load resistance, deformation control, reinforcement detailing, and drawing clarity within one coordinated structure. In the context of my broader interest in optimization, this project demonstrated how civil engineering design often depends on refining a system under multiple constraints rather than maximizing any one parameter alone.
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

export default ConcreteProject
