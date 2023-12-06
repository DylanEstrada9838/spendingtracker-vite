import StackedBarChart from "../../components/template expenses/StackBars";
import { Container } from "@mui/material";
import CardInvertedColors from "../../components/Paper";
import bgimage from "../../assets/solutions-expense-categories.jpg";
const DashboardPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      minHeight: "100vh", // Adjust as needed
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
   
      <Container maxWidth="xl" sx={{display:"flex",alignItems:"center"}}>
        <StackedBarChart element={"category"} id={"CategoryId"}/>
      </Container >
    </div>
  );
};

export default DashboardPage;
