import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import SignUp from '../components/SignUp.jsx';
import LoginForm from '../components/form_manipulation.jsx';
import UserList from '../components/UserList.jsx';

const RouteLayout = () => (
    <div className = "container">
        <nav style={{padding: "20px", borderBottom: "1px solid #ccc" }}>
            <Link to="/" style={{ margin: "10px" }}>Sign Up</Link>
            <Link to="/login" style={{ margin: "10px" }}>Login</Link>
            <Link to="/users" style={{ margin: "10px" }}>User List</Link>
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RouteLayout/>,
        children: [
            {index: true, element: <SignUp/>},
            {path: "login", element: <LoginForm/>},
            {path: "users", element: <UserList/>}
        ]
    }
]);
