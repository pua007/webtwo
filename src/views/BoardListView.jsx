import React from 'react';
import BoardListSection from '@/components/board/BoardListSection';
import Topbanner from '@/components/board/Topbanner';

const BoardListView = () => {
    return (
            <div className='row'>
                <Topbanner />
                <BoardListSection />
            </div>
    );
};

export default BoardListView;