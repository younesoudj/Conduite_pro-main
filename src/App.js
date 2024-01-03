import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Blocklist from './pages/Block/Blocklist';




const App = () => {
  return (
    <>
      <Router> 
         <Routes>
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Settings' element={<Settings/>} />
            <Route path='/Blocklist' element={<Blocklist/>} />
           
            
         </Routes>
      </Router>
        
        
      
    </>
  )
}

export default App

