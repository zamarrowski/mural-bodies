import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  text-align: center;
  background: #C6FFDD;
  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
  background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
`

export const MapContainer = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  justify-content: center;

  @media (max-width: 360px) {
    height: 50%;
  }
`

export const Title = styled.h1`
  margin-top: 0px;
  padding-top: 10px;
  font-size: 40px;
  color: rgb(41, 44, 47);
  @media (max-width: 360px) {
    font-size: 25px;
  }
`