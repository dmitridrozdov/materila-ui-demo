import React, { useState, useEffect } from 'react'

const DSSwoop = () => {
    const [sections, setSections] = useState([])

    useEffect(() => {
        const getSections = async () => {
          const sectionsFromServer = await fetchSections()
          console.log(sectionsFromServer)
          setSections(sectionsFromServer)
        }
        getSections()
      }, [])
      
      const fetchSections = async () => {
        const res = await fetch('http://localhost:5000/awb-ds-swoop')
        return await res.json()
      }

    return (
        <>
            {sections.map((section) => 
                <div key={section.section}>
                    {section.section}
                </div>
            )}
        </>
    )
}

export default DSSwoop
