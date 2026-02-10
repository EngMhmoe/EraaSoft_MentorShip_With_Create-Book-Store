//import Component UI
import Img from "../UI/Img";

//import Components
import CardHeader from "./CardHeader";
import Carts from "./Carts";
import PaymentSummary from "./PaymentSummary";

//import style.css
import "./style.css";

export default function MyCartPage() {
  //Data Carts (1)
  const DataCarts = [
    {
      img: "../../../public/images/img25.png",
      NameBook: "Rich Dad And Poor Dad",
      Author: "Robert T. Kiyosanki",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,",
      ASIN: "B09TWSRMCB",
      Price: 40,
      TotalPrice: 50,
    },

    {
      img: "../../../public/images/img25.png",
      NameBook: "Rich Dad And Poor Dad",
      Author: "Robert T. Kiyosanki",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,",
      ASIN: "B09TWSRMCB",
      Price: 20,
      TotalPrice: 35,
    },
  ];

  return (
    <section>
      {/* Component Img */}
      <Img size={30} />

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <div className="pt-45 pb-31.75  sm:mx-10 mx-5">
        {/* Component Cart Header */}
        <CardHeader />

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        {/* Component Carts */}
        <section className="my-6.5">
          <Carts DataCarts={DataCarts} />
        </section>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        <section className="mt-15">
          <PaymentSummary />
        </section>
      </div>
    </section>
  );
}
