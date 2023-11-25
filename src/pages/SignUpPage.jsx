import SignUp from "../components/template/SignUpForm";
import bgimage from "../assets/solutions-expense-categories.jpg"



const SignUpPage = () => {
  return (
    <div  style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: 'cover',
      minHeight: '100vh', // Adjust as needed
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <SignUp />
    </div>
  );
};
export default SignUpPage;
