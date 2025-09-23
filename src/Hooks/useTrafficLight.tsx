import { useState, useEffect } from 'react';

const colors = {
    'red': 'bg-red-500 animate-pulse',
    'yellow': 'bg-yellow-500 animate-pulse',
    'green': 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, [countdown, light]);

    useEffect(() => {
        if (countdown > 0) return;
            if (light === 'red') {
                setLight('green');
                setCountdown(5);
                return;
            } else if (light === 'green') {
                setLight('yellow');
                setCountdown(5);
                return;
            } else if (light === 'yellow') {
                setLight('red');
                setCountdown(5);
                return;
            }
    }, [light, countdown]);
    return { 
        
        //props
        colors,
        light, 
        countdown,

        //computed
        percentage: (countdown / 5) * 100,  
        redLight: `w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`,
        greenLight: `w-32 h-32 rounded-full ${light === 'green' ? colors.green : 'bg-gray-700'}`,
        yellowLight: `w-32 h-32 rounded-full ${light === 'yellow' ? colors.yellow : 'bg-gray-700'}`,
    };
}

