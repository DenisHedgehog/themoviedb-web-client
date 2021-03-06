import styled from 'styled-components';

export default styled.div`
    display: flex;
    padding: 16px;
    border-radius: ${({ theme }) => theme.defaultBorderRadius};
    box-shadow: ${({ theme }) => theme.defaultShadow};
    background-color: #fff;
`;