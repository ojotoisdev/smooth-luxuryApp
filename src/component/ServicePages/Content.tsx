/* ─────────────────────────  Content.tsx  ───────────────────────── */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Plus from "../../assets/icons/Actions Plus.png";
import Sheild from "../../assets/icons/Sheild with Check.png";
import Circle from "../../assets/images/Group (11).png";
import Checkout from "../../assets/icons/Group250.png";
import Close from "../../assets/icons/Close.png";

import "./Content.css";

const Content = () => {
  const serviceList = [
    "Transportation",
    "VISA on arrival",
    "Airport facilitation",
    "Hotel booking",
    "Travel planning",
  ];

  // 🔹 initialise from localStorage if available, else zeros
  const [bookings, setBookings] = useState<number[]>(
    JSON.parse(localStorage.getItem("bookings") || "null") ??
      Array(serviceList.length).fill(0)
  );

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/CheckOut");
  };

  const handleBookService = (index: number) => {
    // 🔹 INCREMENT instead of overwriting
    const updatedBookings = [...bookings];
    updatedBookings[index] = (updatedBookings[index] || 0) + 1;
    setBookings(updatedBookings);

    // persist so BookedService & refresh pick it up
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    localStorage.setItem("serviceList", JSON.stringify(serviceList));

    // navigate to booked page with fresh state
    navigate("/BookedService", {
      state: { serviceList, bookings: updatedBookings },
    });
  };

  const handleClearSelection = () => {
    setBookings(Array(serviceList.length).fill(0));
    localStorage.removeItem("bookings");
    localStorage.removeItem("serviceList");
  };

  return (
    <div className="prices-container">
      <div className="love">
        <div className="center">
          <div className="Main-price">
            <div className="Price-tags">
              <div className="Price-head">
                <img src={Sheild} alt="" />
                <h1>Services</h1>
              </div>

              <div className="price-container">
                <div className="list-container">
                  <ul className="service-list">
                    {serviceList.map((service, index) => (
                      <li
                        key={index}
                        className="content-items"
                        onClick={() => handleBookService(index)}
                      >
                        {service}
                        {bookings[index] > 0 && (
                          <span className="notification-badge">
                            {bookings[index]}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Main "Book services" button adds the first item */}
                  <button onClick={() => handleBookService(0)}>
                    Book services
                  </button>
                </div>
              </div>
            </div>

            <div className="Sub-amount">
              <h1 className="main-tittle">Transportation</h1>

              {/* First pricing block */}
              <div className="price-list">
                <div className="price-tags">
                  <span>
                    <h1>$ 75</h1>
                    <p>1hr 20mins</p>
                  </span>
                  <div className="tag-btn">
                    <div className="Tittle">
                      <h1>Luxury SUV Pickup (within 10 km)</h1>
                      <p>
                        Luxury Curbside pickup at the Airport or Hotel or
                        Private Destination. There is a a $75 per <br /> hour ,
                        per 10 KM fee for an experienced, professional, safe,
                        vetted Driver and Vehicle. <br /> Security Details
                        available separately.
                      </p>
                    </div>
                    <img src={Plus} alt="" className="Plus" />
                    <button onClick={() => handleBookService(0)}>
                      Book services
                    </button>
                  </div>
                </div>
              </div>

              {/* Second pricing block */}
              <div className="price-list">
                <div className="price-tags">
                  <span>
                    <h1>$ 75</h1>
                    <p>1hr 20mins</p>
                  </span>
                  <div className="tag-btn">
                    <div className="Tittle">
                      <h1>
                        Luxury SUV Extended Use (with Private Driver Per Day - 8
                        Hours)
                      </h1>
                      <p>
                        Luxury Curbside pickup at the Airport or Hotel or
                        Private Destination. There is a a $75 per <br /> hour ,
                        per 10 KM fee for an experienced, professional, safe,
                        vetted Driver and Vehicle. <br /> Security Details
                        available separately.
                      </p>
                    </div>
                    <img src={Plus} alt="" className="Plus" />
                    <button onClick={() => handleBookService(0)}>
                      Book services
                    </button>
                  </div>
                </div>
              </div>

              {/* Third pricing block */}
              <div className="price-list">
                <div className="price-tags">
                  <span>
                    <h1>$ 75</h1>
                    <p>1hr 20mins</p>
                  </span>
                  <div className="tag-btn">
                    <div className="Tittle">
                      <h1>Group Luxury Van (with Private Driver )</h1>
                      <p>
                        Luxury Curbside pickup at the Airport, Hotel, or Private
                        Destination. There is a $350 per <br /> hour, per 10km,
                        fee for an experienced, professional, safe, and vetted
                        Driver and Van. For <br /> Groups of 5+. Individual
                        Rate: $75 per passenger, for Groups with less than 5
                        passengers. <br /> Security Details are available
                        separately.
                      </p>
                    </div>
                    <img src={Plus} alt="" id="Plus" />
                    <button onClick={() => handleBookService(0)}>
                      Book services
                    </button>
                  </div>
                </div>
              </div>

              <div className="foot-button">
                <div className="my-foot-button">
                  <button onClick={handleCheckoutClick}>
                    Proceed to checkout
                  </button>
                  <img src={Checkout} alt="" />
                </div>

                <div id="my-foot-button">
                  <button onClick={handleClearSelection}>Clear selection</button>
                  <img src={Close} alt="" />
                </div>
              </div>
            </div>
          </div>

          <img src={Circle} alt="" className="Circle" />
        </div>
      </div>

      
    </div>
  );
};

export default Content;