import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LocationDetailBlock = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LocationDetail = () => {
    const location = useLocation();
    const { wi, gyung } = location.state;

    const { kakao } = window;

    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(wi, gyung), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        var markerPosition = new kakao.maps.LatLng(wi, gyung);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
    }, []);

    return (
        <LocationDetailBlock>
            <div id="map" style={{ width: '80%', height: '80%' }}></div>;
        </LocationDetailBlock>
    );
};

export default LocationDetail;
