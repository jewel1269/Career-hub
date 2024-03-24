import { NavLink } from 'react-router-dom';
import '../Route.css'

const Navbar = () => {
    return (
        <div className="ml-24 inset-0 mr-16">
            <div className="navbar bg-base-100 p-3">
  <div className="navbar-start"> 
    <a className="btn btn-ghost text-3xl">Career Hub</a>
  </div>
  <div id='sidebar' className="navbar-center hidden items-center gap-7 text-xl justify-center lg:flex">
      <NavLink to={'/'}><a>Home</a></NavLink>
      <NavLink to={'/statistics'}><a>Statistics</a></NavLink>
      <NavLink to={'/applied'}><a>Applied Jobs</a></NavLink>
      <NavLink to={'/blog'}><a>Blog</a></NavLink>
  </div>
  <div className="navbar-end">
    <a className="btn btn-accent">Apply Now</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;