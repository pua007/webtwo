import React from 'react';
import styled from 'styled-components';
import PlayerCategory from '@/components/baseball/PlayerCategory';
import PlayerSection from '@/components/baseball/PlayerSection';
import { useSelector } from 'react-redux';




const BaseBallView = () => {
    const category = useSelector(state=>state.players.category)
    return (
        <div>
            <PlayerCategory title={category} />
            <PlayerSection title={category} />
        </div>
    );
};

export default BaseBallView;