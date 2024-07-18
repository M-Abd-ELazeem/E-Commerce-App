import { useContext, useEffect, useState } from 'react'
import Style from './WishList.module.css'
import { WishListContext } from '../../Context/WishListContext'
import { ClimbingBoxLoader } from 'react-spinners'



export default function WishList() {
    const [wishListDetails, setWishListDetails] = useState(null)
    console.log(wishListDetails);


    let { getWishListUser, removeFromWishList, wishListCount, setwishListCount } = useContext(WishListContext)


    // /////// Get ////////
    async function getWishList() {
        let response = await getWishListUser();
        setWishListDetails(response.data);
        // if (response.data.length > 0) {
        //     setWishListCount(response.data.length)
        //     console.log(response.data.length);
        // } else {
        //     setWishListCount(undefined)

        // }
        console.log(response.data);
    }
    useEffect(() => { getWishList() }, [])



    /// remove //// 

    async function removeWishListItem(productId) {
        let response = await removeFromWishList(productId);
        setWishListDetails(response.data);
        // if (response.data.length !== 0) {
        //     setWishListCount(response.count)

        // } else {
        //     setWishListCount(undefined)

        // }
        console.log(response.data);
    }


    if (wishListDetails === null) {
        return <div className='w-full h-screen flex justify-center items-center '> <ClimbingBoxLoader color="#36d7b7" /></div>
    }



    // if (wishListCount == undefined) {
    //     return <div className='my-10  py-10 text-center flex flex-col justify-center items-center'>
    //         <p className='bg-gray-300 rounded-full w-28 h-28 flex justify-center items-center'  >   <i className=" fa-regular fa-heart text-6xl py-9 text-green-600"></i> </p>
    //         <h2 className='text-4xl py-4 text-green-600'>There Is No Saving Item yet</h2>
    //         <p className='text-gray-500 py-2 '>Add Something to Make Me Happy :)</p>

    //     </div>
    // }




    return (<>
        <div className="row ">

            {wishListDetails?.data.map((product) => <div key={product?.id} className="w-12/12 md:w-6/12 lg:w-2/12 px-4 py-4 border border-gray-300">
                <div key={product?.id} className='w-full '>
                    <img className='w-full my-2' src={product?.imageCover} alt="" />
                    <h3 className='text-lg font-semibold text-green-800 py-1'>{product?.title?.split(' ').slice(0, 2).join(' ')}</h3>
                    <div className="flex justify-between items-center py-2">
                        <span> {product?.price}EGP</span>
                        <span>{product?.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></span>
                    </div>
                    <button className='w-full  py-2 rounded-sm  bg-orange-600 text-white'>Add To Car</button>
                    <button onClick={() => removeWishListItem(product?.id)} className='font-medium text-black hover:underline py-2'><i className="fa-solid fa-trash-can text-orange-600"></i>remove</button>

                </div>

            </div>)}
        </div>
    </>
    )
}
