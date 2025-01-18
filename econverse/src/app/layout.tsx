import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Econverse</title>
        <meta name="description" content="Econverse" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
