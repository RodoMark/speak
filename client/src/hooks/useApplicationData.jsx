import { useState, useEffect } from 'react';
import Axios from "axios";
// import Axios from '../_mocks_/axios.js';

export default function useApplicationData() {

	const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


	useEffect(() => {
    
    const daysURL= `api/days`;
    const appsURL= `api/appointments`;
    const interviewersURL= `api/interviewers`;

    Promise.all([

      Axios.get(daysURL),
      Axios.get(appsURL),
      Axios.get(interviewersURL)
      ]).then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments:  all[1].data, interviewers: all[2].data}));
      }
    );
    
  }, [state.day]);

//   ///Aliasing///
//   const setDay = day => setState({...state, day});
//   const setDays = jours => setState(prev => ({...prev, days: jours}));
//   const setApps = apps => setState({...state, apps});
//   ////

// ///book interview function ///called inside the SAVE function on appointment.js element
//   function bookInterview(id, interview) {
  	
//   		const appointment = {
// 	      ...state.appointments[id],
// 	      interview: { ...interview }
// 	    };
// 	    const appointments = {
// 	      ...state.appointments,
// 	      [id]: appointment
// 	    };
	  

//     	return Axios.put(`http://localhost:8001/api/appointments/${id}`,{interview})
//             .then(()=> {
//               setState(prev => ({...prev, appointments}))
//             })
  }
    

// ///cancel interview function ///called inside the DEL function on appointment.js element
//   const cancelInterview = function(id){
//     const interview = id.interview;

//     const appointment = {
//       ...state.appointments[id],
//       interview: null
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     return Axios.delete(`http://localhost:8001/api/appointments/${id}`, interview )
//           .then(()=> {
//             setState(prev => ({...prev, appointments}))
//           })
//   }

  return {state, setState, bookInterview, setDay, setDays, setApps, cancelInterview}
          
}