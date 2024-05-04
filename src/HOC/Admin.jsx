import PropTypes from 'prop-types'
import './admin.css'

import useToken from '../login/useToken'
import useNavigate from '../HOC/useNavigate'
import Sidebar from '../sidebar/Sidebar'

import Posts from '../post/Post'
import MyFormComponent from '../Form/Form'
import Postdetail from '../post/Postdetail'
import User from '../user/User'
import Login from '../login/Login'
import Register from '../login/Register'


const routes = {
    '/': {
        component: Posts,
        requiresAuth: true
    }, 
    '/post': {
        component: MyFormComponent,
        requiresAuth: true
    },   
    '/user': {
        component: User,
        requiresAuth: true
    },
    '/login': {
        component: Login,
        requiresAuth: false
    },
    '/register': {
        component: Register,
        requiresAuth: false
    },
    '/post/:id': {
        component: Postdetail,
        requiresAuth: true
    },

}

const Pages = () => {
    const { token } = useToken() 
    const { page, navigate } = useNavigate()

    let CurrentPage = () => <h1>404</h1>
    
    if (routes[page] && routes[page].requiresAuth && !token) {
        return <div><h1>Unauthorized</h1><a href='/?#/login' onClick={() => navigate('/login')}>Please login</a></div>
    }

    if (page === '/login' || page === '/register') {
        CurrentPage = routes[page].component;
        return <CurrentPage />;
    }

    CurrentPage = routes[page].component;

    return (
        <div className='container'>
            <Sidebar />
            <div className='current'>
                <CurrentPage />
            </div>
        </div>
    )
}


Pages.propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func
}

export default Pages