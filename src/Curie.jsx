export default function Curie() {
  const avatar = "https://i.imgur.com/szV5sdG.jpg";
  const description = "Madam Curie";
  const age = 55;
  return (
    <div
      style={{ backgroundColor: "#c0c0c0", margin: "20px", padding: "12px" }}
    >
      <img className="avatar" src={avatar} alt={description} />
      <p>
        Person:<b>{description} </b>
      </p>
      <span>Age: {age}</span>
    </div>
  );
}
