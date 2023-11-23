import styled from 'styled-components';

export const AppContainer = styled.div`
    display: inline-flex;
    max-width: 1500px;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #22254b;
`;

export const MoviesForm = styled.div`
    display: inline-flex;
    max-width: 960px;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #ffffff;
    font-size: 5px;
    font-style: normal;
    background-color: #22254b;
    margin: 0 auto;
`;

export const MoviesWrap = styled.div`
    width: 100px;
    color: #ffffff;
    font-size: 5px;
    font-style: normal;
    background-color: #373b69;
    flex-basis: calc(12.5% - 20px);
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;

    .overview {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
        width: 80px;
        height: 150px;
        display: none;
        position: absolute;
    }

    &:hover .overview {
        display: block;
    }
`;

export const MoviesTitle = styled.div`
    margin-left: 10px;
`;

export const Poster = styled.img`
    width: 100px;
    height: 150px;
`;
