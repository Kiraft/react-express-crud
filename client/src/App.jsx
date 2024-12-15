import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import {TaskProvider} from "./context/TasksContext.jsx";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TaskPage';
import TasksFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar.jsx';

function App(){
  return(
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <main className='container mx-auto px-10'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}> </Route>
            <Route path='/login' element={<LoginPage />}> </Route>
            <Route path='/register' element={<RegisterPage />}> </Route>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route path='/tasks' element={<TasksPage />}> </Route>
              <Route path='/add-task' element={<TasksFormPage />}> </Route>
              <Route path='/tasks/:id' element={<TasksFormPage />}> </Route>
              <Route path='/profile' element={<ProfilePage />}> </Route>
            </Route>
          </Routes>
          </main>
        </BrowserRouter>
        
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
