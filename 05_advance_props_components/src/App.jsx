
import './App.css'

import BasicProps from './components/BasicProps.jsx'
import RefProps from './components/RefProps.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import ComplexProps from './components/ComplexProps.jsx'
import ThemeToggler ,{ThemeProvider,useTheme}from './components/ThemeToggler.jsx'


function Navigation (){

  const sections = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'ref', label: 'ref Props', icon: '🔗'},
    {id: 'children', label: 'children Props', icon: '👶'},
    {id: 'complex', label: 'complex Props', icon: '🧩'},
    {id: 'theme', label: 'theme Props', icon: '🎨'},
  ]

  return (
    <nav className="sticky top-0 z-50 shadow-md w-full bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {sections.map((section)=>(
            <button
              className="px-4 py-2 rounded-lg font-medium 
              bg-blue-600 text-white mr-2 mt-2 hover:bg-blue-700"
              key={section.id}
            >
              <span className='mr-2'>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}



function AppContent(){
   
  const {isDark}=useTheme();

  return (
    <div className={`min-h-screen ${
      isDark ? "bg-gray-900" : "bg-purple-500"
    }`}>

      <Navigation/>

      <div className='container mx-auto px-4 py-8'>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-4">
            React Props Explained
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive guide to understanding how data flows between 
            React components using Props.
          </p>
        </header>

        <div className='space-y-8'>

          <div id='basic' className='scroll-mt-32'>
            <BasicProps/>
          </div>

          <div id='children' className='scroll-mt-32'>
            <ChildrenProps/>
          </div>

          <div id='complex' className='scroll-mt-32'>
            <ComplexProps/>
          </div>

          <div id='ref' className='scroll-mt-32'>
            <RefProps/>
          </div>

          <div id='theme' className='scroll-mt-32'>
            <ThemeToggler/>
          </div>

        </div>

        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>

      </div>

    </div>
  )
}


function App() {
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  )
}

export default App