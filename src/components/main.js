// Prior to {chidlren}, we had to import the entire SearchedMoviesList and WatchedMovieList, and {useState}, to setup the component. Now, we're pulling the {children} from the App component.
//% Those two Children are the two components and their props.
export default function Main({ children }) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
