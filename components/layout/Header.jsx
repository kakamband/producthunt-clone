import React from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Buscar />

          <Navegacion />
        </div>

        <div>
          <p>Hola: Ivan</p>

          <button type="button">Cerrar Session</button>

          <Link href="/">Login</Link>
          <Link href="/">Crear Cuenta</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
