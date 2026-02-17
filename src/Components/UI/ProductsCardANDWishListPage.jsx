import { MdOutlineDeleteForever } from "react-icons/md";

import { motion } from "motion/react";

//
import { UseDomainStore } from "../../store/Domain";

export default function ProductsCardANDWishListPage({
  ProductsCardANDWishList,
  setProductsCardANDWishList,
  counter,
  t,
  storage,
}) {
  //
  const domain = UseDomainStore((state) => state.domain);
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //function increaseQty +
  function increaseQty(id) {
    const Cart = JSON.parse(localStorage.getItem("Carts"));

    const UpdateCart = Cart.map((item) => {
      if (item.documentId === id) {
        if (item.quantity < item.stock) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    localStorage.setItem("Carts", JSON.stringify(UpdateCart));

    setProductsCardANDWishList(UpdateCart);
  }

  //function increaseQty +
  function decreaseQty(id) {
    const Cart = JSON.parse(localStorage.getItem("Carts"));

    const UpdateCart = Cart.map((item) => {
      if (item.documentId === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    localStorage.setItem("Carts", JSON.stringify(UpdateCart));

    setProductsCardANDWishList(UpdateCart);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // const [modelDelete, setModelDelete] = usestate();

  //function deleteItems
  function DeleteItem(id) {
    //رساله تأكيد قبل الحزف
    const confirmDelete = confirm("من هل انتا متأكد الحزف");

    if (confirmDelete === false) {
      return;
    } else {
      let Cart = JSON.parse(localStorage.getItem(`${storage}`)) || [];

      const UpdatedCart = Cart.filter((item) => item.documentId !== id);

      localStorage.setItem(`${storage}`, JSON.stringify(UpdatedCart));

      setProductsCardANDWishList(UpdatedCart);

      //تحديث ال Counter
      window.location.reload();
    }
  }

  return (
    <section className="flex flex-col gap-2 ">
      {ProductsCardANDWishList.map((item) => {
        return (
          <motion.div
            initial={{
              scale: 0,
              transform: "translateX(900px)",
              marginBottom: "200px",
            }}
            animate={{
              scale: 1,
              transform: "translateX(0px)",
              marginBottom: "0px",
            }}
            transition={{ duration: 1.5 }}
            key={item.documentId}
            className="card card-side bg-base-100 shadow-lg border-2 border-black/10  p-6 flex sm:flex-row  flex-col  gap-6"
          >
            {/* section Left */}
            <figure>
              <img
                src={domain + item?.bookImage?.url}
                className="w-43.25 h-63.25 object-fit-cover"
                alt="Movie"
              />
            </figure>

            {/*  */}
            {/*  */}

            {/* <section className="flex xl:flex-row flex-col gap-y-10"> */}
            <div className="flex flex-col justify-between  sm:gap-y-0 gap-y-10 sm:w-80">
              <section className="flex flex-col  gap-1">
                <h1 className="card-title font-bold text-(--color-textColor1)">
                  {t(`${item.bookName}`)}
                </h1>
                {/*  */}
                <h2 className="font-bold">
                  <span className="font-normal text-black/50">
                    {t(`Author`)}:
                  </span>{" "}
                  {t(`${item.author}`)}
                </h2>
                {/*  */}
                <p className="font-normal text-black/50 w-full ">
                  {t(`${item.description}`)}
                </p>
              </section>
              {/*  */}
              {/*  */}
              <button className="btn w-fit   btn-outline cursor-auto  text-black/60">
                {t(`Free Shipping Today`)}
                <img
                  src={"../../../../public/images/img13.png"}
                  className="w-5"
                />
              </button>
              {/*  */}
              {/*  */}
              <h3 className="font-normal text-black/50">
                <span className="font-bold text-(--color-textColor1)">
                  {t(`ASIN`)} :
                </span>{" "}
                {item.asinCode}
              </h3>
            </div>

            {/*  */}
            {/*  */}

            {/* section right */}
            <div className="flex items-center justify-center xl:gap-33 lg:gap-15 md:gap-10 sm:gap-5 gap-5 my-auto sm:ms-auto font-bold lg:text-[30px] md:text-[25px] text-[20px]">
              {/* Counter */}
              <section
                className={`${counter} py-1 px-2  rounded-xl items-center gap-3 bg-white text-black shadow lg:sticky sm:absolute bottom-3 right-15`}
              >
                <button
                  disabled={item.quantity === 1}
                  onClick={() => {
                    decreaseQty(item.documentId);
                  }}
                  className="rounded-full btn   btn-error text-white  text-4xl text-center flex items-center justify-center h-8 w-1 pb-2"
                >
                  -
                </button>

                {/*  */}

                <h1 className=" font-bold text-xl">{item.quantity}</h1>

                {/*  */}

                <button
                  disabled={item.quantity === item.stock}
                  onClick={() => {
                    increaseQty(item.documentId);
                  }}
                  className="rounded-full btn  btn-error text-white text-4xl text-center flex items-center justify-center h-8 w-5 pb-2"
                >
                  +
                </button>
              </section>

              {/*  */}

              {/* Price */}
              <h1 className="">$ {t(`${Math.ceil(item.price)}`)}</h1>

              {/*  */}

              {/* Total Price */}
              <h2>$ {t(`${Math.ceil(item.final_price)}`)}</h2>

              {/*  */}

              {/* Delete */}
              <h3
                onClick={() => DeleteItem(item.documentId)}
                className="text-(--color-textColor1) cursor-pointer md:sticky sm:absolute bottom-5 right-3  lg:text-[30px] md:text-[25px] text-[30px] "
              >
                <MdOutlineDeleteForever />
              </h3>

              {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            {/* </section> */}
          </motion.div>
        );
      })}
    </section>
  );
}
