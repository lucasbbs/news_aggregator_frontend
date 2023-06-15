import Burger from './Burger';
import { StyledContainer } from './styles';


const NavBar = () => {


  return (
    <StyledContainer>
      <header className="nav-items">
        <Burger />
      </header>
    </StyledContainer>
  )
}

export default NavBar