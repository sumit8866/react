import React from 'react'
import ProductContext from '../context/ProductContext'
import { useContext } from 'react'

const Cart = () => {

    const { CartProduct } = useContext(ProductContext)

    return (
        <div>
            <h1 className='headtext'>Cart Page</h1>
            <div key={CartProduct.id} className="w-84">
                <div className="max-w-sm rounded-lg shadow-xl shadow-gray-400 p-4">
                    <a href="#">
                        <img
                            className="rounded-t-lg h-72 w-100"
                            src={CartProduct.image}
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of
                            2021 so far, in reverse chronological order.
                        </p>
                        <button
                            onClick={() => setCartProduct(CartProduct)}
                            className="inline-flex CartProducts-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            ADD CART
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart