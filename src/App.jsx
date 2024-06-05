import { useEffect } from 'react';
import Swiper from 'swiper';

function App() {
  useEffect(() => {
    var swiper = new Swiper(".best-seller", {
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints: {
        768: {
          centeredSlides: false,
        },
      },
    }, []);

  })
  return (
    <>
      <header>
        <div className="bg-secondary">
          <div className="container text-center py-2">
            <p className="text-[12px] lg:text-sm text-white">
              LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
              <span className="pl-4">23:00:00</span>
            </p>
          </div>
        </div>
        <div className="py-4 lg:border-b lg:border-neutral-400 ">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap justify-between lg:gap-8">
              <div className="order-1 flex items-center space-x-4 lg:-ml-9">
                <button className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
                <a href="">
                  <img
                    srcSet="src/assets/images/logo.png 2x"
                    alt=""
                    className="w-[119px] lg:w-full"
                  />
                </a>
              </div>
              <form
                action=""
                className="w-full order-3 lg:order-2 flex gap-2 border-t mt-4 lg:mt-0 border-neutral-400 pt-4 lg:w-auto lg:pt-0 lg:border-0"
              >
                <input
                  type="text"
                  className="py-1 pl-6 pr-1 rounded-full bg-white border border-[#F4F4F4] w-full lg:w-[400px]"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="bg-primary rounded-full w-[58px] lg:w-12 h-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-white mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </form>
              <div className="order-2 lg:order-3 flex items-center gap-2 lg:gap-6 lg:-mr-9">
                <a href="" className="text-sm lg:text-base">Your Account</a> |
                <button className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span
                    className="text-[12px] absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white">1
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="container">
            <nav>
              <ul className="lg:flex items-center justify-center space-x-10 text-[#46494F]">
                <li><a href="" className="block py-4">Shop All</a></li>
                <li><a href="" className="block py-4">Flower</a></li>
                <li><a href="" className="block py-4">Edibles</a></li>
                <li><a href="" className="block py-4">Concentrates</a></li>
                <li><a href="" className="block py-4">Mushrooms</a></li>
                <li><a href="" className="block py-4">Promotions/Bundles</a></li>
                <li><a href="" className="block py-4">Support</a></li>
                <li><a href="" className="block py-4">Rewards</a></li>
                <li><a href="" className="block py-4">Blog</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section
        className="bg-[url('src/assets/images/banner-mobile.jpg')] lg:bg-[url('src/assets/images/banner-desktop.jpg')] bg-no-repeat bg-cover bg-center text-white min-h-[720px] flex py-10 lg:items-center lg:py-0"
      >
        <div className="container">
          <div className="lg:w-2/3">
            <span className="block text-[#F2BC1B] tracking-[4px] text-sm lg:mb-5 lg:text-base">BEST SELLER</span>
            <h1 className="main-title">BEST DISPENSARY TO BUY WEED ONLINE</h1>
            <a href="" className="block text-lg/[150%] lg:mb-10 lg:text-2xl/[150%] tracking-">Vitamins & Supplements</a>
            <div className="mb-5">
              <span className="text-lg/[150%] lg:mb-5 lg:text-2xl/[150%]">Get 25% off</span><span>Free Shipping</span>
            </div>
            <a href="" className="btn lg:btn-lg">Shop All</a>
          </div>
        </div>
      </section>
      <section className="bg-[#C3D2CC] py-[64px] lg:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="grid grid-cols-[64px,auto] lg:grid-cols-[100px,auto] gap-6">
              <div>
                <div
                  className="bg-white rounded-full h-[64px] lg:h-[100px] flex items-center justify-center"
                >
                  <img
                    src="src/assets/icons/new/truck-fast.svg"
                    alt=""
                    className="w-[36px] lg:w-[56px]"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[#1A1E26] text-xl lg:text-2xl">Reliable Shipping</h3>
                <p className="text-sm text-[#717378] lg:text-base">
                  Green Society provides Canada Post Xpress Shipping right to your
                  doorstep! You can also opt in for shipping insurance. For orders
                  over $149, shipping is free!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[64px,auto] lg:grid-cols-[100px,auto] gap-6">
              <div>
                <div
                  className="bg-white rounded-full h-[64px] lg:h-[100px] flex items-center justify-center"
                >
                  <img
                    src="src/assets/icons/new/safe-home.svg"
                    alt=""
                    className="w-[36px] lg:w-[56px]"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[#1A1E26] text-xl lg:text-2xl">Reliable Shipping</h3>
                <p className="text-sm text-[#717378] lg:text-base">
                  Green Society provides Canada Post Xpress Shipping right to your
                  doorstep! You can also opt in for shipping insurance. For orders
                  over $149, shipping is free!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[64px,auto] lg:grid-cols-[100px,auto] gap-6">
              <div>
                <div
                  className="bg-white rounded-full h-[64px] lg:h-[100px] flex items-center justify-center"
                >
                  <img
                    src="src/assets/icons/new/coin.svg"
                    alt=""
                    className="w-[36px] lg:w-[56px]"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[#1A1E26] text-xl lg:text-2xl">Reliable Shipping</h3>
                <p className="text-sm text-[#717378] lg:text-base">
                  Green Society provides Canada Post Xpress Shipping right to your
                  doorstep! You can also opt in for shipping insurance. For orders
                  over $149, shipping is free!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[64px] lg:py-[120px]">
        <div className="container">
          <div className="mb-[32px] lg:mb-[64px]">
            <h2 className="main-title uppercase text-center">
              BEST DISPENSARY TO BUY <br className="hidden lg:block" />
              WEED ONLINE IN CANADA
            </h2>
          </div>

          <div>
            <div className="tabs lg:mb-[64px]">
              <ul className="lg:grid grid-cols-3 gap-8">
                <li>
                  <a
                    href=""
                    className="block h-[40px] leading-[40px] lg:h-[48px] lg:leading-[48px] text-center text-sm lg:text-base border border-[#05422C] rounded-full hover:bg-[#F2F6F4] transition ease-in-out duration-500"
                  >Best Sellers</a>
                </li>
                <li>
                  <a
                    href=""
                    className="block h-[40px] leading-[40px] lg:h-[48px] lg:leading-[48px] text-center text-sm lg:text-base border border-[#05422C] rounded-full hover:bg-[#F2F6F4] transition ease-in-out duration-500"
                  >Bundles & Promotions</a>
                </li>
                <li>
                  <a
                    href=""
                    className="block h-[40px] leading-[40px] lg:h-[48px] lg:leading-[48px] text-center text-sm lg:text-base border border-[#05422C] rounded-full hover:bg-[#F2F6F4] transition ease-in-out duration-500"
                  >On Sale</a>
                </li>
              </ul>
            </div>
            <div className="tabs-content">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-4">
                  <div
                    className="bg-secondary text-center rounded-2xl px-10 py-[35px] lg:py-[122px]"
                  >
                    <div className="mb-5">
                      <img
                        src="src/assets/images/products/product1.png"
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                    <h3 className="mb-5">
                      <a href="" className="text-xl text-white"
                      >Shop our Best Sellers</a>
                    </h3>
                    <p className="mb-5 text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum
                      varius lorem blandit lectus magnis feugiat.
                    </p>
                    <a href="" className="text-sm text-[#17AF26] underline">View All</a>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div className="swiper best-seller">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div
                            className="h-[240px] flex items-center justify-center bg-[url('src/assets/images/bgProduct.png')] bg-cover bg-center bg-no-repeat"
                          >
                            <img
                              src="src/assets/images/products/product1.png"
                              alt=""
                            />
                          </div>
                          <div className="product-content text-center py-5">
                            <a
                              href=""
                              className="block mb-2 text-sm font-light text-[#9D9EA2] uppercase"
                            >CONCENTRATES</a>
                            <h3 className="mb-4">
                              <a href="" className="text-lg text-[#1A1E26]"
                              >Mix And Match Shatter/Budder 28g (4 X
                                7G)</a>
                            </h3>
                            <div className="rating mb-4">
                              <span>4.6/5 | 135</span>
                              <a href="" className="text-[#C8C9CB]"
                              >Reviews</a>
                            </div>
                            <span
                              className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg"
                            >Indica 70%</span>
                            <div className="mb-4">
                              <span className="text-[#EB2606]">$200.00</span>
                              <span className="text-[#C8C9CB] text-base"
                              >/gram</span>
                            </div>
                            <ul
                              className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-2 *:px-3"
                            >
                              <li>28g</li>
                              <li>1/2lb</li>
                              <li>1/4lb</li>
                            </ul>
                            <a href="" className="btn">Add To Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div
                            className="h-[240px] flex items-center justify-center bg-[url('src/assets/images/bgProduct.png')] bg-cover bg-center bg-no-repeat"
                          >
                            <img
                              src="src/assets/images/products/product1.png"
                              alt=""
                            />
                          </div>
                          <div className="product-content text-center py-5">
                            <a
                              href=""
                              className="block mb-2 text-sm font-light text-[#9D9EA2] uppercase"
                            >CONCENTRATES</a>
                            <h3 className="mb-4">
                              <a href="" className="text-lg text-[#1A1E26]"
                              >Mix And Match Shatter/Budder 28g (4 X
                                7G)</a>
                            </h3>
                            <div className="rating mb-4">
                              <span>4.6/5 | 135</span>
                              <a href="" className="text-[#C8C9CB]"
                              >Reviews</a>
                            </div>
                            <span
                              className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg"
                            >Indica 70%</span>
                            <div className="mb-4">
                              <span className="text-[#EB2606]">$200.00</span>
                              <span className="text-[#C8C9CB] text-base"
                              >/gram</span>
                            </div>
                            <ul
                              className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-2 *:px-3"
                            >
                              <li>28g</li>
                              <li>1/2lb</li>
                              <li>1/4lb</li>
                            </ul>
                            <a href="" className="btn">Add To Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div
                            className="h-[240px] flex items-center justify-center bg-[url('src/assets/images/bgProduct.png')] bg-cover bg-center bg-no-repeat"
                          >
                            <img
                              src="src/assets/images/products/product1.png"
                              alt=""
                            />
                          </div>
                          <div className="product-content text-center py-5">
                            <a
                              href=""
                              className="block mb-2 text-sm font-light text-[#9D9EA2] uppercase"
                            >CONCENTRATES</a>
                            <h3 className="mb-4">
                              <a href="" className="text-lg text-[#1A1E26]"
                              >Mix And Match Shatter/Budder 28g (4 X
                                7G)</a>
                            </h3>
                            <div className="rating mb-4">
                              <span>4.6/5 | 135</span>
                              <a href="" className="text-[#C8C9CB]"
                              >Reviews</a>
                            </div>
                            <span
                              className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg"
                            >Indica 70%</span>
                            <div className="mb-4">
                              <span className="text-[#EB2606]">$200.00</span>
                              <span className="text-[#C8C9CB] text-base">/gram</span>
                            </div>
                            <ul
                              className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-2 *:px-3"
                            >
                              <li>28g</li>
                              <li>1/2lb</li>
                              <li>1/4lb</li>
                            </ul>
                            <a href="" className="btn">Add To Cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
