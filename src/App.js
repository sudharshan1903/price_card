import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const Free= [
        { name: "Single User", enabled: true },
        { name:  "50GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name:" Unlimited Private Projects",enabled:false},
        { name: "Dedicated Phone Support", enabled: false },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false },
      ];
const  Plus= [
        { name: "5 User", enabled: true },
        { name:  "50GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name:" Unlimited Private Projects",enabled:true},
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: false },
      ];
  const Pro= [
    { name: "Unlimited User", enabled: true },
    { name:  "50GB Storage", enabled: true },
    { name: "Unlimited Public Projects", enabled: true },
    { name: "Community Access", enabled: true },
    { name:" Unlimited Private Projects",enabled:true},
    { name: "Dedicated Phone Support", enabled: true },
    { name: "Free Subdomain", enabled: true },
    { name: "Monthly Status Reports", enabled: true },
  ];
  
  return (
    <>
   <div className='container box'>
    <div className="free">
      <span style={{color:"lightgray"}}>Free</span>
      <h1>$0/month</h1>
      <hr></hr>
     {Free&& Free.map((value) => (
            value.enabled ? (
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                <i className="bi bi-check">{value.name}</i>
              </p>
            ) : (
              <p style={{color:"lightgray"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <i className="bi bi-x">{value.name}</i>
              </p>
            )
          ))}
    <button className='btn btn-primary'>button</button>
    </div>
    <div className='plus'>
      <p style={{color:"lightgray"}}>Plus</p>
      <h1>$9/month</h1>
      <hr></hr>
      {Plus&& Plus.map((value) => (
            value.enabled ? (
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                <i className="bi bi-check">{value.name}</i>
              </p>
            ) : (
              <p style={{color:"lightgray"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <i className="bi bi-x">{value.name}</i>
              </p>
            )
          ))}
    <button className='btn btn-primary'>button</button>
    </div>
    <div className='pro'>
      <p style={{color:"lightgray"}}>Pro</p>
      <h1>$49/month</h1>
      <hr></hr>
      {Pro && Pro.map((value) => (
            value.enabled ? (
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                <i className="bi bi-check">{value.name}</i>
              </p>
            ) : (
              <p style={{color:"lightgray"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <i className="bi bi-x">{value.name}</i>
              </p>
            )
          ))}
    <button className='btn btn-primary'>button</button>
    </div>

   </div>
    </>  
  );
}

export default App;
