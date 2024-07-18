import React from 'react';
import styled from 'styled-components';
import BenefitCard from './BnafitCard';
import BenefitTile from './BenefitTile';

const Benefitblock = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

const BenefitSection = () => {
    const text = [
        '풍요로운 명절. 감사의 마음을 전하기 위해설과 추석에 각각 30만원씩 카카오페이머니(현금)를 지급합니다.',

        '아이와 함께하는 출퇴근이 어색하지 않아요!만 0세부터 5세반까지 구성된 학급과 안전한 먹거리, 최고시설의교육환경을 갖추고 있으며, 푸르니 표준보육과정을 기본으로 체육,음악,영어 등카카오만의 특성화 프로그램이 함께 운영되고 있습니다.',

        '크루들의 업무 몰입 뿐 아니라 자기개발, 여가/취미 활동 지원을위한 카카오베네핏!연 360만원까지 사용할 수 있는 개인별 베네핏카드를 지급합니다.',

        '풍요로운 명절. 감사의 마음을 전하기 위해설과 추석에 각각 30만원씩 카카오페이머니(현금)를 지급합니다.',

        '상시로 제공되는 음료 및 간식, 그리고 업무에 몰두하느라 시간 가는줄몰랐던 크루들을 위해 야근 시 저녁 식대를 실비 지원하고, 밤 10시 이후엔안전한 귀가를 위해 택시비를 실비 지원하고 있어요.',

        '3년마다 1개월의 휴가가 생긴다고?바쁘게 달려온 크루들의 리프레시를 위해 만 3년 근무마다 1개월 유급휴가와휴가비 200만원을 지급합니다. 낯선 도시에서 한 달 살기, 평일 카페투어 다니기등 직장인이 되고 쉽게 해보지 못한 것들을 하며 리프레시를 할 수 있습니다.',

        '매월 핫한 주제에 대한 책들를 큐레이션 하고, 업무나관심분야가 비슷한 크루들이 추천하는 책들도 살펴볼 수 있어서 어떤 책을 읽어봐야할지 막막할 때 도움을 받을 수 있어요.',

        '책을 통해 항상 가까이에서 크루의 성장을 돕습니다.크루들의 주도적인 성장과 역량 향상을 위해 업무 관련 도서를 전자도서관에서 ebook으로 지원합니다. ',
    ];

    return (
        <Benefitblock>
            <BenefitCard
                title={'명절선물'}
                img={'/assets/image/gift.png'}
                text={text[0]}
            />
            <BenefitCard
                title={'어린이집'}
                img={'/assets/image/toy.png'}
                text={text[1]}
            />
            <BenefitCard
                title={'자기발전 지원금'}
                img={'/assets/image/card.png'}
                text={text[2]}
            />
            <BenefitCard
                title={'명절선물'}
                img={'/assets/image/gift.png'}
                text={text[3]}
            />
            <BenefitCard
                title={'교통 지원금'}
                img={'/assets/image/bus.png'}
                text={text[4]}
            />
            <BenefitCard
                title={'여가지원'}
                img={'/assets/image/travel.png'}
                text={text[5]}
            />
            <BenefitCard
                title={'학위취득 지원'}
                img={'/assets/image/hat.png'}
                text={text[6]}
            />
            <BenefitCard
                title={'책 구입지원'}
                img={'/assets/image/book.png'}
                text={text[7]}
            />
        </Benefitblock>
    );
};

export default BenefitSection;
