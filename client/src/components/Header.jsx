import React, { useState } from 'react';
import { Button, Navbar, TextInput, Avatar,Dropdown,DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart, signOutSuccess, signOutFailure } from '../redux/user/userSlice';

export default function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSignOut = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess());
      navigate('/sign-in');
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  return (
    <Navbar fluid rounded className="border-b-2 px-4 py-3">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm sm:text-base">
            Tejas's
          </span>
          <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Blog
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <form className="hidden lg:block">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="w-64"
          />
        </form>

        <Button className="lg:hidden" color="gray" pill onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <FaTimes /> : <FaBars />}
        </Button>
      </div>

      <div className={`${isCollapsed ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <Link 
              to="/" 
              className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${path === '/' ? 'text-blue-700 dark:text-white' : 'text-gray-700 dark:text-gray-400'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${path === '/about' ? 'text-blue-700 dark:text-white' : 'text-gray-700 dark:text-gray-400'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${path === '/projects' ? 'text-blue-700 dark:text-white' : 'text-gray-700 dark:text-gray-400'}`}
            >
              Projects
            </Link>
          </li>
          <li className="md:hidden">
            <div className="py-2 px-3">
              <TextInput
                type="text"
                placeholder="Search..."
                rightIcon={AiOutlineSearch}
                className="w-full"
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <Button color="gray" pill className="w-12 h-10">
          <FaMoon />
        </Button>
        
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            
            label={
              <Avatar
                alt="user"
                img={currentUser.profilePicture || 'https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg'}
                rounded
                className="cursor-pointer"
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </DropdownHeader>
            <Link to="/dashboard?tab=profile">
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider/>
            <DropdownItem onClick={handleSignOut}>
              Sign out
            </DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </Navbar>
  );
}

