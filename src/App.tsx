import React, { useEffect, useState } from "react";
import {
  
  Autocomplete,

  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { DataGrid, GridColumns } from "@mui/x-data-grid";

function App() {
  
  const [data, setData] = useState<any>([]);
  const [values, setValues] = useState<any>([]);
  const [letters, setLetters] = useState<any>("");
  const column:GridColumns=[
      {field:'id',headerName:"S.no" ,width:160, editable:true},
      {field:'first_name',headerName:'FirstName',width:160,editable:true},
      {field:'last_name',headerName:'LastName',width:260,editable:true},
      {field:'email',headerName:'Email',width:360,editable:true},
      {field:'gender',headerName:'Gender',width:260,editable:true},
    ]

  useEffect(() => {
    axios
      .get("http://localhost:3004/getalldata")
      .then((responce) => {
        console.log(responce.data);
        setData(responce.data.User);
        setValues(responce.data.User);
      })
      .catch();
  }, [setData]);
  const submitHandler = (e:any,value:any) => {
    console.log(value);
    const result =value.split(['-'])
    console.log(result);
    axios.post('http://localhost:3004/searchuser',{result})
    .then(responce=>{
      console.log(responce.data);
      setData(responce.data.User)
    })
    .catch()

    
  };
  const changehandler=(e:any)=>{
    console.log(e.target.value);
     setLetters(e.target.value)
    console.log(letters);
     axios.post('http://localhost:3004/searchbyletter',{letters})
     .then(responce=>{
      console.log(responce.data);
      
     })
    
  }
  const clickhandler=(e:any)=>{
    console.log(e.row);
  }
  return (
    <div>
      
      <Box sx={{height:700,width:"100%"}}>
        <Typography variant="h3" component='h3' sx={{textAlign:'center' ,mt:3,mb:2}}>
          manage-User
        </Typography>
        <Autocomplete      
        disableClearable
        options={values.map((list:any)=>list.first_name +'-'+ list.last_name)}
        
        onChange={submitHandler}
        
        // value={}
        // onChange={(e: any, newValue: string | null) => {
        //   submitHandler(e.target.value);
        // }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onChange={changehandler}
          />
        )}
      />
      <DataGrid 
      columns={column}
      rows={data}
      experimentalFeatures={{ newEditingApi: true }}
      pageSize={10}
      rowsPerPageOptions={[10]}
      
      onCellClick={clickhandler}
      
      />
      </Box>

      
    </div>
  );
}

export default App;
