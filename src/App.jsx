import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="relative font-sans">
        <div
          style={{
            color: "#f3f3f3",
            backgroundImage:
              "linear-gradient(115deg,rgba(58, 58, 158, 0.8),rgba(136, 136, 206, 0.7)),url(https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg)",
          }}
          className="fixed top-0 left-0 h-full w-full z-0 bg-cover bg-center"
        ></div>
        <div
        style={{ color: "#f3f3f3",}} 
        className="relative z-10 m-0 pt-12">
          <Header />
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
