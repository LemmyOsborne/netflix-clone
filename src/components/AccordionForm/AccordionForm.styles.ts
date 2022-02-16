import styled from 'styled-components/macro';

export const Container = styled.div<{direction: string}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  height: 100%;
  margin: 20px 0 4rem;
  flex-wrap: wrap;
 
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: fit-content;
  white-space: nowrap;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 1.875rem;
  border: 0;
  cursor: pointer;
  
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  
  &:hover {
    background: #f40612;
  }
  
  @media (max-width: 1000px) {
    font-size: 16px;
    font-weight: bold;
  }
`

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`