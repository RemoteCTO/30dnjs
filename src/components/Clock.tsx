'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

export default function Clock(props) {
  const { timezone } = props;
  const [localTime, setTime] = useState(moment().tz(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [localTime]);

  return (
    <div className="m-5 lg:m-20">
      <div className="m-5 w-80 h-80 border-white border-8 rounded-full p-2 relative m-auto">
        <div className="relative w-full h-full -translate-y-20">
          <div
            className="absolute left-1/2 top-1/2 w-20 -mx-24"
          >
            <span className="text-gray-800 text-7xl">{localTime.format("HH:MM")}</span>
          </div>
          <div
            style={{ transform: `rotateZ(${((localTime.seconds() / 60) * 360)}deg)`}}
            className="second-hand w-0.5 h-32 bg-orange-700 absolute left-1/2 top-1/3 origin-bottom transition-all"
          />
          <div
            style={{ transform: `rotateZ(${((localTime.minutes() / 60) * 360) + ((localTime.minutes()/60)*6)}deg)`}}
            className="minute-hand w-1 h-28 bg-white absolute left-1/2 top-[38%] origin-bottom transition-all"
          />
          <div
            style={{ transform: `rotateZ(${((localTime.hours() / 12) * 360) + ((localTime.minutes()/60)*30)}deg)`}}
            className="hour-hand w-1 h-20 bg-white absolute left-1/2 top-1/2 origin-bottom transition-all"
          />
        </div>
      </div>
      <p className="mt-8 text-xl w-full text-center align-center">{timezone.split('/').pop().replace('_', ' ')}</p>
    </div>
  );
}
