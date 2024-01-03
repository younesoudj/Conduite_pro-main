import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe,faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className=''>
        <ul className="bg-white p-4 mt-20 md:w-60  ">
            <li className="hover:bg-gray-100 text-gray-400 hover:text-bluee font-medium p-1.5 rounded-md ">
            <FontAwesomeIcon icon={faChartLine} className="mr-2  " /><a href="/dashboard"
               >Dashboard</a></li>
            <li className="hover:bg-gray-100 font-medium p-1.5 rounded-md text-gray-400 hover:text-bluee">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 " /><a href="/Blocklist" >Blocklist</a></li>
            <li className=" hover:bg-gray-100 font-medium p-1.5 rounded-md  text-gray-400 hover:text-bluee">
            <FontAwesomeIcon icon={faGear} className="mr-2 " />
            <a href="/settings" >Settings</a></li>
            <li className="bg-red-200  text-redd font-medium p-1.5 rounded-md">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2 " /><a href="/out" >Se deconnecter</a></li>
        </ul>
    </div>
  )
}

export default Sidebar
