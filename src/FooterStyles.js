import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 20px 60px;
  background: gray;
  position: bottom;
  bottom: 0;
  width: 100%;
  height: max-content;
  
   
  @media (max-width: 500px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: min-content; /* I added */
    max-width: 1000px;
    margin: 0 auto;
    background: gray; 
`
   /* change the Column and the Row*/
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  max-height: min-content;
`;
   
export const Row = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fit, 
                         185px);
  grid-gap: 3px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, 
                           100px);
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 14px;
  font-size: auto;
  text-decoration: none;
  min-width: 0;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  min-width: 0;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;