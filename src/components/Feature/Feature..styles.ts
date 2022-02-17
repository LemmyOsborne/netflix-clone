import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;

  @media (max-width: 600px) {
    padding: 85px 15px;
  }
`

export const Title = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 4rem;
  font-weight: 600;
  margin: auto;
  
  @media (max-width: 600px) {
    font-size: 1.75rem;
    margin: 0 auto;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto 0;
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
`