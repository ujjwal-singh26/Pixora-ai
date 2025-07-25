import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#7a95e1] to-[#e2ecff] flex items-center justify-center px-4 py-12">
      <main className="relative bg-white/70 backdrop-blur-lg border border-blue-100 shadow-xl rounded-3xl max-w-6xl w-full p-10 flex flex-col items-center space-y-10 transition duration-300 ease-in-out">
        
        {/* Title */}
        <h1 className="text-9xl sm:text-7xl font-extrabold text-transparent bg-gradient-to-r from-sky-900 via-cyan-500 to-blue-600 bg-clip-text drop-shadow-md">
          AI Image Enhancer
        </h1>

        <p className="text-center text-gray-600 max-w-xl text-2xl">
          <b><h1>Upload your image and let AI work its magic — sharper, clearer, and smarter in seconds.</h1></b>
        </p>

        <h1>{/* Upload + Image Grid */}</h1>
        <Home />

        {/* Footer */}
        <footer className="text-black-500 text-sm mt-10 flex items-center space-x-2">
          <svg
            className="h-4 w-4 text-rose-400 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
          </svg>
          <span><h1><b>Made by @Ujjwal</b></h1></span>
        </footer>
      </main>
    </div>
  );
};

export default App;
