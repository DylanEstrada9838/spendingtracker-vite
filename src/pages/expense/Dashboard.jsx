import StackedBarChart from "../../components/template expenses/StackBars";
import { Container } from "@mui/material";
import CardInvertedColors from "../../components/Paper";

const DashboardPage = () => {
  return (
    <div>
   
      <Container maxWidth="xl" sx={{marginTop:"1em",display:"flex",alignItems:"center"}}>
        <StackedBarChart element={"category"} id={"CategoryId"}/>
      </Container >
    </div>
  );
};

export default DashboardPage;
