/* eslint-disable react/prop-types */

import imgUser from "../assets/images/avatar.jpg"
import imgUser2 from "../assets/images/avatar2.jpg"
import imgUser3 from "../assets/images/avatar3.jpg"
import imgUser4 from "../assets/images/avatar4.jpg"
import { FaCalendarAlt, FaLayerGroup, FaRegClipboard } from "react-icons/fa";
import { PiChatsCircle } from "react-icons/pi";
import { MdOutlineAttachFile } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";

const Task = ({name}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
 const [isModalOpen, setModalOpen] = useState(false)


  

  

  const handleGetFiles = async () => {
    try {
      // setUploadedFiles([])
      const response = await axios.get(`http://localhost:3000/files/${name}`, {
      });

      const files = response.data.files;
      response ? setUploadedFiles(files) : setUploadedFiles([]);
    } catch (error) {
      setUploadedFiles([]);
      console.error('Error fetching files:', error);
    }
  };

  
  

 
  useEffect(() => {
    handleGetFiles()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
       

        <div className="card-item p-2" style={{backgroundColor:"#F2F4F7"}}>
        <div className='bg-white p-2' style={{borderRadius:"10px"}}>
        <div className="client-info" style={styleHeader}>
        <div className='d-flex m-2 justify-content-start align-items-center'>
          <img src={imgUser} alt="" style={{width: "40px", height: "40px", borderRadius: "50%"}} />
          <h6 className='p-2 mt-2'>Client Name</h6>
        </div>  
        <div className='d-flex justify-content-start align-items-center'>
        <img src={imgUser2} alt="" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />

          <h6  className='p-2 mt-2'>Client Name</h6>
        </div>
        </div>
        <div className="content  " style={styleHeader}>
          <p className='p-2'><FaLayerGroup/><span className='m-1'>Lorem ipsum dolor si...</span></p>
          <p> <FaRegClipboard /><span className='p-2'>1/2</span></p>
          
        </div>
        <div className="card-footer" style={styleHeader}>
          <div className="assignee d-flex align-items-center justify-content-start ">
            <img src={imgUser3} alt="" style={{width: "40px", height: "40px", borderRadius: "50%"}} />
            <img className='m-2' src={imgUser4} alt="" style={{width: "40px", height: "40px", borderRadius: "50%"}} />
          </div>
          <div style={{backgroundColor: "#F2F4F7"}}>12+</div>
          <div>
          <PiChatsCircle />
          <span>15</span>
          </div>
          <div>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-white" onClick={() => setModalOpen(true)}><MdOutlineAttachFile /></button>
          <span>{uploadedFiles.length}</span>
          </div>
          <div>
            <FaCalendarAlt/>
            <span>30-12-2024</span>
          </div>
        </div>
        </div>
        {isModalOpen && <AddTaskModal name={name} isModalOpen={isModalOpen} setModalOpen={setModalOpen} />}
      </div> 






    );
    
};

export default Task;

const styleHeader = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
  