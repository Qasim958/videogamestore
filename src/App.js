import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="App">
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
