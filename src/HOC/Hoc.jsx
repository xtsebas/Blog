import { withRouter } from 'react-router-dom';

const Router = (WrappedComponent) => {
    const WithRouter = (props) => {
        return <WrappedComponent {...props} />;
    };

    return withRouter(WithRouter);
};

export default Router;
