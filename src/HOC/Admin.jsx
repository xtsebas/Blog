import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Router from './withRouter';
import Posts from '../post/Post';
import User from '../user/User';
import Settings from './Settings';
import MyFormComponent from '../Form/Form';
import Login from '../login/Login';
import Postdetail from '../post/Postdetail';

const Admin = () => {
    return (
        <div>
            <h1>Panel de Administración</h1>
            <Routes>
                <Route exact path="/" component={Router(Login)} />
                <Route exact path="/posts" component={Router(Posts)} />
                <Route path="/users" component={Router(User)} />
                <Route path='/post' Component={Route(MyFormComponent)}></Route>
                <Route path='/postid' Component={Route(Postdetail)}></Route>
            </Routes>
        </div>
    );
};

export default Admin;
