import "../App.css";

function Result(props) {
  return (
    <>
      <div
        className={`w-full px-[12px] py-[16px]  rounded-xl row-between`}
        style={{ backgroundColor: props.bg}}
      >
        <div className="row-between justify-start">
          <img src={props.icon} alt="" className="h-[23px]" />
          <p className={`ml-3 hanken-sm font-bold`}
          style={{color: props.color}}>
            {props.cat}
          </p>
        </div>
        <p className="hanken-sm font-bold text-(--color-light-gray-blue)">
          <span className="text-(--color-dark-gray-blue)">{props.score}</span> /
          100
        </p>
      </div>
    </>
  );
}

export default Result;
