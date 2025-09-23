import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp'
//import { TrafficLight } from './02-useEffect/TrafficLight';
//import { TrafficLightWhitEffect } from './02-useEffect/TrafficLightWithHook';
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithEffect copy';
//import { PokemonPage } from './03-examples/PokemonPage';
import {FocusScreen} from './04-useRef/FocusScreen';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<HooksApp />*/}
    {/*<TrafficLight />*/}
    {/*<TrafficLightWhitEffect />*/}
    {/*<TrafficLightWithHook />*/}
    {/*<PokemonPage />*/}
    <FocusScreen />
  </StrictMode>,
)
