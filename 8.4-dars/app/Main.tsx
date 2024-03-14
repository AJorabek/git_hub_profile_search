const Main = () => {
    const handleSubmit = (e: any) => {
        e?.preventDefault();
      };
  return (
    <>
      <section className="main-section">
        <form onSubmit={handleSubmit}>
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6 0A10.6 10.6 0 0 0 0 10.58a10.6 10.6 0 0 0 17.46 8.07l5.11 5.1a.87.87 0 0 0 1.23 0 .87.87 0 0 0 0-1.24l-5.11-5.08a10.52 10.52 0 0 0 2.53-6.85A10.6 10.6 0 0 0 10.6 0Zm6.33 16.77a8.8 8.8 0 0 0 2.55-6.19 8.87 8.87 0 0 0-17.74 0 8.87 8.87 0 0 0 15.2 6.19Z"
              fill="#0079FF"
            />
          </svg>
          <input type="text" id="form" placeholder="Search GitHub username…" />
        </form>
        <button className="search">Search</button>
      </section>
    </>
  );
};

export default Main;
