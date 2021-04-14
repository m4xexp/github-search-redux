import "./App.css";
import { connect } from "react-redux";

function App(props) {
  let getUsername;

  function handleSubmit(e) {
    e.preventDefault();
    const username = getUsername.value;
    console.log(username);
  }

  console.log(props.data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Enter the github username</h2>
        <input
          type="text"
          placeholder="Enter Github username"
          required
          ref={(input) => (getUsername = input)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

function mapStateToProp(state) {
  return {
    data: state,
  };
}

export default connect(mapStateToProp)(App);
