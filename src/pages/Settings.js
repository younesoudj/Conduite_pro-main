import Coordinators from "../Components/Coordinators"
import Sidebar from "../Components/Sidebar"

const Settings = () => {
  return (
    
      <div className="flex h-screen ">
          
          <Sidebar  />
        
            <div className="flex-1 p-8 bg-gray-100 "> 
                <Coordinators />
            </div>
      </div>

  
    
  )
}

export default Settings
