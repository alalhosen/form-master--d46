import "./App.css";
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("update profile data", data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}> 
      <div>
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
      </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update">
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm>
    </>
  );
}

export default App;
