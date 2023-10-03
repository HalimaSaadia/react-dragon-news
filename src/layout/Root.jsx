
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div  className="font-Popins max-w-7xl mx-auto">
            <Outlet />
        </div>
    );
};

export default Root;