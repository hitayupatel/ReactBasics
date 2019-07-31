import React from "react";

function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={props.data.firstName}
        placeholder="First Name"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={props.data.lastName}
        placeholder="Last Name"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="text"
        name="age"
        value={props.data.age}
        placeholder="Age"
        onChange={props.handleChange}
      />
      <br />
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        />
        Female
      </label>
      <br />
      <label>
        Destination:
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">---Please select country---</option>
          <option value="united states">United States</option>
          <option value="india">India</option>
          <option value="russia">Russia</option>
          <option value="australia">Australia</option>
          <option value="united kingdom">United Kingdom</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isVegan"
          checked={props.data.isVegan}
          onChange={props.handleChange}
        />
        Vegan
      </label>
      <label>
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.data.isLactoseFree}
          onChange={props.handleChange}
        />
        Lacose Free
      </label>
      <label>
        <input
          type="checkbox"
          name="isVegeterain"
          checked={props.data.isVegeterain}
          onChange={props.handleChange}
        />
        Vegeterian
      </label>
      <br />
      <br />
      <label>Fovourite color</label>
      <br />
      <button>Submit</button>
      <hr />
      <br />
      <h1>Entered Information:</h1>
      <p>
        Name:
        {props.data.firstName}
        {props.data.lastName}
      </p>
      <p>You age is {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Destination: {props.data.destination}</p>
      <p>
        Your Dietary restriction: <br />
        Vegan: {props.data.isVegan ? "Yes" : "No"} <br />
        Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"} <br />
        Vegeterian: {props.data.isVegeterain ? "Yes" : "No"} <br />
      </p>
    </form>
  );
}
export default FormComponent;
