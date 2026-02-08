import { useState } from "react";

import Plus from "../../assets/icons/plus (2).png";
import Next from "../../assets/icons/Forward Arrow.png"
import Back from "../../assets/icons/Back Arrow.png"
import Alert from "../../assets/icons/Circle Actions Alert Question.png";

import "./FAQSHeader.css";


// Predefined questions you want to add (one by one)
const predefinedQuestions = [
  { question: "Can I pay with international cards?" },
  { question: "How do I update my visa details after submission?" },
  { question: "Can I use the same approval letter twice?" },
  { question: "Is there a helpline for visa issues?" },
  { question: "Do I need a COVID-19 test result?" },
];

const FAQSHeader = () => {
  
  const itemsPerPage = 10;

  const [faqData, setFaqData] = useState([
    { question: "What is the difference between visa validity and maximum stay?" },
    { question: "Is there a guarantee that I will receive my visa or passport by a certain date?" },
    { question: "What is a passport?" },
    { question: "What is a passport?" },
    { question: "How do I get a Visa On Arrival Approval Letter?" },
    { question: "What is Visa Approval Letter?" },
    { question: "How long does it take to get the approval letter?" },
    { question: "How do I receive my visa approval letter?" },
    { question: "Are there any restrictions with this type of visa?" },
    { question: "Do you require a scan of my passport data page?" },
    { question: "What is the minimum validity for my passport?" },
    { question: "What are the procedures at the Nigeria Airports/Ports of Entry?" },
    { question: "Is travel insurance required?" },
    { question: "Should I provide exact date of arrival?" },
    { question: "How long in advance should I apply for a Visa approval Letter?" },
    { question: "Can I travel without Approval letter and get the Visa when I arrive?" },
    { question: "How much does the Visa on Arrival Cost?" },
    { question: "What credit/debit cards are accepted for online payment?" },
    { question: "My credit number is correct but it was not accepted?" },
    { question: "How safe are my card details?" },
    { question: "What if I change my flight and arrive at another Airport in Nigeria?" }
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const [addedIndex, setAddedIndex] = useState(0); // Tracks how many predefined have been added

  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = faqData.slice(start, end);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < faqData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddPredefined = () => {
    if (addedIndex < predefinedQuestions.length) {
      const next = predefinedQuestions[addedIndex];
      setFaqData([...faqData, next]);
      setAddedIndex(addedIndex + 1);
    }
  };

  return (
    <div className="Fqs-container">
      <div className="Question">
        <h1>Frequently Asked Questions</h1>
        <ul>
          {currentItems.map((faq, index) => (
            <li key={start + index} className="faq-item"><img src={Alert} alt="" className="alert" />
              <span className="spa">{faq.question}</span>
              <img
                src={Plus}
                alt="Add"
                className={`plus-icon ${addedIndex >= predefinedQuestions.length ? "disabled" : ""}`}
                onClick={handleAddPredefined}
              />

            </li>
          ))}
        </ul>

        <div className="pagination-controls">
          <button onClick={handleBack} disabled={currentPage === 0}>
            <img src={Back} alt="" />
          </button>

          <span className="page-indicator">{currentPage + 1} / {totalPages}</span>

          <button
            onClick={handleNext}
            disabled={(currentPage + 1) * itemsPerPage >= faqData.length}
          >
            <img src={Next} alt="" />
          </button>
        </div>
      </div>
       
    </div>
  );
};

export default FAQSHeader;
