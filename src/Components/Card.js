
const Card = (props) => {
  return (
    <div className="bg-bluee rounded-xl p-1 h-28 text-center">
      <p className="text-white mt-6 xl:text-lg md:text-sm">{props.title}</p>
      <h2 className="text-white font-black text-3xl ">{props.total}</h2>
    </div>
  )
}

export default Card
