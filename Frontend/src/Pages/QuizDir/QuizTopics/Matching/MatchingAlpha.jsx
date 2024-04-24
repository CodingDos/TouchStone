import React from 'react'
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Card from "../../../../Components/Card/Card.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAlphabet } from "../../../../Services/characters.js";
import './Matching.css'


function MatchingAlpha() {

    const [pairs, setPairs] = useState([]);
    const [brailleImg, setBrailleImg] = useState([])
    const hash = {}

    useEffect(() => {
      // Fetch alphabet data
      getAlphabet().then(data => {
        // Shuffle the alphabet data
        // console.log(data)
        const shuffledAlphabet = shuffleArray(data);
        // console.log(shuffledAlphabet)
        // Select 6 unique letters
        const uniqueLetters = selectUniqueAndShuffle(shuffledAlphabet, 6);
        // console.log(uniqueLetters)
        setPairs(uniqueLetters)
        const shuffledBraille = selectUniqueAndShuffle(uniqueLetters,6)
        // console.log(shuffledBraille)
        setBrailleImg(shuffledBraille)
      });
    }, []);

  
    // Function to shuffle array
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Function to select unique letters
    const selectUniqueAndShuffle = (alphabet, count) => {
      const uniqueLetters = [];
      const selectedIndexes = new Set();
      while (uniqueLetters.length < count) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        if (!selectedIndexes.has(randomIndex)) {
          selectedIndexes.add(randomIndex);
          uniqueLetters.push(alphabet[randomIndex]);
        }
      }
      return uniqueLetters;
    };
  
    // Function to get the Braille image for a letter

    return (
        <div>

        <Navbar />
      <div className="matching-alpha-container">
        <div className="letter-card-matching">
          {pairs.map((pair, index) => (
            <div key={index} className="matching-card">
              <Card
              className="matching-height"
                // width="50%"
                height="-webkit-fill-available" 
                title={pair.english}
                refimg={pair.learning_img}
                //   brailleimg={pair.braille_img}
              />
            </div>
          ))}
        </div>
        <div className="braille-card-matching">
          {brailleImg.map((braille, index) => (
            <div key={index} className="matching-card">
                <Card 
                className="matching-height"
                // width="100%" 
                height="-webkit-fill-available" 
                brailleimg={braille.braille_img} 
                />
            </div>
          ))}
        </div>
      </div>
      <FooterSearch/>
        </div>
    );




    //   const [pairs, setPairs] = useState([]);
    //   const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);
    //   const [matchedPairs, setMatchedPairs] = useState([]);
    
    //   useEffect(() => {
    //     // Fetch alphabet data
    //     getAlphabet().then(data => {
    //       // Shuffle the alphabet data
    //       const shuffledData = shuffleArray(data);
    //       // Select the first 6 pairs
    //       const selectedPairs = shuffledData.slice(0, 6);
    //       // Duplicate the pairs for matching
    //       const matchingPairs = selectedPairs.flatMap(pair => [pair, { ...pair, id: pair.id + 100 }]);
    //       // Shuffle the pairs again
    //       const shuffledPairs = shuffleArray(matchingPairs);
    //       setPairs(shuffledPairs);
    //     });
    //   }, []);
    
    //   // Function to shuffle array
    //   const shuffleArray = array => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    //   };
    
    //   // Function to handle card selection
    //   const handleCardClick = index => {
    //     // If the card is already matched, return
    //     if (matchedPairs.some(pair => pair.id === pairs[index].id)) return;
    
    //     // If the card is already selected, unselect it
    //     if (selectedCardIndexes.includes(index)) {
    //       setSelectedCardIndexes(selectedCardIndexes.filter(idx => idx !== index));
    //     } else {
    //       // If less than 2 cards are selected, select the card
    //       if (selectedCardIndexes.length < 2) {
    //         setSelectedCardIndexes([...selectedCardIndexes, index]);
    //       }
    //     }
    //   };
    
    //   // Function to check if two selected cards are a match
    //   useEffect(() => {
    //     if (selectedCardIndexes.length === 2) {
    //       const [firstCardIndex, secondCardIndex] = selectedCardIndexes;
    //       const firstCard = pairs[firstCardIndex];
    //       const secondCard = pairs[secondCardIndex];
    //       if (firstCard.english === secondCard.english) {
    //         console.log('Correct!');
    //         setMatchedPairs([...matchedPairs, firstCard, secondCard]);
    //       } else {
    //         console.log('Incorrect!');
    //       }
    //       // Reset selected cards after checking for a match
    //       setSelectedCardIndexes([]);
    //     }
    //   }, [selectedCardIndexes]);
    
    //   return (
    //     <div className="matching-alpha-container">
    //       <div className="matching-alpha-row">
    //         {pairs.map((pair, index) => (
    //           <div
    //             key={index}
    //             className={`matching-alpha-card ${matchedPairs.some(p => p.id === pair.id) ? 'matched' : ''}`}
    //             onClick={() => handleCardClick(index)}
    //           >
    //             <Card
    //               width="100%"
    //               height="100%"
    //               title={selectedCardIndexes.includes(index) || matchedPairs.some(p => p.id === pair.id) ? pair.english : ''}
    //               refimg={selectedCardIndexes.includes(index) || matchedPairs.some(p => p.id === pair.id) ? pair.learning_img : ''}
    //               brailleimg={matchedPairs.some(p => p.id === pair.id) ? '' : pair.braille_img}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );
    



