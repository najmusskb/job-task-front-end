/* eslint-disable react/prop-types */

import Task from "./Task";


const TaskSection = ({title, tasks}) => {
    return (
            <div className="section-container" style={{  minWidth: "450px",height: "95vh" }}>
              <div className="header" style={{ ...styleHeader, backgroundColor: "#F2F4F7", padding: '10px' }}>
                <h5>{title}</h5>
             <span  style={{backgroundColor:" #E8EEF3",padding:"5px", paddingLeft:"10px",paddingRight:"10px", borderRadius:"5px"}}>{tasks?.length}</span> 
              </div>
              <div style={{
                height: "94vh",
                overflowY: "auto", 
              }}>
              {tasks.map((task, index) => <Task key={index} name={task.name}/>)}
              </div>
            </div>
    );
};

export default TaskSection;
const styleHeader = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };