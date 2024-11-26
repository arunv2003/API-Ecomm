import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { IoEyeOutline } from "react-icons/io5";
import { Button, Modal } from "antd";
import { CgLaptop } from "react-icons/cg";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import userContext from "../context/UserContext";
// import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Home = () => {
  let ctx = useContext(CartContext);

  let ctx2 = useContext(userContext);
  // console.log(ctx2.search);

  const [loading, setloading] = useState(false);

  let navigate = useNavigate();
  let [products, setProducts] = useState([]);

  let filterArr = products.filter(
    (item) =>
      item.title.toLowerCase().includes(ctx2.search.toLowerCase()) ||
      item.category.toLowerCase().includes(ctx2.search.toLowerCase()) ||
      item.brand?.toLowerCase().includes(ctx2.search.toLowerCase())
  );

  // console.log(filterArr)

  let getData = async () => {
    setloading(true);
    let res = await fetch("https://dummyjson.com/products?skip=0&limit=0");
    let data = await res.json();
    // console.log(data.products)
    setloading(false);
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  const Open = (e) => {
    console.log(e);
  };
  const AddToCart = (e) => {
    // console.log(e);
    props.cart(e);
  };

  // -----Ant design modal code-----
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const showModal = (item) => {
    // console.log(item);
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // *********************  Use State**************

  const [currentPage, setCurrentPage] = useState(1);

  let butonArr = [];

  let itemParPage = 20;
  let lastIndex = currentPage * itemParPage;
  let firstIndex = lastIndex - itemParPage;
  let sliceArray = filterArr.slice(firstIndex, lastIndex);
  let numberOfButton = Math.ceil(filterArr.length / itemParPage);

  for (let i = 1; i <= numberOfButton; i++) {
    butonArr.push(i);
  }
  // console.log(butonArr);
  // console.log(numberOfButton);
  // console.log(sliceArray);

  const handleNext = () => {
    if (currentPage < numberOfButton) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePage = (e, index) => {
    // console.log(e)
    setCurrentPage(e);
  };
  const HandlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      
      {loading === true ? (
        <div className="w-full grid grid-cols-12 gap-3 m-auto p-5 bg-gray-600">
        {Array(4)
          .fill(0)
          .map((item, id) => {
            return (
              <div
                className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12  gap-2  "
                key={id}
              >
                <SkeletonTheme baseColor="#202020" highlightColor="#444" height={300}>
                  <p>
                    <Skeleton count={3} />
                  </p>
                </SkeletonTheme>
              </div>
            );
          })}
      </div>
      ) : (
        <>
          <Modal
            width={800}
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <div className="flex items-center md:flex-row flex-col gap-3">
                <div
                  style={{ width: "45%" }}
                  className="items-center flex flex-col justify-center"
                >
                  <img
                    className="md:h-[200px] w-[350px] sm:w-[full]"
                    src={selectedItem.thumbnail}
                    alt=""
                  />
                  <h1>
                    <b>{selectedItem.title}</b>
                  </h1>
                </div>
                <div style={{ width: "55%" }}>
                  <p>{selectedItem.description}</p>
                  <div className="flex items-center md:flex-row flex-col gap-2">
                    <div>
                      <h2>
                        <b>Discount:</b>&nbsp;{selectedItem.discountPercentage}%
                      </h2>
                      <h1>
                        <b>Price :&nbsp;&nbsp;</b>
                        {selectedItem.price}
                      </h1>
                      {selectedItem.brand && (
                        <p>
                          <b>Brand :&nbsp;&nbsp;</b>
                          {selectedItem.brand}
                        </p>
                      )}
                      <p>
                        <b>Category:&nbsp;</b>
                        {selectedItem.category}
                      </p>
                      <p>
                        <b>Rating</b>&nbsp;{selectedItem.rating}
                      </p>
                      <p>
                        <b>Stocks:</b>&nbsp;{selectedItem.stock}
                      </p>
                      <p>
                        <b>Return:</b>&nbsp;{selectedItem.returnPolicy}
                      </p>
                      <p>
                        <b>Warranty:</b>&nbsp;{selectedItem.warrantyInformation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-center">
                <b>Reviews:</b>
              </h1>
              <div className="grid grid-cols-6 gap-3 mt-0">
                {selectedItem?.reviews?.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-gray-300 md:col-span-4 sm:col-span-6 col-span-12 mx-auto rounded-lg p-2"
                    >
                      <p>
                        <b>Username:</b>&nbsp;{item.comment}
                      </p>
                      <p>
                        <b>Reviewer Name:</b>&nbsp;{item.reviewerName}
                      </p>
                      <p>
                        <b>Reviewer Email:</b>&nbsp;{item.reviewerEmail}
                      </p>
                      <p>
                        <b>Review Date:</b>&nbsp;{item.date}
                      </p>
                      <p>
                        <b>Rating:</b>&nbsp;{item.rating}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Modal>

          <div className="grid grid-cols-12 gap-3 bg-gray-500 pt-10 px-5 ">
            {sliceArray.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  className="flex h-[450px] flex-col justify-between lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 relative h-43"
                  sx={{ backgroundColor: "#27273B" }}
                >
                  <IoEyeOutline
                    color="white"
                    size={30}
                    className="absolute right-5 top-7"
                    onClick={() => showModal(item)}
                  />
                  <img
                    className="w-[350px] h-[250px]"
                    src={item.thumbnail}
                    alt=""
                  />
                  {/* <CardMedia
                  component="img"
                  alt="green iguana"
                  height="100"
                  image={item.thumbnail}
                /> */}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="text-white"
                    >
                      {item.title}
                      <h4>
                        <b>${item.price}</b>
                      </h4>
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography> */}
                  </CardContent>
                  <CardActions className="flex justify-evenly">
                    <button
                      className="bg-gray-500 py-2 px-4 rounded-md hover:bg-gray-400"
                      size="small"
                    >
                      Buy Now
                    </button>
                    <button
                      className="bg-green-500 py-2 px-4 rounded-md hover:bg-green-300"
                      size="small"
                      onClick={() => ctx.addItem(item, index)}
                    >
                      Add to Cart
                    </button>
                  </CardActions>
                </Card>
              );
            })}
          </div>

          <nav
            aria-label="Page navigation example "
            className=" w-max m-auto mx-auto my-1 bg-gray-800 p-1"
          >
            <ul className="inline-flex -space-x-px text-sm  bg-gray-800">
              <li onClick={HandlePrevious}>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li className="flex items-center">
                {butonArr.map((item, index) => {
                  return (
                    <a
                      onClick={() => handlePage(item, index)}
                      href="#"
                      key={index}
                      className={
                        item === currentPage
                          ? "bg-red-400 px-3 h-8 leading-tight items-center flex"
                          : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                      }
                    >
                      {item}
                    </a>
                  );
                })}
              </li>

              <li onClick={handleNext}>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default Home;
