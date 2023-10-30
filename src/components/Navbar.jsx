import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <Link to={`/`}>
            <a class="navbar-brand"><i class="bi bi-cash-coin"> Expense Tracker  </i></a>
            </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <Link to={`/category`}>
                <li><a class="dropdown-item">View Categories</a></li>
                </Link>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Methods
                </a>
                <ul class="dropdown-menu">
                  <Link to={`/method`}>
                    <li><a class="dropdown-item">View Methods</a></li>
                </Link >
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Expenses
                </a>
                <ul class="dropdown-menu">
                  <Link to={`/expense`}>
                    <li><a class="dropdown-item">View Expenses</a></li>
                </Link >
                </ul>
              </li>


                
                
            </ul>
          </div>
        </div>
      </nav>
    )
}
;
export default Navbar;