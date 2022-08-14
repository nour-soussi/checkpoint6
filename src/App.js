import './App.css';
import Profile from './Profile/Profile.js';

function App() {
  const styleObject ={
    textAlign:'center' ,
    backgroundColor: "#e7e7e7",
    padding: "10px",
    fontFamily: "Arial",
    width: "50%",
    border: "4px solid black" ,
    marginLeft:"25%"
}

  const  handleName=(x) => {
    alert(x);
  };
  const prop={
    fullName:"nour",
    bio:"ceci est la bio " ,
    profession:"ingenieur",
    }
  return (
    <div style={styleObject}>
      <Profile prop={prop} handleName={handleName} >
        <img src="photo.png" alt="profile"/>
      </Profile>
      
    </div>
  );
}

export default App;
