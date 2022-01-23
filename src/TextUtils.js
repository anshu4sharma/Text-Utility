import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import TextRotateVerticalIcon from "@mui/icons-material/TextRotateVertical";
import TextRotationNoneIcon from "@mui/icons-material/TextRotationNone";
export default function TextUtils() {
  const [text, setText] = useState("");
  const EventChange = (event) => {
    setText(event.target.value);
  };

  
  
 
    
  const upperCase=()=>{

    let newText = text.toUpperCase();
    setText(newText)
  }
  const lowerCase=()=>{

    let newText = text.toLowerCase();
    setText(newText)
  }
  const deleteme=()=>{

   
    setText("")
  }

  return (
    <>
      <div className="container mx-6 my-3">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={text}
            onChange={EventChange}
          ></textarea>
          <label for="floatingTextarea2">Enter Text Here</label>
        </div>
        <div >
          <Stack direction="row" spacing={1}>
        
            <IconButton>
              <TextRotationNoneIcon onClick={upperCase} />
            </IconButton>
            <IconButton>
              <TextRotateVerticalIcon onClick={lowerCase}   />
            </IconButton>
            <IconButton>
              <DeleteIcon  onClick={deleteme} />
            </IconButton>
            
          </Stack>

         
        </div>
      </div>
      <div className="container my-4">
 <p className="my-3">No. of Characters : {text.length} </p>
<br/>
      </div>
    </>
  );
}
