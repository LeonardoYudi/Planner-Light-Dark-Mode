import { DisplayNav,NavButton } from "../Sections/Screen";

function NavBar(props) {
    return (
      <DisplayNav>
        <NavButton>Inicio</NavButton>
        <NavButton>Documentação</NavButton>
        <NavButton>Página</NavButton>
        <NavButton>Cadastrar</NavButton>
        <NavButton>Login</NavButton>
      </DisplayNav>
    );
}

export default NavBar;



