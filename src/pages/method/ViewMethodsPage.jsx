import ViewMui from "../../components/template/ViewMui";
import Container from '@mui/material/Container';
import bgimage from "../../assets/solutions-expense-categories.jpg";
const ViewMethodsPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      minHeight: "100vh", // Adjust as needed
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
    }}> <Container maxWidth="sm" sx={{position:"relative",marginTop:"-200px"}}>
       <ViewMui element="method" id="MethodId" />
     </Container ></div>
    
   
  );
};

export default ViewMethodsPage;
