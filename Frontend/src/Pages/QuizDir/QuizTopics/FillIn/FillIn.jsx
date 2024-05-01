import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import { getPhrases, getBySearch } from "../../../../Services/characters.js";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./FillIn.css";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";

function FillIn() {
  const [tracker, setTracker] = useState();
  const [collection, setCollection] = useState([]);
  const { state } = useLocation();
  //console.log(state.search);
  let testArray = [0, 0, 0, 0, 0, 0];
  const [message, setMessage] = useState("");
  const [resultArray, setArray] = useState([]);
  const navigate = useNavigate();

  const getCollection = async () => {
    //console.log("hi");
    if (state.search === "phrases") {
      const test = await getPhrases();
      setCollection(test);
    } else {
      const test2 = await getBySearch(state.search);
      //console.log(test2);
      setCollection(test2);
    }
    setTracker(0);
    setArray(testArray);
  };

  useEffect(() => {
    //console.log("sup");
    getCollection();
  }, []);

  const unCheck = () => {
    let inputs = document.querySelectorAll(".check3");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
    setMessage("");
    setArray([0, 0, 0, 0, 0, 0]);
  };

  const onClickBack = () => {
    if (tracker > 0) {
      setTracker(tracker - 1);
    } else {
      setTracker(collection.length - 1);
    }
    unCheck();
  };

  const onClickForward = () => {
    if (tracker < collection.length - 1) {
      setTracker(tracker + 1);
    } else {
      setTracker(0);
    }
    unCheck();
  };
  const handleChange = (e) => {
    testArray = resultArray;
    testArray[parseInt(e.target.id)] =
      (testArray[parseInt(e.target.id)] + 1) % 2;
    //console.log(testArray);
    setArray(testArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(testArray.join(""));
    if (resultArray.join("") === collection[tracker].binary) {
      console.log("yeet");
      setMessage("Correct!");
      console.log(testArray + "1");
    } else {
      setMessage("Incorrect");
      console.log(testArray + "1");
    }
    console.log(testArray + "2");
  };

  //console.log(collection);

  return (
    <div className="fillin">
      <Navbar />
      <div className="fillin-carosel">
        <h1
          onClick={() => navigate("/quiz")}
          className="directory-title alpha-title"
        >
          Fill In
        </h1>
        <div className="feedback-message-container">
        {message && (
          <div
            className={`feedback-message ${
              message === "Correct!" ? "correct-feedback" : "incorrect-feedback"
            }`}
            style={{
              marginTop: "0"
            }}
          >
            {message}
          </div>
        )}
        </div>
        <div className="fillin-content">
        <div className="fillin-container">
          <div
            className="card"
            style={{
              width: "60%",
              height: "300px",
            }}
          >
            <h3 className="card-title">
              {collection[tracker]?.english || collection[tracker]?.phrase}
            </h3>
            <div className="braille-fillin">
              <div id="column1">
                <div className="check" id="c0">
                  <input
                    type="checkbox"
                    className="check3"
                    id="0"
                    name="0"
                    onChange={handleChange}
                  />
                </div>
                <div className="check" id="c1">
                  <input
                    type="checkbox"
                    className="check3"
                    id="1"
                    name="1"
                    onChange={handleChange}
                  />
                </div>
                <div className="check" id="c2">
                  <input
                    type="checkbox"
                    className="check3"
                    id="2"
                    name="2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div id="column2">
                <div className="check" id="c3">
                  <input
                    type="checkbox"
                    className="check3"
                    id="3"
                    name="3"
                    onChange={handleChange}
                  />
                </div>
                <div className="check" id="c4">
                  <input
                    type="checkbox"
                    className="check3"
                    id="4"
                    name="4"
                    onChange={handleChange}
                  />
                </div>
                <div className="check" id="c5">
                  <input
                    type="checkbox"
                    className="check3"
                    id="5"
                    name="5"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns">
          <button onClick={onClickBack} className="btns-back">
            <i class="fa fa-angle-left"></i>
          </button>
          <button
            className="submit-button"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
          <button onClick={onClickForward} className="btns-forward">
            <i class="fa fa-angle-right"></i>
          </button>
        </div>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default FillIn;
