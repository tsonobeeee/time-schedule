import { useState, useEffect } from "react"
import { firebaseStore } from "./firebase";
import { AppBar, Toolbar, Typography, TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";


function App() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const searchTime = async() => {
      const res = await firebaseStore.collection('time').get();
      if (res.empty) return [];

      let timeList = [];
      res.forEach(doc => {
        timeList.push(doc.data());
      })

      setTime(timeList);
    }

    searchTime();
    setLoading(false);
  }, []);

  return (
    <div>    
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Time Schedule
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: 10 }}>
        <TableContainer component={Paper} >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class</TableCell>
                <TableCell align="right">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading && time.map((row) => (
                <TableRow key={row.class}>
                  <TableCell component="th" scope="row">
                    {row.class}
                  </TableCell>
                  <TableCell align="right">{row.hour}時{row.minute}分</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>

  );
}

export default App;
