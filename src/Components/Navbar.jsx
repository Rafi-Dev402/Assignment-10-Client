import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = (
        <>
            <li><NavLink className={'font-medium text-base '} to={'/'}>Home</NavLink></li>
            <li><NavLink className={'font-medium text-base '} to={'allEEquipment'}>All Equipment </NavLink></li>
            <li><NavLink className={'font-medium text-base '} to={''}>Add Equipment  </NavLink></li>
            <li><NavLink className={'font-medium text-base '} to={''}>My Equipment </NavLink></li>
        </>
    )
    return (
        <div className="mb-16 montserrat-font">
            <nav className="bg-[#27AE60]">
                <div className="navbar  container md:container lg:w-7/8 mx-auto py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                               {
                                links
                               }
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <img src="/public/navicon.png" className="w-10" alt="" />
                            <p className="text-lg lg:text-2xl font-semibold text-white ">EquiSports</p>
                        </div>
                        
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                           {
                            links
                           }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <img className="rounded-full mr-3.5" src="/public/user.png" alt="" />
                        <Link to={'/login'} className="btn bg-[#FF9933] border-none text-white lg:px-6  text-lg">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;