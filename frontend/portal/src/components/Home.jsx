function Home() {
  return (

    <div className="min-h-screen bg-gray-200 flex flex-col">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Apollo Projects</h1>
          <nav>
            <ul className="flex space-x-4">
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">Welcome to Apollo Projects</h1>
              <span className=" bg-black ">..refresh to change background image...</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Apollo Projects.
        </div>
      </footer>
    </div>
  );
};


export default Home
