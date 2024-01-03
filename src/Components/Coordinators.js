

const Coordinators = () => {
  return (
    <div className="mt-16">
        <h2 className="text-xl mb-4">Modify administrator coordinates</h2>
            <div className="">
                <div className=" flex flex-row-2 ">
                    <div className="  mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2 " htmlFor="email">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-96 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Admin's mail"
                        />
                    </div>
                    <div className="mb-4 ml-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Password">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-96 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Password"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div>
                    <button className="bg-bluee hover:bg-blue-700 text-white font-semibold p-2 
                                rounded-lg focus:outline-none focus:shadow-outline w-40 ">
                        Enregistrer
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Coordinators
