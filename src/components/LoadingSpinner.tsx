import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';

const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// TODO: make it customizable
export const LoadingSpinner = styled.div`
    --back-color: rgba(255, 255, 255, 0.27);
    --size: 2rem;
    --thickness: 0.25rem;
    --fore-color: rgb(255, 255, 255);

    display: inline-block;
    margin: 0;
    font-size: 1rem;
    position: relative;
    text-indent: -9999em;
    box-sizing: border-box;
    border-top: var(--thickness) solid var(--back-color);
    border-right: var(--thickness) solid var(--back-color);
    border-bottom: var(--thickness) solid var(--back-color);
    border-left: var(--thickness) solid var(--fore-color);
    transform: translateZ(0);
    animation: ${animation} 1.5s infinite linear;

    &,
    &:after {
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
    }
`;
