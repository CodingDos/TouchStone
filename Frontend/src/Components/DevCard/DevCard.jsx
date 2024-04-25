import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./DevCard.css";

function DevCard({ name, img, role, specialty, github, linkedIn, website }) {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "250px",
          height: "auto",
        }}
      >
        <img className="dev-img" src={img} alt={name} />
        <h3 className="dev-roles">{role}</h3>
        <h3 className="dev-roles">{specialty}</h3>
        <h2 className="dev-name">{name}</h2>
        {website && (
          <div className="dev-website-container">
            <p className="website">
              Website:{" "}
              <a
                className="a-tag"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            </p>
          </div>
        )}
        <div>
          {github && (
            <Link className="dev-links" to={github} target="_blank">
              <GrGithub size={35} />
            </Link>
          )}
          {linkedIn && (
            <Link className="dev-links" to={linkedIn} target="_blank">
              <BsLinkedin size={35} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DevCard;
