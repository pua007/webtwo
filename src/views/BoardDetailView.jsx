import React from 'react';
import BoardDetailSection from '@/components/board/BoardDetailSection'
import { useLocation } from 'react-router-dom';
import TopbannerTwo from '@/components/board/TopbannerTwo';

const BoardDetailView = () => {
    const location = useLocation()
    const {item} = location.state
    return (
        <div className='row'>
            <TopbannerTwo />
            <BoardDetailSection item={item} />
        </div>
    );
};

export default BoardDetailView;