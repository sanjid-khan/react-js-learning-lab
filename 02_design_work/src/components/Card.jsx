import Button from "./Button.jsx";

function Card({title,buttonText,imageurl}){
    return(
        <>
        <div className='max-w-sm bg-white border
       border-gray-200 rounded-xl mt-8 shadow 
       overflow-hidden transition-shadow'>
        <img 
        className='w-full h-48 object-cover'
          src={imageurl}
          alt="Sample image" 
        />

        <div className='p-4'>
          <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
          <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, unde magnam odio numquam aspernatur exercitationem.</p>
         
           {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            {buttonText}
          </button> */}
         
        <Button  text={buttonText}/>
     
        </div>

      </div>
        </>
    )
}

export default Card;