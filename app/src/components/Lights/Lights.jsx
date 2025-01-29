import "./Lights.css";

const Lights = ({ status }) => {
    const colors = ["light-red", "light-yellow", "light-green"];
  
    return (
      <div className="d-flex gap-1 rounded align-items-center">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`rounded-circle ${status === index ? colors[index] : "light-disabled"}`}
            style={{ width: '19px', height: '19px' }}
          />
        ))}
      </div>
    );
  };
  
  export default Lights;
  