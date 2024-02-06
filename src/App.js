import Header from "./components/Header"
import Footer from "./components/Footer"
import Todo from "./components/Todo"
import Addtodo from "./components/Addtodo.js"
import { useState } from "react"


function App() {
  const[todolist,settodolist]=useState([{
    sno:1,
    title:"Plan Weekend Getaway",
    desc:"Imagine yourself planning a rejuvenating weekend getaway to recharge your batteries and explore new places. Begin by researching potential destinations, taking into account factors such as distance, activities available, and budget. Consider whether you prefer a serene countryside retreat, an adventurous outdoor excursion, or a cultural city escape. Once you've chosen a destination, create a rough itinerary outlining the activities you'd like to do each day. This could include hiking trails, sightseeing landmarks, dining at local restaurants, or simply relaxing by the beach. Check for accommodation options that fit your preferences and make reservations accordingly. Don't forget to pack essentials like clothing, toiletries, and any specific gear needed for your planned activities. Finally, ensure your transportation arrangements are in place, whether it's booking flights, renting a car, or planning a scenic road trip. With careful planning and anticipation, you'll set the stage for an unforgettable weekend adventure."
  },
  {
    sno:2,
    title:"Start Home Garden",
    desc:"Embark on a fulfilling journey of nurturing your green thumb by starting a home garden. Begin by assessing your available space, whether it's a backyard, balcony, or windowsill, and determine what types of plants would thrive in your environment. Research different plant species, considering factors such as sunlight requirements, soil type, and climate compatibility. Decide whether you want to grow vegetables, herbs, flowers, or a combination of all three. Next, gather necessary gardening supplies such as pots, soil, seeds, and gardening tools. Prepare the soil and plant your chosen seeds or seedlings with care, ensuring proper spacing and watering routines. Commit to regular maintenance tasks like watering, fertilizing, and pruning to encourage healthy growth. Embrace the process of nurturing your plants as they flourish and bring beauty to your home environment."
  }
])
  
  function ondelete(e){
   
    settodolist(todolist.filter((f)=>{
      
      return f.sno !== e.sno
    }))
  }

  function addsome(titlee,desce){
    
    settodolist([...todolist, {
      sno:todolist.length+1,
      title:titlee,
      desc:desce
    }]
      
    )
    }
    
  
  return (
    <>
    <Header showsearch={false} />
    <Todo tolist={todolist} ondelete={ondelete} />
    <Addtodo addsome={addsome}/>
    
    <Footer />
    </>
  );
}

export default App;
