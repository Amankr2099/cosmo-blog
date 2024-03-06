import React, { useContext } from 'react'
import {Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import {AboutSection} from './pages/AboutSection.jsx'
import {ContactSection} from './pages/ContactSection.jsx'
import {Profile} from './pages/Profile.jsx'
import { Layout } from './pages/Layout.jsx'
import {SignUp} from './pages/SignUp.jsx'
import {Login} from './pages/Login.jsx'
import { PostsSection } from './components/PostsSection.jsx'
import { WritePost } from './components/WritePost.jsx'
import { SinglePost } from './components/SinglePost.jsx'
import UserContext from './components/Context/UserContext.jsx'
import { EditPost } from './components/EditPost.jsx'


export const App = () => {
  const { user } = useContext(UserContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<AboutSection/>} />
        <Route path='/contact' element={<ContactSection/>} />
        <Route path='/posts' element={<PostsSection/>} />
        <Route path="/post/:id" element={<SinglePost />} />

        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/profile' element={ user? <Profile/>: <Navigate to={'/signup'}/> } />
        <Route path='/write-post' element={user? <WritePost/>: <Navigate to={'/signup'}/>} />
        <Route path='/edit-post/:id' element={user? <EditPost/>: <Navigate to={'/signup'}/>} />


      </Route>
    )
  );

  return (
   
    <RouterProvider router={router}/>

  );
};
