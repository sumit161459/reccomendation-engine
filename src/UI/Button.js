import "./Button.css";

function Button({ disable, count }) {
  return (
    <div className="btn-c">
      <button
        className="button"
        disabled={disable}
        onClick={() => alert("working")}
      >
        Recommend-{count}
      </button>
    </div>
  );
}

export default Button;
