
import styled from 'styled-components';

export const RestaurantContainer = styled.section`
    background: #e5e5e5;
    flex-basis: 30%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    text-align: left;
    max-height: 450px;
`;

export const RestaurantDetails = styled.section`
    flex-basis: 70%;
    display: flex;
    flex-direction: row;
    padding: 30px;
    text-align: left;
`;

export const ImageDisplay = styled.div`
    flex-basis: 50%;
    padding-right: 20px;
`;

export const Heading1 = styled.h1`
    color: #373737;
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 5px 0;
`;
  
export const Heading3 = styled.h3`
    margin: 0 0 20px;
    color: gray;
    font-size: 12px;
    line-height: 14px;
`;
  
 export const selectedRestaurant = styled.h3`
    margin: 0 0 20px 0;
    color: #828789;
    font-size: 12px;
`;

export const ListViewElement = styled.li`
    padding: 10px 0 10px 30px;
    border-top: 1px solid #cccecf;
    cursor: pointer;
    background: ${props => (props.isSelected ? "#00c1c0" : 'none')};
    color: ${props => (props.isSelected ? "#FFFFFF" : 'none')};
`;

export const TextSubHeader = styled.h2`
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    padding-left: 30px;
`;

export const TextDetailedViewHeader = styled.p`
    margin: 20px 0 0;
    color: #373737;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 10px;
`;

export const OpenCloseContainer = styled.h4`
    padding: 0 6px 4px 0;
    margin: 0;
    font-size: 16px;
    font-weight: 100;
`;

export const OpenStatus = styled.span`
    padding: 3px 6px 4px;
    border-radius: 4px;
    background: #00c547;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
`;

export const CloseStatus = styled(OpenStatus)`
    background: #cd474c;
`;

export const RightICon = styled.span`
    color: green;
    padding-right: 10px;
`;

export const WrongICon = styled.span`
    color: red;
    padding-right: 10px;
`;

export const Heading4 = styled.h4`
    color: #5a6062;
    font-size: 16px;
    margin: 3px 0 0;
    font-weight: 100;
`;

export const PhoneContainer = styled.span`
    margin: 20px 0 0;
    color: #373737;
`;