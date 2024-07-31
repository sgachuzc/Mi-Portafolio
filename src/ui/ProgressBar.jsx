import { useEffect, useState } from 'react'
import '../styles/ui/progressbar.css'

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const onScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollProgress(scrollPercent)
    }
    
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    };
  }, []);
  
  return (
    <header>
      <div className="progress-container">
        <div className="progress-bar" style={{width: `${scrollProgress}%`}}></div>
      </div>
    </header>
  )
}
