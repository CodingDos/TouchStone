import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
import { useState } from "react";
import { getAiResponse } from "../../Services/ai.js";
import "./FooterSearch.css";

function FooterSearch() {
  const [search, setSearch] = useState("");
  const [answer, setAnswer] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  console.log("this is search", search);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const handleClick = async () => {
    openModal();
    try {
      const options = {
        input: search,
      };
      console.log(options);
      const response = await getAiResponse(options);
      console.log(response);
      setAnswer(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("this is answer", answer);
  return (
    <div className="footer">
      <Modal
        className="search-result-modal"
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example"
      >
<<<<<<< Updated upstream
        <div className="root-modal-close-btn">
          <button className="modal-close-btn" onClick={closeModal}>
            <i className="fa fa-remove"></i>
          </button>
        </div>
        <div className="root-search-result">
          <div className="search-result">
            <p className="render-search-question">
              You Searched For:
              {search}
            </p>
          </div>
          <div className="search-answer">
            <p className="render-search-answer">
              Result:
              {answer.response}
            </p>
=======
        <div className="search-result">
          <div>
          <button className='modal-close-btn' onClick={closeModal}><i className="fa fa-remove"></i></button>
            <p className="answer">{search} in Braille is: {answer}</p>
>>>>>>> Stashed changes
          </div>
        </div>
      </Modal>
      <div className="footer-searchbar">
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="footer-searchbar-btn" onClick={handleClick}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default FooterSearch;
