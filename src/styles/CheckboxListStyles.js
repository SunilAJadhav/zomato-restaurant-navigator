import styled from 'styled-components';

export const ColumnTitle = styled.h2`
   text-transform: uppercase;
    font-weight: 700;
`;

export const CheckboxContainer = styled.div`
    flex: 0 0 auto;

    @media (min-width: 46.25em) {
        flex-basis: 33.33333333%;
        max-width: 33.33333333%;
    }
`;

export const CousineListGrid = styled.div`
   display: grid;
    width: 405px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 141px;
    overflow: hidden;
`;