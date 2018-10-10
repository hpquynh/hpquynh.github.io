import styled from 'styled-components';

export const Section = styled.section`
  background-image: linear-gradient(135deg, ${props => props.theme.color.snow} 0%, ${props => props.theme.color.cloud} 100%);
  background-attachment:fixed;
  transition: background .2s ease;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
