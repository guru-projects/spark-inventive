import React from "react";
import "./Event.css";
import event1 from '../../assets/event1.jpeg'
import event2 from '../../assets/event2.jpeg'
import event3 from '../../assets/event3.jpeg'
import event4 from '../../assets/event4.jpeg'
import event5 from '../../assets/event5.jpeg'

function Event() {

  return (
    <div className="event" id="event">
      <div className="title">
        <h1>Event</h1>
      </div>

      <div className="gridContainer">
        <div className="eventGrid">
          <div className="card card1">
            <img src={event1} alt="card1" />
          </div>
          <div className="card card2">
            <img src={event2} alt="card1" />
          </div>
          <div className="card card3">
            <img src={event3} alt="card1" />
          </div>
          <div className="card card4">
            <img src={event4} alt="card1" />
          </div>
          <div className="card card5">
            <img src={event5} alt="card1" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Event;
