import React from "react";
import Modal from "react-modal";
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
  }

  const handleClick = async () => {
    openModal();
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: search,
        }),
        headers: { "Content-Type": "application/json" },
      };
      const response = await getAiResponse(options);
      setAnswer(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="footer">
      <Modal
      className="search-result-modal"
      isOpen={modalOpen}
      onRequestClose={closeModal}
      contentLabel="Example"
      >
        <div className="search-result">
          <div>
          <button onClick={closeModal}><i class="fa fa-remove"></i></button>
            <p className="answer">{search} in Braille is: {answer}</p>
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
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default FooterSearch;
