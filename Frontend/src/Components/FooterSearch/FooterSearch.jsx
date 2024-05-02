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

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSearch("")
    setAnswer("")
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

  return (
    <div className="footer">
      <Modal
        style={{
          overlay: {
            backgroundColor: '#C7CFBB'
          }
        }}
        className="search-result-modal"
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example"
      >
        <div className="root-modal-close-btn">
          <button className='modal-close-btn' onClick={closeModal}><i className="fa fa-remove"></i></button>
        </div>
        <div className="root-search-result">
          <div className="search-question">
            <p className="render-search-question">
              What you searched for:
              <p className="style-render-search-question">{search}</p>
            </p>
          </div>
          <div className="search-answer">
            <p className="render-search-answer">
              Result:
              <p className="style-render-search-answer">{answer.response}</p>
            </p>
          </div>
        </div>
      </Modal>
      <div className="footer-searchbar">
        <input
          type="text"
          value={search}
          placeholder="A.I Search"
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
