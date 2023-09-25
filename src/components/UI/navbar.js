// Passing {children} instead of {movies}, so the app.js 'child' structure which is 3 separte components, one including a drilled prop, are pulled from this component up to the global level, leaving the NavBar component more reusable and slimmed down.

export default function Navbar({ children }) {
  return (
    <>
      <nav className="nav-bar">{children}</nav>
    </>
  );
}
