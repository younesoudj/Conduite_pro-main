import React from 'react';
import Button from '@mui/material/Button';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import "../Block/Blocklist.css";
import { useState } from 'react';
import Sidebar from "../../Components/Sidebar";


function MonTableau() {
 const DataTable = [
  
      { id: 1, website: 'WWW.facebook.com', last: '13/10/2023', added: '13/10/2023' },
      { id: 2, website: 'WWW.youtub.com', last: '22/10/2023', added: '22/10/2023' },
      { id: 3, website: 'WWW.github.com', last: '29/10/2023', added: '29/10/2023' },
      { id: 4, website: 'WWW.dell.com', last: '30/10/2023', added: '30/10/2023' },
      { id: 5, website: 'WWW.clock.com', last: '25/10/2023', added: '25/10/2023' },
      { id: 6, website: 'WWW.pysera.com', last: '13/11/2023', added: '13/11/2023' },
    
  ];
  const [rows, setRows] = useState(DataTable);
  const [openDialog, setOpenDialog] = useState(false);
  const [newWebsite, setNewWebsite] = useState('');

  const columns=[
             {id:'id',name:'ID'},
             {id:'website',name:'Website'},
             {id:'last',name:'Last time blocked'},
             {id:'added',name:'Added on'}
         ];
         const addRow = () => {
          const newId = rows.length + 1;
          const newRow = { id: newId, website: 'wesite to block', last: 'last time blocked', added: 'added on' };
          setRows([...rows, newRow]);
      };
    
    
      const [searchValue, setSearchValue] = useState('');
    
      const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        const filteredRows = DataTable.filter(row =>
          row.website.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setRows(filteredRows);
      };

      const handleOpenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleCloseDialog = () => {
        setOpenDialog(false);
      };
    
      const handleAddWebsite = () => {
        const newId = rows.length + 1;
        const newAddedOn = new Date().toLocaleDateString(); // Date actuelle
        const newSite = { id: newId, website: newWebsite, last: '', added: newAddedOn };
        setRows([...rows, newSite]);
        setNewWebsite('');
        setOpenDialog(false);
      };
    

  return ( 
    <div  className="flex h-screen " >
       
        <Sidebar  />
        
        <div className="tableau" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
         <div style={{height:'7vh'}}>
       </div>
       <div style={{height:'13vh'}}>
       <Grid container spacing={60} alignItems="center">
      <Grid item xs={6}  > 
      <TextField  className='chercher'
                label="Search a website"
               variant="outlined"
                value={searchValue}
                onChange={handleSearchChange}
                style={{ marginBottom: '10px' }}
            />

      </Grid>
      <Grid item xs={6}  > 
      <button variant="contained" color="primary" style={{ color: 'white' }} onClick={handleOpenDialog} className='ajouter'>Add a website</button>
      </Grid>
    </Grid>
     
</div>   
     
    
        <Paper sx={{width:'100'}}>
          
          <TableContainer sx={{ borderSpacing: 5 }}>
            <table>
              <TableHead  >
                <TableRow  >
                  
                    <TableCell  className='cell1' key={'id'}>{'ID'} </TableCell>
                    <TableCell  className='cell2' key={'websit'}>{'Website'} </TableCell>
                    <TableCell  className='cell3' key={'last'}>{'Last time blocked'} </TableCell>
                    <TableCell  className='cell4' key={'added'}>{'Added on'} </TableCell>
                  
                </TableRow> 
              </TableHead>
              <TableBody>
              {rows.map((row) => (
                            <TableRow key={row.id}>
                                {columns.map((column) => (
                                    <TableCell key={column.id}>
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
              </TableBody>

            </table>
          </TableContainer>
   </Paper>
   <Dialog className='fenetre' open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add a website to the blocklist</DialogTitle>
        <DialogContent>
          <TextField
            label="URL du site"
            value={newWebsite}
            onChange={(e) => setNewWebsite(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annuler</Button>
          <Button onClick={handleAddWebsite} variant="contained" color="primary">
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>        
      </div>
   </div> 
   );

};
 
export default MonTableau;

//style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}