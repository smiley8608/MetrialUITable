import React, { useEffect, useMemo, useState } from "react";
import {
  
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  
  const [data, setData] = useState<any>([]);
  const [value, setValue] = useState<any>([]);
  const column=useMemo(
    ()=>[
      {field:'id',headerName:"S.no" ,width:160},
      {field:'first_name',headerName:'FirstName',width:160},
      {field:'last_name',headerName:'LastName',width:260},
      {field:'email',headerName:'Email',width:360},
      {field:'gender',headerName:'Gender',width:260},
    ],[]
  );
  useEffect(() => {
    axios
      .get("http://localhost:3004/getalldata")
      .then((responce) => {
        console.log(responce.data);
        setData(responce.data.User);
      })
      .catch();
  }, [setData]);
  const submitHandler = (id: any) => {
    console.log(id);
  };
  return (
    <div>
      
      <Box sx={{height:700,width:"100%"}}>
        <Typography variant="h3" component='h3' sx={{textAlign:'center' ,mt:3,mb:2}}>
          manage-User
        </Typography>
        <Autocomplete      
        disableClearable
        options={data.map((list:any) => list.first_name +'-'+list.last_name )}
        
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
          />
        )}
      />
      <DataGrid 
      columns={column}
      rows={data}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      />
      </Box>

      
    </div>
  );
}

export default App;
