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
}

const Pages = () => {
    const { token } = useToken() 
    const { page, navigate } = useNavigate()

    let CurrentPage = () => <h1>404</h1>
    
    if (routes[page] && routes[page].requiresAuth && !token) {
        return <div><h1>Unauthorized</h1><a href='/?#/login' onClick={() => navigate('/login')}>Please login</a></div>
    }

    CurrentPage = routes[page].component

    return (
        <div className='container'>
            <Sidebar />
            <CurrentPage />
        </div>
    )
}


Pages.propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func
}

export default Pages