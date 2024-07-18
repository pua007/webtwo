import React from 'react';
import PlayerDetail from '@/components/baseball/PlayerDetail';
import { useLocation } from 'react-router-dom';

const BaseBallDetailView = () => {
    const location = useLocation()

    const { item, index } = location.state
    return (
        <div className='row'>
            <PlayerDetail item={item} index={index} />
        </div>
    );
};

export default BaseBallDetailView;