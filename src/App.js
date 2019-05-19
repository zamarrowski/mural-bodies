import React from 'react'

import Map from './Map'
import markers from './markers'
import { Container, MapContainer, Title } from './styles'
import Footer from './Footer'

function App() {
  return (
    <Container>
        <Title>Mural bodies</Title>
      <MapContainer>
          <Map markers={markers} />
      </MapContainer>
      <Footer />
    </Container>
  )
}

export default App
