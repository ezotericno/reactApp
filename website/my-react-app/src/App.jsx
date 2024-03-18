import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
  
  return(
    <>
      <UserGreeting isLoggedIn={true} username="ezotericno"></UserGreeting>
    </>
  );
}

export default App
