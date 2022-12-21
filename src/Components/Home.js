import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import crud from '../Conexiones/crud'


const Home = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const response = await crud.GET(`/api/category/home`)
    setCategories(response.category)
  }

  useEffect(() => {
    loadCategories();

  }, []);

  /************* */
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await crud.GET(`/api/product/home`)
    setProducts(response.product1)
  }
  //console.log(products)
  useEffect(() => {
    loadProducts();

  }, []);


  return (


    <main className="  mt-5 md:mt-10 p-5  md:justify-center text-center    ">

      <div className="   w-full">

        {   /* <h1 className=" block text-center    bg-gradient-to-r from-red-300 via-red-600 to-red-300 bg-clip-text  text-5xl tracking-tight text-transparent">
          FiveMarket
          <br />
        </h1>*/}

        <div align="center">
          <img width={400} height={400}

src="https://res.cloudinary.com/ducsfn7np/image/upload/v1671503894/LOGOFIVE_u3m0lf.png"></img>
        </div>
      </div>
      <div  
       className='items-center align-content: center ml-8 flex  justify-center  '
      >
      <Link
          to={"/login"}
          className="md:flex md:justify-center border-4 rounded-lg w-max items-center align-content: center border-red-500  text-3xl font-black hover:text-red-500 font-serif   block text-center my-5 text-red-600  uppercase">
          Acceder
        </Link>
        </div>

      <div className="">
        
        <div className="px-4 sm:flex sm:items-center sm:justify-between  sm:px-6 lg:px-8 xl:px-0">
          
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          
          </a>
        </div>

        <div className="overflow-auto  mx-auto py-5  sm:py-15 ">
          <div >
            <div className="relative box-content  h-80 overflow-x-auto  xl:overflow-visible">
              
              <div className="min-w-screen-xl grid  space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 ">
                {categories.map((category) => (
                  <a
                    key={category.nombre}
                    
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute mt-2 inset-0">
                      <img src={category.imagen} alt="" className="h-full rounded w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50 "
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white icon-logo">{category.nombre}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

       
      </div>
      ----------------------
      <div className="bg-gray-500 border-4 border-yellow-500">

      <div className="px-4 sm:flex sm:items-center sm:justify-end  sm:px-6 lg:px-8 xl:px-0">
          
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  ">
        

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product._id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imagen}

                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.nombre}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.stock}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.precio}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200 "
                  >
                    Add to bag<span className="sr-only">, {product.nombre}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </main>
  );
}

export default Home;
