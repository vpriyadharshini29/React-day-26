import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import BlogSSR from './components/Miniproject1'
import ProductSSG from './components/Miniproject2'
import UserSSR from './components/Miniproject3'
import NewsSite from './components/Miniproject4'
import Task1_Intro from './components/Task1';
import Task2_Install from './components/Task2';
import Task3_Structure from './components/Task3';
import Task4_BasicPage from './components/Task4';
import Task5_SSR from './components/Task5';
import Task6_SSG from './components/Task6';
import Task7_DynamicSSG from './components/Task7';
import Task8_CompareSSR from './components/Task_8';
import Task8_CompareSSG from './components/Task8';
import Task9_SEO from './components/Task9';
import Task10_Fallback from './components/Task10';
import Task11_Revalidate from './components/Task11';
import Task12_Navigation from './components/Task12';
import Task13_Error from './components/Task13';

function App() {
  

  return (
    <>
    
        <Task1_Intro />
        <Task2_Install />
        <Task3_Structure />
       <Task4_BasicPage/>
       <Task5_SSR />
       <Task6_SSG />
      <Task7_DynamicSSG />
       <Task8_CompareSSR/>
        <Task8_CompareSSG />
        <Task9_SEO/>
        <Task10_Fallback />
        <Task11_Revalidate/>
        <Task12_Navigation/>
   <Task13_Error />
         <BlogSSR/>
       <ProductSSG/>
          <UserSSR/>
              <NewsSite/>
      
    
     
   
    
   
     
    </>
  )
}

export default App
