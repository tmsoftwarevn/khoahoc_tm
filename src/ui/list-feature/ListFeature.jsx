import Title from "./Title";

const ListFeature = (props) => {
  const { name } = props;

  let arr = [
    {
      des: "30 seconds to setup",
    },
    {
      des: "10 seconds to setup",
    },
    {
      des: "20 seconds to setup",
    },
    
  ];

  return (
    <div>
      <Title name={name} />
      <ul className="mt-3 flex flex-col space-y-2">
        {arr &&
          arr.map((item, idx) => {
            return (
              <li className="flex" key={item.des}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-2 h-auto w-6 text-white sm:w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  ></path>
                </svg>
                <p className="text-base text-white sm:text-lg">{item.des}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListFeature;