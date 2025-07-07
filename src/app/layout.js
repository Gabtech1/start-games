import "./styles/globals.css";

export const metadata = {
  title: "Start Games",
  description: "Catálogo de jogos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
