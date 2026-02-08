import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Close from "../../assets/icons/Close X.png";
import Trash from "../../assets/icons/Delete.png";
import Add from "../../assets/icons/Add.png"
import White from "../../assets/icons/white Arrow.png"
import './BookedService.css'

/* ─────────────────── Types & constants ─────────────────── */
type BookingCard = {
  price: string;
  time: string;
  category: string;
  title: string;
};

const DEFAULT_TITLES: Record<string, string> = {
  Transportation:        "Luxury SUV Pickup (within 10 km)",
  "VISA on arrival":     "Individual",
  "Airport facilitation": "Departure – Individual",
  "Hotel booking":       "Hotel Reservation – Individual",
  "Travel planning":     "Custom itinerary",
};

const STORAGE = {
  bookings:    "bookings",
  serviceList: "serviceList",
};

/* ─────────────────── Helpers ─────────────────── */
const buildCards = (serviceList: string[], bookings: number[]): BookingCard[] => {
  const cards: BookingCard[] = [];

  serviceList.forEach((cat, i) => {
    const qty = bookings[i] ?? 0;              // how many units booked
    for (let k = 0; k < qty; k++) {
      cards.push({
        price:  "$ 75",
        time:   "1hr 20min",
        category: cat,
        title:  DEFAULT_TITLES[cat] ?? "Service details",
      });
    }
  });

  return cards;
};

/* ─────────────────── Component ─────────────────── */
const BookedService = () => {
  const { state } = useLocation();
  const navigate   = useNavigate();

  /* bootstrap from router‑state, then localStorage */
  const initialServiceList: string[] =
    state?.serviceList ||
    JSON.parse(localStorage.getItem(STORAGE.serviceList) || "[]");

  const initialBookings: number[] =
    state?.bookings ||
    JSON.parse(localStorage.getItem(STORAGE.bookings) || "[]");

  const [serviceList] = useState<string[]>(initialServiceList);
  const [bookings, setBookings] = useState<number[]>(initialBookings);
  const [cards, setCards] = useState<BookingCard[]>(() =>
    buildCards(initialServiceList, initialBookings)
  );

  /* persist + rebuild cards whenever bookings change */
  useEffect(() => {
    localStorage.setItem(STORAGE.bookings, JSON.stringify(bookings));
    setCards(buildCards(serviceList, bookings));
  }, [bookings, serviceList]);

  /* 🗑 remove a single booked item */
  const handleRemove = (idx: number) => {
    const { category } = cards[idx];
    const catIndex = serviceList.findIndex((c) => c === category);
    if (catIndex === -1) return;

    setBookings((prev) => {
      const next = [...prev];
      next[catIndex] = Math.max(0, next[catIndex] - 1);
      return next;
    });
  };

  /* 🧹 clear everything */
  const handleClear = () => {
    localStorage.removeItem(STORAGE.bookings);
    localStorage.removeItem(STORAGE.serviceList);
    setBookings([]);
    navigate(-1);
  };

  /* ─────────────────── UI ─────────────────── */
  return (
    <div className="booked-root">
      <div className="booked-card">
        {/* header */}
        <div className="booked-header">
          <div className="child-booked-header">
            <h2>Booked services</h2>
            <p>Manage selected services below</p>
          </div>
          <img
            src={Close}
            alt="close"
            className="booked-close"
            onClick={() => navigate(-1)}
          />
        </div>

        <hr className="hr-booked" />

        {/* list */}
        <div className="booked-list">
          {cards.length === 0 ? (
            <p style={{ textAlign: "center" }}>No services booked yet.</p>
          ) : (
            cards.map((c, i) => (
              <div className="booked-row" key={`${c.category}-${i}`}>
                <div className="price-col">
                  <span className="c-price">
                   <p className="cost-price"> {c.price}</p>
                   <p className="cost-time"> {c.time}</p>

                  </span>
                  


                  <div className="detail-col">
                    <span className="category">
                        <p className="c-category">{c.category}</p>
                        <p className="c-title">{c.title}</p>
                    </span>

                  </div>
                </div>

                

                <button className="trash-btn" onClick={() => handleRemove(i)}>
                  <img src={Trash} alt="delete" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        <div className="booked-footer">
          <button className="clear-all" onClick={handleClear}>
            Clear all
          </button>

          <div className="more-btn">
              <div id="parent-icon">
                  <img src={Add} alt="" />
                <button className="add-more" onClick={() => navigate(-1)}>
                   Add more services
                </button>

              </div>

              <div className="parent-icon">
                
                <button className="checkout-event" onClick={() => navigate("/CheckOut")}>
                   Proceed to checkout 
                </button>
                <img src={White} alt="" />

              </div>
              
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default BookedService;
