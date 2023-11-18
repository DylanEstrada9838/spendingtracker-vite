import ViewMui from "../../components/template expenses/ViewMui";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ViewExpensesPage = () => {
  return (
    <div>
      <Container maxWidth="lg" style={{border:"2px black solid"}}>
        <ViewMui element="expense" />
      </Container>
    </div>
  );
};

export default ViewExpensesPage;
