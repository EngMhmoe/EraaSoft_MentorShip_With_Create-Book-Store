//import Components
import HeaderFiltering from "./HeaderFiltering";
import MainBookCard from "./MainBookCard";

//import Hooks react
import { useEffect, useState } from "react";

//import axios
import axios from "axios";

export default function TestStrapiPage() {
  //1. domain
  const domain = "http://localhost:1337";

  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

  //2. Data Products
  const [categories, setCategories] = useState([]);

  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

  //3. Data Products
  const [Products, setProducts] = useState([]);

  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

  //4. pagination pageSize
  const [Page, setPage] = useState(1);

  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

  //4. pagination pageSize
  const [pageSize, setPageSize] = useState(6);

  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

  //5. Filters Product with Category
  const [selectCategories, setSelectCategories] = useState([]);

  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  //1. Get categories  Api Strapi
  const getCategories = async () => {
    try {
      const res = await axios.get(`${domain}/api/categories`);

      console.log(res.data.data);

      setCategories(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
  //\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

  //2. Get Products  Api Strapi
  const getProducts = async () => {
    try {
      const res = await axios.get(`${domain}/api/products`, {
        params: {
          // populate: "*" =>=>=> كل البيانات الى ماجتش
          // Prw_image: true =>=>=> عاوز الصوره فقط
          // category: true =>=>=> فقط category عاوز ال
          //\/\/\/\/\/\/\/\/\/\/\/\//\/\\
          //\/\/\/\/\/\/\/\/\/\/\/\//\/\\
          // populate: "*",
          //\/\/\/\/\/\/\/\/\/\/\/\//\/\\
          //\/\/\/\/\/\/\/\/\/\/\/\//\/\\
          populate: {
            Prw_image: true,
            category: true,
          },

          //\/\/\/\/\/\/\/\/\/\/\/\//\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\
          //\/\/\/\/\/\/\/\/\/\/\/\//\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\

          pagination: {
            page: `${Page}`,
            pageSize: `${pageSize}`,
          },

          //\/\/\/\/\/\/\/\/\/\/\/\//\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\
          //\/\/\/\/\/\/\/\/\/\/\/\//\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\

          // filters: {
          //   category: {
          //     Cat_Name: selectCategories,
          //   },
          // },

          filters:
            selectCategories.length > 0
              ? {
                  category: {
                    Cat_Name: {
                      $in: selectCategories,
                    },
                  },
                }
              : {},
        },
      });

      // console.log(res.data.data);

      // console.log(res.data);

      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  //1. Set categories  Api Strapi
  useEffect(() => {
    getCategories();
  }, []);

  //2. Set Products  Api Strapi
  useEffect(() => {
    getProducts();
  }, [Page, selectCategories]);

  return (
    <section className="w-full bg-black text-white py-10 flex flex-col gap-20">
      <header>
        <HeaderFiltering
          categories={categories}
          setSelectCategories={setSelectCategories}
        />
      </header>

      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}

      <main>
        <MainBookCard Products={Products} domain={domain} />
      </main>

      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}

      <div className="join flex justify-center items-center">
        <button className="join-item btn btn-active" onClick={() => setPage(1)}>
          1
        </button>
        <button className="join-item btn" onClick={() => setPage(2)}>
          2
        </button>
        <button className="join-item btn" onClick={() => setPage(3)}>
          3
        </button>
      </div>
    </section>
  );
}
