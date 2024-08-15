import React, { useEffect, useContext } from 'react'; // Added useContext import
import { seats } from '../data';
import '../Css/LastBookingDetails.css';
import BsContext from '../Context/BsContext';

const LastBookingDetails = () => {
  const context = useContext(BsContext);
  
  const { LastBookingDetails, handleGetBooking } = context;

  useEffect(() => {
    handleGetBooking();
  }, []);

  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking</h2>
      {LastBookingDetails ? (
        <>
          <div className='seats_container'>
            <p className='seats_header'>Seats:</p>
            <ul className='seats'>
              {seats.map((seat, index) => (
                <li className='seat_value' key={index}>
                  {seat}: {Number(LastBookingDetails.seats[seat])}
                </li>
              ))}
            </ul>
          </div>
          <p className='slot' style={{ textAlign: "left" }}>Slot: <span>{LastBookingDetails.slot}</span></p>
          <p className='movie'>Movie: <span>{LastBookingDetails.movie}</span></p>
        </>
      ) : (
        <p className='no_previous'>No previous booking</p>
      )}
    </div>
  );
}

export default LastBookingDetails;
