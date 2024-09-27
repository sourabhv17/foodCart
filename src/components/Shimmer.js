import "./Shimmer.css";

export const Shimmer = () => {
  return (
    <div className="shimmer-div">
      {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="res-card-shimmer"></div>;
      })}
    </div>
  );
};
