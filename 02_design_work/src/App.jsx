
import './App.css'
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  
  return (
    <>

     {/* <Hero/>
     <Header/> */}

      <h1 className='text-blue-600 dark:text-sky-400
       border-2 p-4 rounded-2xl'>
        Learn to integrate tailwind
        </h1>
         
         <div className='flex gap-4'> 

        <Card 
        title="Buy JS Course" 
        buttonText="Buy now" 
        imageurl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        />
        <Card title="Buy React Course" 
        buttonText="Subscribe"
        imageurl="https://images.pexels.com/photos/18681382/pexels-photo-18681382.jpeg"
        />
        <Card  title='Buy Node js Course'
        buttonText="Click me"
        imageurl="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg"
        />
      
       </div>
    </>
  )
}

export default App
