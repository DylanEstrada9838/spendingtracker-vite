import ViewMui from "../../components/template/ViewMui";
import Container from '@mui/material/Container';
import bgimage from "../../assets/solutions-expense-categories.jpg";

const ViewCategoriesPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      minHeight: "100vh", // Adjust as needed
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}><Container maxWidth="sm" sx={{position:"relative",marginTop:"-150px"}}>
        <ViewMui element="category" id="CategoryId" />
      </Container ></div>
      
    
  );
};

export default ViewCategoriesPage;
