import React, { useEffect, useState } from "react";
import "./Form.css";

const initialData = { name: "", email: "", password: "" };

const Form = () => {
  const [inputData, setInputData] = useState(initialData);
  const [flag, setFlag] = useState(false);

  // The following useEffect is utilized to display a message by triggering a re-render of the web page,
  //when the 'flag' state changes.
  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields are Mandatory");
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <pre>
        {flag && (
          <h2 className="ui-define">
            Hello {inputData.name}, You've Registered Successfully
          </h2>
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        {["name", "email", "password"].map((field) => (
          <div key={field}>
            <input
              type="text"
              placeholder={`Enter Your ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }`}
              name={field}
              value={inputData[field]}
              onChange={handleData}
            />
          </div>
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;

// import React, { useEffect, useState } from "react";
// import "./Form.css";

// function Form() {
//   const data = { name: "", email: "", password: "" };
//   const [inputData, setInputData] = useState(data);
//   const [flag, setFlag] = useState(false);
//   useEffect(() => {
//     console.log("Registered");
//   }, [flag]);

//   function handleData(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log(inputData);
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!inputData.name || !inputData.email || !inputData.password) {
//       alert("All Fields are Mandatory");
//     } else {
//       setFlag(true);
//     }
//   }

//   return (
//     <>
//       <pre>
//         {flag ? (
//           <h2 className="ui-define">
//             Hello {inputData.name}, You've Registered Successfully
//           </h2>
//         ) : (
//           ""
//         )}
//       </pre>
//       <form className="container" onSubmit={handleSubmit}>
//         <div className="header">
//           <h1>Registration Form</h1>
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             name="name"
//             value={inputData.name}
//             onChange={handleData}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Your Email"
//             name="email"
//             value={inputData.email}
//             onChange={handleData}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Your Password"
//             name="password"
//             value={inputData.password}
//             onChange={handleData}
//           />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Form;
