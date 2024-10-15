"use client"
import CardCourse from "../card/CardCourse";

const Khoahoc = () => {
  let arr = [1, 2, 3];
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {arr.map((item, idx) => {
        return (
          <div key={`ppp${idx}`} className="col-span-1">
            <CardCourse  item= {item}/>
          </div>
        );
      })}

    </div>
  );
};

export default Khoahoc;
