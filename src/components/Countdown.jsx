import React, {useState, useEffect} from 'react'

const Clock = () => {
    const [theEnd, setEnd] = useState(false);
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [secounds, setSecounds] = useState(); 

    let interval;
    const countdown = () => {
        const destination = new Date('12/30/2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;

            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 *24) / (1000 * 60* 60)) 
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60)) 
            const secounds = Math.floor(different % (1000 * 60) / 1000)
            
            if(different < 0) {
            setEnd(true);
            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSecounds(secounds)
            } 
        });
    };

    useEffect(() => {
        countdown();
        return () => {
            clearInterval(interval);
        };
    });

  return (
    <div>
        { theEnd ? (
            <h2>The offer has ended !</h2>
        ) : (
      <div className='flex items-center gap-5 sm:text-lg text-md'>
          <div className='flex items-center gap-5'>
              <div className='text-center'>
                  <h1>{days}</h1>
                  <h5>Days</h5>
              </div>
              <span>:</span>
          </div>
          <div className='flex items-center gap-5'>
              <div className='text-center'>
                  <h1>{hours}</h1>
                  <h5>Hours</h5>
              </div>
              <span>:</span>
          </div>
          <div className='flex items-center gap-5'>
              <div className='text-center'>
                  <h1>{minutes}</h1>
                  <h5>Minutes</h5>
              </div>
              <span>:</span>
          </div>
          <div className='flex items-center gap-5'>
              <div className='text-center'>
                  <h1>{secounds}</h1>
                  <h5>Secounds</h5>
              </div>
          </div>
      </div>
      )}
    </div>
  )
}

export default Clock