import "./DevTeam.css";
import DevCard from "../../Components/DevCard/DevCard";
import developers from "../../Services/devInfo.js";
import Slider from "react-slick";
import Navbar from "../../Components/Navbar/Navbar";

function DevTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 4000, // Set time between auto-scrolls in milliseconds
    cssEase: "ease-in-out", // This affects the animation speed curve
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  const shuffledDevelopers = shuffle([...developers]);

  // Function to determine if a name adjustment is needed
  function getNameStyle(name) {
    if (name.length > 14) {
      // Assuming you want to adjust for names longer than 14 characters
      return { fontSize: "20px" }; // Smaller font size for long names
    }
    return {}; // Return an empty object if no adjustment is needed
  }

  return (
    <div>
      <Navbar />
      <div className="about-team-container">
        <img
          className="dev-team-app-logo"
          src="src/assets/logos/touchstone-logo.png"
        />
        <h2 className="dev-team-header">About TouchStone</h2>
        <div className="paragraph-about-app">
          <p className="dev-team-about-app">
            Welcome to TouchStone, where we're dedicated to making Braille
            learning accessible and engaging for everyone.Inspired by the needs
            of those experiencing vision loss and the curiosity of others eager
            to connect through Braille, our app features interactive quizzes and
            a simple, user-friendly interface designed for all learners. Whether
            you're adapting to a changing sensory world or seeking to
            communicate more inclusively, Touch Stone is your companion in
            mastering Braille basics and building confidence in your abilities.
          </p>
        </div>
        <h2 className="dev-team-header">Meet The Team</h2>
        <div className="developers-container">
          <Slider {...settings}>
            {shuffledDevelopers.map((dev, idx) => (
              <div key={idx}>
                <DevCard
                  name={dev.name}
                  img={dev.img}
                  role={dev.role}
                  specialty={dev.specialty}
                  github={dev.github}
                  linkedIn={dev.linkedIn}
                  website={dev.website}
                  nameStyle={getNameStyle(dev.name)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default DevTeam;