//     const [pairs, setPairs] = useState([]);
//   const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);
//   const [matchedPairs, setMatchedPairs] = useState([]);

//   useEffect(() => {
//     // Fetch alphabet data
//     getAlphabet().then(data => {
//       // Shuffle the alphabet data
//       const shuffledData = shuffleArray(data);
//       // Select the first 6 pairs
//       const selectedPairs = shuffledData.slice(0, 6);
//       // Duplicate the pairs for matching
//       const matchingPairs = selectedPairs.flatMap(pair => [pair, { ...pair, id: pair.id + 100 }]);
//       // Shuffle the pairs again
//       const shuffledPairs = shuffleArray(matchingPairs);
//       setPairs(shuffledPairs);
//     });
//   }, []);

//   // Function to shuffle array
//   const shuffleArray = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   // Function to handle card selection
//   const handleCardClick = index => {
//     // If the card is already matched, return
//     if (matchedPairs.some(pair => pair.id === pairs[index].id)) return;

//     // If the card is already selected, unselect it
//     if (selectedCardIndexes.includes(index)) {
//       setSelectedCardIndexes(selectedCardIndexes.filter(idx => idx !== index));
//     } else {
//       // If less than 2 cards are selected, select the card
//       if (selectedCardIndexes.length < 2) {
//         setSelectedCardIndexes([...selectedCardIndexes, index]);
//       }
//     }
//   };

//   // Function to check if two selected cards are a match
//   useEffect(() => {
//     if (selectedCardIndexes.length === 2) {
//       const [firstCardIndex, secondCardIndex] = selectedCardIndexes;
//       const firstCard = pairs[firstCardIndex];
//       const secondCard = pairs[secondCardIndex];
//       if (firstCard.english === secondCard.english) {
//         console.log('Correct!');
//         setMatchedPairs([...matchedPairs, firstCard, secondCard]);
//       } else {
//         console.log('Incorrect!');
//       }
//       // Reset selected cards after checking for a match
//       setSelectedCardIndexes([]);
//     }
//   }, [selectedCardIndexes]);

