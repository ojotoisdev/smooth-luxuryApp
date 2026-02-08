import { useLocation, useNavigate } from "react-router-dom";
import Plus from "../../../assets/icons/Actions Plus.png";
import Trash from "../../../assets/icons/Delete.png";
import "./Booked.css";                                   // new style sheet

type BookingCard = {
  price: string;
  time: string;
  category: string;
  title: string;
};

/* ⚙️ helper to build the cards from your existing arrays */
const buildCards = (
  serviceList: string[],
  bookings: number[]
): BookingCard[] => {
  const defaultTitles: Record<string, string> = {
    Transportation: "Luxury SUV Pickup (within 10 km)",
    "VISA on arrival":  "  – Individual",
    "Airport facilitation": "Departure – Individual",
    "Hotel booking": "Hotel Reservation – Individual",
    "Travel planning": "Custom itinerary",
  };

  const cards: BookingCard[] = [];
  serviceList.forEach((cat, i) => {
    if (bookings[i] > 0) {
      // push as many cards as were booked (1 each in your UI)
      cards.push({
        price: "$ 75",
        time: "1hr 20min",
        category: cat,
        title: defaultTitles[cat] ?? "Service details",
      });
    }
  });
  return cards;
};

const Booked = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  /* prefer router‑state; fall back to localStorage */
  const serviceList: string[] =
    state?.serviceList ||
    JSON.parse(localStorage.getItem("serviceList") || "[]");
  const bookings: number[] =
    state?.bookings || JSON.parse(localStorage.getItem("bookings") || "[]");

  const cards = buildCards(serviceList, bookings);

  /* ⬇️ remove a single card */
  const handleRemove = (index: number) => {
    const newBookings = [...bookings];
    const catIndex = serviceList.findIndex(
      (c) => c === cards[index].category
    );
    if (catIndex > -1) newBookings[catIndex] = 0;

    localStorage.setItem("bookings", JSON.stringify(newBookings));
    navigate(0); // simple refresh
  };

  /* ⬇️ clear all */
  const handleClear = () => {
    localStorage.removeItem("bookings");
    localStorage.removeItem("serviceList");
    navigate(-1); // back to service list
  };

  return (
    <div className="booked-root">
      <div className="booked-card">
        {/* header */}
        <div className="booked-header">
          <div>
            <h2>Booked services</h2>
            <p>Manage selected services below</p>
          </div>
          <img
            src={Plus}
            alt="close"
            className="booked-close"
            onClick={() => navigate(-1)}
          />
        </div>

        <hr />

        {/* service rows */}
        <div className="booked-list">
          {cards.length === 0 ? (
            <p style={{ textAlign: "center" }}>No services booked yet.</p>
          ) : (
            cards.map((c, i) => (
              <div className="booked-row" key={i}>
                <div className="price-col">
                  <strong>{c.price}</strong>
                  <span>{c.time}</span>
                </div>

                <div className="detail-col">
                  <span className="category">{c.category}</span>
                  <span className="title">{c.title}</span>
                </div>

                <button
                  className="trash-btn"
                  onClick={() => handleRemove(i)}
                >
                  <img src={Trash} alt="delete" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* footer buttons */}
        <div className="booked-footer">
          <button className="clear-all" onClick={handleClear}>
            Clear all
          </button>

          <button
            className="add-more"
            onClick={() => navigate(-1)}
          >
            <span className="plus">+</span> Add more services
          </button>

          <button
            className="checkout"
            onClick={() => navigate("/CheckOut")}
          >
            Proceed to checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booked;
