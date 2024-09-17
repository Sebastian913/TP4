import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;