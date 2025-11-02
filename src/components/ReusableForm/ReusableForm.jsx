import React from "react";

const ReusableForm = () => {
    const handleSubmit= e=>{
        e.preventDefault();
    }
  return (
    <div>
        <h2>ReUsableForm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReusableForm;
