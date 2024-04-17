import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Padlock = () => {
    
  return (
    
            <Player
  autoplay
  loop
  src="https://lottie.host/5351f77c-10fe-4f3c-a7af-bc517316778a/eKKTWsE56P.json"
  style={{ height: '180px', width: '300px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
    
  )
}

export default Padlock