import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
       <Link to={`/sign-in`}>
        <button>Sign-in</button>
        </Link>
      <h1>HomePage</h1>
     
    </div>
  );
};
export default HomePage;
