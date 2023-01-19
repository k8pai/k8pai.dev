import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { CiCalendarDate } from 'react-icons/ci'
import { FaGraduationCap } from 'react-icons/fa'
import eduinfo from '../data/Eduinfo';

const Education = () => {
  return (
    <section className="section-education">
      <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="section-title">Education</motion.h2>
      <div className="education-container">
        {eduinfo.map((edu, i) => (
          <div key={i} className="education-card">
            <div className="card-header">
              <h3 className="degree-title">{edu.degree}</h3>
              <h4 className="school-name">{edu.school}</h4>
            </div>
            <div className="card-body">
              <p className="degree-description">{edu.description}</p>
              <div className="card-footer">
                <div className="time-period">
                  <IconContext.Provider value={{ className: 'icon' }}>
                    <CiCalendarDate />
                  </IconContext.Provider>
                  <span className="time-period-text">{edu.timePeriod}</span>
                </div>
                <div className="gpa">
                  <IconContext.Provider value={{ className: 'icon' }}>
                    <FaGraduationCap />
                  </IconContext.Provider>
                  <span className="gpa-text">{edu.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
