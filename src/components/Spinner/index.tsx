import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import spinner from '../../assets/images/spinner.json'
import { Container } from './styles';

function Spinner() {
    return (
        <Container>
        <Player
            autoplay
            loop
            src={spinner}
            style={{ height: '300px', width: '300px' }}
        >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        </Container>
    )
}

export default Spinner