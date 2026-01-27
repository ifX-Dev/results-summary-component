import "./App.css";
import Result from "./components/result.jsx";
import results from "./assets/data.json";

function App() {
  return (
    <>
      <div className=" h-fit center md:flex-row md:justify-center md:items-center bg-white rounded-4xl">
        <div className="rounded-b-4xl md:rounded-t-4xl md:h-[500px] bg-linear-to-b from-(--color-bckgrnd-from) to-(--color-bckgrnd-to) p-[40px] md:px-[80px] col-between w-(--width-main) z-2">
          <p className="hanken-sm md:text-[24px] font-bold mb-8">Your Result</p>
          <div className="col-between mb-5 justify-around bg-linear-to-b from-(--color-circle-from) to-(--color-circle-to) p-[48px] aspect-square rounded-[200px]">
            <h1 className="hanken-lg md:text-[80px] text-white mb-2">76</h1>
            <p className="hanken-sm text-(--color-light-lavender)">of 100</p>
          </div>
          <div className="col-between">
            <h2 className="hanken-md text-white mb-2">Great</h2>
            <p className="hanken-sm ">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="col-between w-(--width-main) md:w-[375px] h-[500px] px-[32px] py-[48px] md:py-[32px] bg-white max-md:rounded-b-4xl md:rounded-r-4xl">
          <p className="text-left w-full hanken-sm md:text-[24px] font-bold text-(--color-dark-gray-blue)">
            Summary
          </p>
          {results.map((item) => (
            <Result
              key={item.id}
              cat={item.category}
              score={item.score}
              icon={item.icon}
              color={item.color}
              bg={item.bg}
            />
          ))}
          <button className="p-[16px] w-full bg-(--color-dark-gray-blue) rounded-4xl hanken-sm font-bold">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
