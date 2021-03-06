import styled from 'styled-components'

export const Header = styled.header`
    background: #007fab;
    position: relative;
    background-image: linear-gradient(to right, #0EBCE7, #223A8A);
    padding: 1rem 0 1rem;
    text-align: right;
    
    strong{
      color: #fff;
      font-size: 1.8rem;
    }
    a {
      color: #fff;
      font-size: 1.8rem;
    }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 1rem;
  margin-left: 0.8rem;
  color: #fff;
  text-shadow: 1px 1px 0 #0000004d;


`;

export const Subtitle = styled.h1`
    color: #fff;
    margin-top: -10px;
    margin-left: -710px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MSubtitle = styled.h1`
    color: #333;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
@media only screen and (max-width: 1280px){
  position: absolute;
  text-align: center;
  font-size: 25px;
  padding: 1rem 0 1rem;
  color: #fff;
  opacity: 0.6;
  top: 94%;
  left: 43%;
}
  position: absolute;
  text-align: center;
  font-size: 25px;
  padding: 1rem 0 1rem;
  color: #fff;
  opacity: 0.6;
  top: 94%;
  left: 43%;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 35px;
  padding: 1rem 0 1rem;
  color: #fff;
  margin-top: 1.3rem;
  margin-left: 40px;

`;

export const CardSubtitle = styled.h2`
  text-align: center;
  font-size: 25px;
  padding: 1rem 0 1rem;
  color: #fff;
  margin-top: 0.4rem;
  margin-left: 20px;
  margin-right: 20px;

`;

export const MenuSubtitle = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 1rem 0 1rem;
  color: #000;
  margin-top: 0.4rem;
  margin-left: 20px;
  margin-right: 20px;

`;

export const OptionSubtitle = styled.h2`
@media only screen and (max-width: 1280px){
  position: fixed;
  text-align: center;
  font-size: 35px;
  padding: 25px 60px 25px 59px;
  background-color: #fff;
  border: solid 1px #009add;
  color: #000;
  margin-top: -169px;
  margin-left: 29px;
}
      position: fixed;
      text-align: center;
      font-size: 25px;
      padding: 25px 170px 25px 122px;
      background-color: #fff;
      border: solid 1px #009add;
      color: #000;
      margin-top: -169px;
      margin-left: 29px;
  

`;