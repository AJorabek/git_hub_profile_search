const HandleMode = () => {
  const handleMode = () => {
    let container = document.getElementById("container");
    container?.classList.toggle("light");
  };
  return (
    <>
      <button onClick={handleMode} className="mode">
        dark
      </button>
    </>
  );
};

export default HandleMode;
