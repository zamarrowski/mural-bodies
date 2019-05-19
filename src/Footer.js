import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  min-height: 50px;
  border: 1px solid black;
  background-color: rgb(41, 44, 47);
  text-align: center;
  color: white;
  font-size: 12px;
`

export default props => 
  <Footer>
    <p style={{marginTop: '10px'}}>Made by 🎨 @raquelgrcv, developed with <span role="img">❤️</span> by @zamarrowski. 
    Special thanks to Javi, Suzanne, Andrea, Luso, Nunu, Paula and Susana. 🤩</p>
  </Footer>