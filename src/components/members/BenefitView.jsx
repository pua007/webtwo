import React from 'react';
import BenefitSection from './BenefitSection';
import BenefitTile from './BenefitTile';
import Location from './Location';

const BenefitView = () => {
    return (
        <div style={{ flex: '1' }}>
            <BenefitTile />
            <BenefitSection />
            <Location />
        </div>
    );
};

export default BenefitView;
