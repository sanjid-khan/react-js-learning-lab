function Button({text}){
    return(
        <>
         <button className="mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700">
            {text}
         </button>
        </>
    )
}

export default Button