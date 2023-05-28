import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./component/Navbar";
import Result from "./component/Result";
import SliderSelect from "./component/SliderSelect";
import TenureSelect from "./component/TenureSelect"

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    interestRate: 5,
    loanTerm: 5,
  })
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} >
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default App;
