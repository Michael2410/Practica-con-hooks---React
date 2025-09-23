import { useTrafficLight } from '../Hooks/useTrafficLight';

export const TrafficLightWhitEffect = () => {

    const {  countdown, percentage, greenLight, yellowLight, redLight } = useTrafficLight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className='text-white text-3xl font-bold'> Semaforo con useEffect</h1>
        <h2 className='text-white text-2xl'> countdown: {countdown} </h2>
        <div className='w-64 bg-gray-700 rounded-full h-2xl'>
            <div className='bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear' 
            style={{ width: `${percentage}%` }}></div>
        </div>
        <div className={`${redLight}`}></div>
        <div className={`${yellowLight}`}></div>
        <div className={`${greenLight}`}></div>

      </div>
    </div>
  );
};