import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {
  
  return(
    <>
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student/>
    </>
  );
}

export default App
