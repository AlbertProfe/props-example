import BasicCard from "./BasicCard.jsx";
import Curie from "./Curie.jsx";

export default function Avatar() {
  // first call to Gregorio
  const age1 = 38;
  const description1 = "Gregorio is a developer";
  // second call to Gregorio
  const age2 = 18;
  const description2 = "Gregorio is an architect";
  return (
    <>
      <h1>How components works </h1>
      <BasicCard />
      <br />
      <br />
      <Gregorio age={age1} description={description1} />
      <br />
      <br />
      <Curie />
      <br />
      <br />
      <Gregorio age={age2} description={description2} />
      <br />
      <br />
      <br />
      <br />
      <Gregorio age={150} description={"Gregorio is a analytst"} />
      <br />
      <br />
      <h3>Copyright by Cool Systems</h3>
    </>
  );
}

function Gregorio(props) {
  const avatar =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338";
  const description = props.description;
  const age = props.age;
  return (
    <div style={{ border: "1px solid", borderRadius: "30px", padding: "20px" }}>
      <img className="avatar" src={avatar} alt={description} />
      <p>
        Person:<b>{description} </b>
      </p>
      <span>Age: {age}</span>
    </div>
  );
}
