import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData, apiUrl} from './data';
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Spinner from "./components/Spinner";
const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch(e) {

    }
    setLoading(false);
  }   
  useEffect(() => {
    fetchData();
  },[])

  return(
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <Navbar/>
      <div className="bg-bgDark2">
        <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>

        </div>
      <div className="w-11/12 mx-auto max-w-[1200px] flex justify-content items-center min-h-[50vh] flex-wrap">
     
       {
       loading? (<Spinner/>): (<Cards courses={courses} category={category}/>)
      }
      </div>
      </div>
  
  
    </div>
  );
};

export default App;
