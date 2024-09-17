import React from 'react';

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <header>
        
        <nav>
          {/* Menú de navegación privado */}
        </nav>
      </header>
      <main>
      <p>los layouts funcionan</p>
        {children}
      </main>
      <footer>
        {/* Pie de página privado */}
      </footer>
    </div>
  );
};

export default PrivateLayout;