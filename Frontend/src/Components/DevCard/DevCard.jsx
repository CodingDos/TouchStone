import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./DevCard.css";

function DevCard({
  name,
  img,
  role,
  specialty,
  github,
  linkedIn,
  website,
  nameStyle,
}) {

  const karinaWebsite = "https://karinasandovalalvarez.myportfolio.com"


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
        <h2 className="dev-name" style={nameStyle}>
          {name}
        </h2>
        <div className="root-dev-links">
          {website && (
            <Link className="dev-links" to={website} target="_blank">
              <img className="a-tag" src="https://i.imgur.com/FAnrjyh.png"/>
            </Link>
         )}
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
