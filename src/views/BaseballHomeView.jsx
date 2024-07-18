import React from 'react'; 
import BaseBallMainPhoto from '../components/baseballhome/BaseBallMainPhoto';
import BaseBallSubPhoto from '../components/baseballhome/BaseBallSubPhoto';
import BaseBallProduct from '../components/baseballhome/BaseBallProduct';

const BaseballHomeView = () => {
    return (
        <div>
            <BaseBallMainPhoto />
            <BaseBallSubPhoto />
            <BaseBallProduct />
        </div>
    );
};

export default BaseballHomeView;