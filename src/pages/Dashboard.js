import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";

const cardData = [
  {  id: "1",title:"TOTAL URLS", total: 456 },
  {  id: "2",title:"TOTAL BLOCKED URLS",total: 400 },
  {  id: "3",title:"PERCENT BLOCKED",total: "70%" },
  {  id: "4",title:"URLS in BLOCKLIST",total: 101 },
];


const Dashboard = () => {
  return (
    <div className="flex h-screen ">
          
            <Sidebar  />
          
          <div className="flex-1 p-8 bg-gray-100 "> 
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16  ">
              {cardData.map((card, id) => (
                <Card key={id} title={card.title} total={card.total} />
              ))}

            </div>
        </div>

    </div>
  )
}

export default Dashboard
