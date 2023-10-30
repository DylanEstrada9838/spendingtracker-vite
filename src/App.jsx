import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './styles/App.css' 
import Navbar from './components/Navbar'
import ViewCategoriesPage from './pages/category/ViewCategoriesPage'
import CreateCategoryPage from './pages/category/CreateCategoryPage'
import UpdateCategoryPage from './pages/category/UpdateCategoryPage'
import DeleteCategoryPage from './pages/category/DeleteCategoryPage'
import HomePage from './pages/HomePage'
import ViewMethodsPage from './pages/method/ViewMethodsPage'
import CreateMethodPage from './pages/method/CreateMethodPage'
import UpdateMethodPage from './pages/method/UpdateMethodPage'
import DeleteMethodPage from './pages/method/DeleteMethodPage'
import ViewExpensesPage from './pages/expense/ViewExpensesPage'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <div>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/category" element={<ViewCategoriesPage/>}/>
              <Route path="/category/create" element={<CreateCategoryPage/>}/>
              <Route path="/category/update/:id" element={<UpdateCategoryPage/>}/>
              <Route path="/category/delete/:id" element={<DeleteCategoryPage/>}/>

              <Route path="/method" element={<ViewMethodsPage/>}/>
              <Route path="/method/create" element={<CreateMethodPage/>}/>
              <Route path="/method/update/:id" element={<UpdateMethodPage/>}/>
              <Route path="/method/delete/:id" element={<DeleteMethodPage/>}/>

              <Route path="/expense" element={<ViewExpensesPage/>}/>

          </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
