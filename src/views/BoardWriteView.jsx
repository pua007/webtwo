import React from 'react';
import BoardWriteSection from '@/components/board/BoardWriteSection';
import TopbannerTwo from '../components/board/Topbanner';

const BoardWriteView = () => {
    return (
        <div className='row'>
            <TopbannerTwo />
            <BoardWriteSection />
        </div>
    );
};

export default BoardWriteView;