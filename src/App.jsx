import Form from "./components/Form";

function App() {
  return (
    <>
      <div style={{ color: '#f3f3f3', backgroundImage: 'linear-gradient(115deg, rgba(58, 58, 158, 0.8), rgba(136, 136, 206, 0.7))' }} className="font-sans box-border font-normal text-base leading-5 bg-cover bg-center bg-gradient-to-br from-purple-800 via-purple-600 to-purple-800 m-0 pt-12">
        <header>
          <h1 className="text-center mb-2 font-normal text-2xl sm:text-3xl  leading-tight">freeCodeCamp Survey Form</h1>
          <p className="text-center italic text-base font-extralight mb-3 sm:mb-7 drop-shadow-sm">
            Thank you for taking the time to help us improve the platform
          </p>
        </header>
        <Form />
      </div>
    </>
  );
}

export default App;
