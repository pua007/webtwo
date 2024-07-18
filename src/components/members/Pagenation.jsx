import React from 'react';
import styled from 'styled-components';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { MdFirstPage, MdLastPage } from 'react-icons/md';

const PagenationBlock = styled.div`
    .pagination {
        margin-top: 5%;
        display: flex;
        gap: 10px;
        justify-content: center;
        .page-item {
            margin-bottom: 5px;
            .page-link {
                font-size: 20px;
            }
        }
    }
`;

const Pagenation = ({
    setCurrentPage,
    itemsPerPage,
    totalItems,
    currentPage,
    setActive,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pre = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1);
            setActive(null);
        }
    };
    const next = () => {
        if (currentPage != totalItems / itemsPerPage) {
            setCurrentPage(currentPage + 1);
            setActive(null);
        }
    };
    console.log(currentPage);
    return (
        <PagenationBlock>
            <ul className="pagination">
                <button
                    onClick={() => setCurrentPage(1)}
                    style={{ fontSize: 20 + 'px' }}
                >
                    <MdFirstPage />
                </button>
                <button onClick={pre}>
                    <SlArrowLeft />
                </button>
                {pageNumbers.map((number, index) => (
                    <li key={index} className="page-item">
                        <button
                            onClick={() => {
                                setCurrentPage(number), setActive(null);
                            }}
                            className="page-link"
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <button onClick={next}>
                    <SlArrowRight />
                </button>
                <button
                    onClick={() => setCurrentPage(pageNumbers.length)}
                    style={{ fontSize: 20 + 'px' }}
                >
                    <MdLastPage />
                </button>
            </ul>
        </PagenationBlock>
    );
};

export default Pagenation;
