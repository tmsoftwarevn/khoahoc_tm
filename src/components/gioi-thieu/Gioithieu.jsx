"use client";

const Gioithieu = (props) => {
  const { description } = props;
  return (
    <>
      <div className="">
        <div className="container">

          gioi thieu
          <div
            className=" px-2 mt-5"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Gioithieu;
