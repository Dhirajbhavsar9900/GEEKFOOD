function Navbar(){
    return(
        <>
            <div className="border-b-[1px] border-[]">
                <nav className=" w-[100%] bg-[#111827] text-white">
                    <div className="flex flex-wrap justify-between p-4 mx-[110px]">
                        <a href="" className="flex items-center">
                            <img className=" h-8 mr-3" src="https://flowbite.com/docs/images/logo.svg" alt="" />
                            <span className=" font-semibold text-[23px]">GeekFoods</span>
                        </a>
                        <div className=" flex items-center">
                            <ul className="flex font-semibold" > 
                                <li className="px-4 text-blue-500 p-2"><a href="">Home</a></li>
                                <li className="px-4 hover:text-blue-500 hover:bg-blue-950 p-2 rounded-xl hover:transition  "><a href="">Quote</a></li>
                                <li className="px-4 hover:text-blue-500 hover:bg-blue-950 p-2 rounded-xl hover:transition "><a href="">Resturents</a></li>
                                <li className="px-4 hover:text-blue-500 hover:bg-blue-950 p-2 rounded-xl hover:transition "><a href="">Foods</a></li>
                                <li className="px-4 hover:text-blue-500 hover:bg-blue-950 p-2 rounded-xl hover:transition "><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <button className=" bg-[#1D4ED8] p-2 px-4 rounded-lg flex items-center hover:bg-blue-800">
                                <span className="text-[14px] font-semibold text-center">Get Started</span>
                            </button>
                        </div>
                    </div>                   
                </nav>
            </div>

        </>
    )
}

export default Navbar;