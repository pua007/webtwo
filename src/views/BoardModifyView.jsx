import React from 'react';
import BoardModifySection from '@/components/board/BoardModifySection'
import { useLocation } from 'react-router-dom';
import TopbannerTwo from '../components/board/Topbanner';

const BoardModifyView = () => {
    const location =useLocation()
    const  { item } = location.state
    return (
        <div className='row'>
            <TopbannerTwo />
            <BoardModifySection item={item} />
        </div>
    );
};

export default BoardModifyView;