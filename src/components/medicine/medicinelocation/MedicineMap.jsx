import React, { useEffect } from "react";
import styled from "styled-components";
import { FaBuilding } from "react-icons/fa";
import { IoCallSharp, IoBus } from "react-icons/io5";
import { GiDevilMask } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";

const MapBlock = styled.div`
width: 80%;
margin: 120px auto;
	h1 {
		padding-bottom: 30px;
	}
	.box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 10%;
		#map {
			width: 45%;
			height: 500px;
			border-radius: 30px;
		}
		.sbox {
			width: 45%;
			.call {
				border-radius: 10px;
				box-shadow: 0 0 3px 3px rgba(221, 221, 221, 0.5);
				padding: 20px;
				font-size: 20px;
				p {
					display: flex;
					margin-bottom: 20px;
					&:nth-child(3) {
					margin: 0;
					}
					span {
						display: block;
						width: 28px;
						height: 28px;
						padding: 10px;
						margin-right: 30px;
						border-radius: 50%;
						position: relative;
						background: #104397;
						color: #fff;
						.icon {
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
						}
					}
				}
			}
			.car {
				padding: 30px 15px;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #ddd;
				h3 {
					width: 40%;
					strong {
						margin-right: 5px;
					}
				}
				.right {
					width: 60%;
					h5 {
						margin-bottom: 32px;
						font-size: 20px;
						color: #3dab1d;
						.bus {
							margin-right: 16px;
							border-radius: 20px;
							padding: 5px;
							background: #3dab1d;
							color: #fff;
						}
						.train {
							margin-right: 16px;
							border-radius: 20px;
							padding: 5px;
							background: #9a4e0f;
							color: #fff;
						}
					}
					.subway {
						color: #9a4e0f;
					}
				}
			}
		}
	}
`

const MedicineMap = () => {
	useEffect(()=>{
		const mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.75374664366971, 127.56569187852998),
        level: 3
    };
		const map = new kakao.maps.Map(mapContainer, mapOption);
		
		const markerPosition  = new kakao.maps.LatLng(37.75374664366971, 127.56569187852998); 
		const marker = new kakao.maps.Marker({
    position: markerPosition
	});
	marker.setMap(map);
	}, [])
	

  return (
    <MapBlock>
			<h1>서울사무소</h1>
      <div className="box">
				<div id="map"></div>
				<div className="sbox">
					<div className="call">
						<p><span><FaBuilding className="icon" /></span>서울특별시 성북구 화랑로 32길 76 (석관동)</p>
						<p><span><IoCallSharp className="icon" /></span>02-959-3161</p>
						<p><span><GiDevilMask className="icon" /></span>02-959-3621</p>
					</div>
					<div className="car">
						<h3><strong><IoBus /></strong>버스 이용시</h3>
						<div className="right">
							<h5><span className="bus">일반</span>1222, 120, 127, 261</h5>
							<p>국민은행 석관동 지점 석관시장 하차, 국민은행 옆 도로 이용</p>
						</div>
					</div>
					<div className="car">
						<h3><strong><FaTrainSubway /></strong>지하철 이용시</h3>
						<div className="right">
							<h5 className="subway"><span className="train">6호선</span>돌곶이역 하차</h5>
							<p>8번 출구로 나와 현대자동차 화랑로지점 옆 도로 이용</p>
						</div>
					</div>
				</div>
			</div>
    </MapBlock>
  );
};

export default MedicineMap;
