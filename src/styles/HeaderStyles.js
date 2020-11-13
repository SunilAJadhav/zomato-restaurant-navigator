import styled from 'styled-components';

export const ContentContainer = styled.div`
    @media (min-width: 46.25em) {
        position: fixed;
        height: 200px;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background: #ffffff;
    padding: 30px;
`;

export const CousineList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const GridRow = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GridCol = styled.div`
    flex: 0 0 auto;
    flex-basis: 100%;
    max-width: 100%;

    @media (min-width: 46.25em){
        flex-basis: 50%;
        max-width: 50%;
    }
`;

export const GridCol2 = styled.div`
    flex: 0 0 auto;
    flex-basis: 100%;
    max-width: 100%;

    @media (min-width: 46.25em) {
        flex-basis: 16.6666666667%;
        max-width: 16.6666666667%;
    }
`;

export const GridCol6 = styled.div`
    flex: 0 0 auto;
    flex-basis: 100%;
    max-width: 100%;

    @media (min-width: 46.25em){
        flex-basis: 50%;
        max-width: 50%;
    }
`;