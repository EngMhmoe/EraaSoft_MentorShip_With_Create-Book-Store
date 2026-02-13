//import img
import img1 from "../../../../public/images/myPhoto-دائره.png";

// w-96
export default function CustomerReviews({ t }) {
  //Data Customer Reviews
  const CustomerReviews = [
    {
      img: img1,
      name: "Mohamed Alwani",
      dec: "Verified Purchases",
      Date: "28/07/2024",
      NameBook: "Excellent Book",
      Rate: "5.0",
      Reviews: (
        <div className="rating">
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="1 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="2 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="3 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="4 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="5 star"
            aria-current="true"
          ></div>
        </div>
      ),
      Mass: "Our customers’ trust is what drives us forward. We value every review and experience shared, and we’re committed to delivering quality and service that exceed expectations.",
    },

    {
      img: img1,
      name: "Mohamed Alwani",
      dec: "Verified Purchases",
      Date: "28/07/2024",
      NameBook: "Excellent Book",
      Rate: "5.0",
      Reviews: (
        <div className="rating">
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="1 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="2 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="3 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="4 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="5 star"
            aria-current="true"
          ></div>
        </div>
      ),
      Mass: "Our customers’ trust is what drives us forward. We value every review and experience shared, and we’re committed to delivering quality and service that exceed expectations.",
    },

    {
      img: img1,
      name: "Mohamed Alwani",
      dec: "Verified Purchases",
      Date: "28/07/2024",
      NameBook: "Excellent Book",
      Rate: "5.0",
      Reviews: (
        <div className="rating">
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="1 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="2 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="3 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="4 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="5 star"
            aria-current="true"
          ></div>
        </div>
      ),
      Mass: "Our customers’ trust is what drives us forward. We value every review and experience shared, and we’re committed to delivering quality and service that exceed expectations.",
    },

    {
      img: img1,
      name: "Mohamed Alwani",
      dec: "Verified Purchases",
      Date: "28/07/2024",
      NameBook: "Excellent Book",
      Rate: "5.0",
      Reviews: (
        <div className="rating">
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="1 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="2 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="3 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="4 star"
          ></div>
          <div
            className="mask mask-star bg-yellow-500"
            aria-label="5 star"
            aria-current="true"
          ></div>
        </div>
      ),
      Mass: "Our customers’ trust is what drives us forward. We value every review and experience shared, and we’re committed to delivering quality and service that exceed expectations.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center items-center gap-x-6 gap-y-12 border-t border-red-500 py-9">
      {CustomerReviews.map((Review, i) => {
        return (
          <div
            key={i}
            className="flex group flex-col hover:scale-103 duration-1000 gap-4 bg-base-100 xl:w-162 md:w-120   shadow shadow-black/30 hover:shadow-red-400 rounded py-4 px-6"
          >
            <div className=" flex items-center gap-4">
              <figure>
                <img
                  src={Review.img}
                  className="w-15 shadow-lg rounded-full group-hover:shadow-red-200 duration-1000"
                  alt="Shoes"
                />
              </figure>

              {/*  */}

              <div className="flex font-bold flex-col gap-1">
                <h1 className=" text-[18px] group-hover:text-(--color-textColor1) duration-1000">
                  {t(`${Review.name}`)}
                </h1>

                <p className="text-[14px] text-[#25D994]">
                  {t(`${Review.dec}`)}
                </p>
              </div>
            </div>

            {/* ////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////// */}

            <div className="flex flex-col gap-4">
              <h2 className="text-black/60 text-[15px] font-normal">
                {t(`Reviewed On`)} {t(`${Review.Date}`)}
              </h2>

              {/*  */}

              <section className="flex flex-row items-center gap-4">
                <h1 className="card-title text-[20px] font-bold text-(--color-textColor1) group-hover:text-black duration-1000">
                  {t(`${Review.NameBook}`)}
                </h1>

                <div className="flex flex-row items-center gap-3">
                  <h1 className="text-[16px]">{Review.Rate}</h1>
                  {/* {Review.Reviews} */}
                  {/*  */}
                  <div className="rating">
                    <div
                      className="mask mask-star bg-yellow-500 group-hover:bg-(--color-textColor1) duration-1000"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-yellow-500 group-hover:bg-(--color-textColor1) duration-1000"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-yellow-500 group-hover:bg-(--color-textColor1) duration-1000"
                      aria-label="3 star"
                    ></div>
                    <div
                      className="mask mask-star bg-yellow-500 group-hover:bg-(--color-textColor1) duration-1000"
                      aria-label="4 star"
                    ></div>
                    <div
                      className="mask mask-star bg-yellow-500 group-hover:bg-(--color-textColor1) duration-1000"
                      aria-label="5 star"
                      aria-current="true"
                    ></div>
                  </div>
                </div>
              </section>

              {/*  */}

              <p className="text-black/60 font-normal text-[15px]">
                {t(`${Review.Mass}`)}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
