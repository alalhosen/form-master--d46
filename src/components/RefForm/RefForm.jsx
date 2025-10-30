
const RefForm = () => {

    const handleSubmit=e=>{
        e.preventDefault();
    }

    return (
        <div>
               <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="number" name="phone" />
        <br />
        <input type="submit" value="Submit" />
        {/* <button>Submit</button> */}
      </form>
        </div>
    );
};

export default RefForm;