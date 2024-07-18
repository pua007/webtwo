import React, { useState } from 'react';
import styled from 'styled-components';

const HashTagBlock = styled.div`
    .hash {
        gap: 2px;
    }
    .hash_m {
        font-size: 10px;
    }
    .tag {
        gap: 5px;
        .tag_group {
            background-color: #ebebeb;
            color: #1e1e1e;
            display: inline-block;
            padding: 2px 8px 0;
            margin-top: 3px;
            margin-left: 3px;
            vertical-align: top;
            cursor: pointer;
            &.on {
                background: yellow;
            }
            &:hover {
                background: lightyellow;
            }
        }
    }
`;

const HashTag = ({ hashTagPush, on, toggle }) => {
    return (
        <HashTagBlock>
            <div className="hash">
                <div className="hash_m">
                    아래 #해시태그를 선택하시면, 해당 해시태그와 관련된
                    질문&답변을 확인하실 수 있습니다.
                </div>
                <div className="tag">
                    <a
                        className={on === 1 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#지원서'), toggle(1);
                        }}
                    >
                        #지원서
                    </a>
                    <a
                        className={on === 2 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#지원'), toggle(2);
                        }}
                    >
                        #지원
                    </a>
                    <a
                        className={on === 3 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#코딩테스트'), toggle(3);
                        }}
                    >
                        #코딩테스트
                    </a>
                    <a
                        className={on === 4 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#인터뷰'), toggle(4);
                        }}
                    >
                        #인터뷰
                    </a>
                    <a
                        className={on === 5 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#전형결과'), toggle(5);
                        }}
                    >
                        #전형결과
                    </a>
                    <a
                        className={on === 6 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#공고'), toggle(6);
                        }}
                    >
                        #공고
                    </a>
                    <a
                        className={on === 7 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#추천인'), toggle(7);
                        }}
                    >
                        #추천인
                    </a>
                    <a
                        className={on === 8 ? 'tag_group on' : 'tag_group'}
                        onClick={() => {
                            hashTagPush('#인재풀'), toggle(8);
                        }}
                    >
                        #인재풀
                    </a>
                </div>
            </div>
        </HashTagBlock>
    );
};

export default HashTag;
