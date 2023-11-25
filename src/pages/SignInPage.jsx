import SignIn from "../components/template/SignInForm";
import bgimage from "../assets/solutions-expense-categories.jpg"
import "../styles/HomePage.css"


const SignInPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: 'cover',
      minHeight: '100vh', // Adjust as needed
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      
        <SignIn />
      
    </div>
  );
};
export default SignInPage;
