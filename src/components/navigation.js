import React, {useContext} from 'react';
import UserContext from "../contexts/userContext";

const Navigation = () => {
    const userInfo = useContext(UserContext);

    return (
        <div>
            Navigation...
        </div>
    );
};

export default Navigation;
