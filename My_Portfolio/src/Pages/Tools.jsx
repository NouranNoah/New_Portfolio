import React from 'react';
import './pages.css';
import htmlicon from '../assets/html.png'
import cssicon from '../assets/css.png'
import jsicon from '../assets/js.png'
import reacticon from '../assets/react.png'
import giticon from '../assets/git.png'
import viticon from '../assets/Vitejs-logo.svg.png'


export default function Tools() {
  const tools = [
    { name: 'HTML5', percent: 98, icon: htmlicon },
    { name: 'CSS3', percent: 92, icon: cssicon },
    { name: 'JavaScript', percent: 95, icon: jsicon },
    { name: 'React.js', percent: 90, icon: reacticon },
    { name: 'Git & GitHub', percent: 90, icon: giticon },
    { name: 'Vite', percent: 85, icon: viticon },
  ];

  return (
    <div className="toolsSection" id="tools">
      <p className='sectionTag'>– My Favorite Tools</p>
      <h2 className='sectionTitle'>
        <span className='highlight'>Exploring the Tools</span><br />
        Behind My <span className='highlightDark'>Front-End Work</span>
      </h2>

      <div className="toolsGrid">
        {tools.map((tool, index) => (
        <div 
            className="toolCard"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
        <img src={tool.icon} alt={tool.name} className="toolIcon" />
        <p className="toolPercent">{tool.percent}%</p>
        <p className="toolName">{tool.name}</p>
        </div>
        ))}
      </div>
    </div>
  );
}