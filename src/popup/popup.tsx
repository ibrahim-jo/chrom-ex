import React,{useEffect} from "react";
import '../assets/tailwind.css'


const Popup = () => {

    useEffect(() => {
        chrome.storage.sync.get({name},(res)=>{
       console.log(`response ${res.name}`)
        })
      
      }, [])

    const handleName=(e)=>{
     e.preventDefault()
       const name = e.target.name.value
         chrome.storage.sync.set({name},()=>{
            console.log(`name is ${name}`)
         })           
    }

  return (
    <div className="h-screen">
    <form   onSubmit={handleName}  className="flex justify-center  items-center py-44">
       <input type='text' name='name' className="bg-gray ring-black px-4 py-4" placeholder="inter name" />
       <button   className="py-4 px-4 bg-indigo-500 text-whit m-2">LogIn</button>
    </form>
       </div>
  )
}

export default Popup
   