//   return (
//     <div className="matching-alpha-container">
//       {pairs.map((pair, index) => (
//         <div
//           key={index}
//           className={`alphabet-card ${matchedPairs.some(p => p.id === pair.id) ? 'matched' : ''}`}
//           onClick={() => handleCardClick(index)}
//         >
//           <Card
//             width="100%"
//             height="100%"
//             title={selectedCardIndexes.includes(index) || matchedPairs.some(p => p.id === pair.id) ? pair.english : ''}
//             refimg={selectedCardIndexes.includes(index) || matchedPairs.some(p => p.id === pair.id) ? pair.learning_img : ''}
//             brailleimg={matchedPairs.some(p => p.id === pair.id) ? pair.braille_img : ''}
//           />
//         </div>
//       ))}
//     </div>
//   );

    // const [pairs, setPairs] = useState([]);
    // const [selectedCards, setSelectedCards] = useState([]);
  
    // useEffect(() => {
    //   // Fetch alphabet data
    //   getAlphabet().then(data => {
    //     // Shuffle the alphabet data
    //     const shuffledData = shuffleArray(data);
    //     // Select the first 6 pairs
    //     const selectedPairs = shuffledData.slice(0, 6);
    //     // Duplicate the pairs for matching
    //     const matchingPairs = selectedPairs.flatMap(pair => [pair, { ...pair, id: pair.id + 100 }]);
    //     // Shuffle the pairs again
    //     const shuffledPairs = shuffleArray(matchingPairs);
    //     setPairs(shuffledPairs);
    //   });
    // }, []);
  
    // // Function to shuffle array
    // const shuffleArray = array => {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    //   return array;
    // };
  
    // // Function to handle card selection
    // const handleCardClick = cardId => {
    //   if (selectedCards.includes(cardId)) {
    //     setSelectedCards(selectedCards.filter(id => id !== cardId));
    //   } else {
    //     setSelectedCards([...selectedCards, cardId]);
    //   }
    // };
  
    // // Function to check if two selected cards are a match
    // const isMatch = () => {
    //   if (selectedCards.length === 2) {
    //     const [firstCard, secondCard] = selectedCards;
    //     return pairs[firstCard].english === pairs[secondCard].english;
    //   }
    //   return false;
    // };
  
    // return (
    //   <div className="matching-alpha-container">
    //     {pairs.map((pair, index) => (
    //       <div
    //         key={index}
    //         className={`alphabet-card ${selectedCards.includes(index) ? 'selected' : ''} ${isMatch() ? 'match' : ''}`}
    //         onClick={() => handleCardClick(index)}
    //       >
    //         {selectedCards.includes(index) || selectedCards.includes(index - 100) ? (
    //           // Render both English letter and learning image
    //           <>
    //             <Card
    //                 width={"30%"}
    //                 height={"30%"}
    //               title={pair.english}
    //               refimg={pair.learning_img}
    //             //   brailleimg={pair.braille_img}
    //             />
    //           </>
    //         ) : (
    //           // Render only Braille image
    //           <>
    //             <Card
    //             width={"30%"}
    //             height={"30%"}
    //               title=""
    //               refimg=""
    //               brailleimg={pair.braille_img}
    //             />
    //           </>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // );




//     const [cards, setCards] = useState([]);
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       const getCards = async () => {
//         const test = await getAlphabet();
//         setCards(test);
//       };
//       getCards();
//     }, []);

//     console.log(cards)

//   return (
//     <div>
//     <Navbar />
//         <div className="alphabet-carosel">
//             <h1 className="directory-title">Alphabet</h1>
//         </div>
//         <div className="alphabet-container">
//             {cards.map((card, idx) => (
                
//           <div
//             className="alphabet-card"
//             onClick={() => navigate(`/alphabet/${card.english}`)}
//           >
//             <Card
//               index={idx}
//               width={"30%"}
//               height={"30%"}
//               title={card.english}
//               brailleimg={card.braille_img}
//               refimg={card.learning_img}
//             />
//           </div>
//         ))}
//       </div>
//       <FooterSearch />
//     </div>



//   );
}

export default MatchingAlpha