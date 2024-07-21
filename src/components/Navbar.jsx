<<<<<<< HEAD
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
=======
import { appleImg, bagImg, searchImg} from "../utils"
import { navLists } from "../constants";

const Navbar = () => {
    return (
         <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width  ">
                <img src ={appleImg} alt="Apple" width={14} height={18} />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav)=>(
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" >
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <img src={bagImg} alt="bag" width={18} height={18}/>
                </div>
            </nav>
         </header>
    )
}

export default Navbar;
>>>>>>> e04a2b9115f5fcb2376b9759ba1c44fc48a825a1
