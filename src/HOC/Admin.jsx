import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Router from './withRouter';
import Posts from '../post/Post';
import User from '../user/User';
import Settings from './Settings';

const Admin = () => {
    return (
        <div>
            <h1>Panel de Administración</h1>
            <Routes>
                <Route exact path="/" component={Router(Posts)} />
                <Route path="/users" component={Router(User)} />
            </Routes>
        </div>
    );
};

export default Admin;
