/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";


const AddTaskModal = ({name, isModalOpen, setModalOpen}) => {
  const [fileInput, setFileInput] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  console.log({name});

  const handleFileInputChange = (e) => {
    // setFileInput(e.target.files);
    // Object.values(e.target.files).map(item => console.log(item))
    const files = e.target.files;
  const filesArray = Array.from(files);
  setFileInput(filesArray);
  };

  const handleGetFiles = async () => {
    try {
      setUploadedFiles([])
      const response = await axios.get(`http://localhost:3000/files/${name}`, {
      });

      const files = response.data.files;
      response ? setUploadedFiles(files) : setUploadedFiles([]);
    } catch (error) {
      setUploadedFiles([]);
      console.error('Error fetching files:', error);
    }
  };

    const handleUpload = async () => {
        console.log("clicked");
        try {
          if (!fileInput || fileInput.length === 0) {
            return alert('Please select one or more files to upload.');
          }
      
          const formData = new FormData();
      
          fileInput.forEach((file) => {
            formData.append('files', file); // Use the same field name 'files' here
          });
      
          formData.append('task_name', name);
      
          await axios.post('http://localhost:3000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          alert('Files uploaded successfully!');
          handleGetFiles()
        } catch (error) {
          console.error('Error uploading files:', error);
          alert('Error uploading files. Please try again.');
        }
      };
      
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Multiple files Upload</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      </div>
      <div>
        <label>
          <input type="file" onChange={handleFileInputChange} multiple />
        </label>
      </div>
      <div>
      {uploadedFiles.map((file, index) => <div key={index}>{file.filename}</div>)}
      </div>
<div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
        <button className="btn btn-primary" onClick={() => {
            console.log("sdfs");
            handleUpload()
        }}>Upload Files</button>
     
      </div>
    </div>
  </div>
</div>
    );
};

export default AddTaskModal;