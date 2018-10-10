import styled from 'styled-components';

export const TopSection = styled.section`
  background-image: linear-gradient(to top, ${props => props.theme.color.dark} 0%, ${props => props.theme.color.darker} 100%);
  background-attachment:fixed;
  transition: background .2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
