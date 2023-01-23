import Product from "../models/Product.js";
import User from "../models/User.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
  try {
    /*with each product we cycle through and make an API call to ProductStats, so that we can display the corresponding 
    product stat with the product. 

    Why not just include the stats in the schema? Bad database management. What happens when you want to show a client a Product
    without the stats for e.g.? Better to sepeate */
    //I return an array of objects with all the product info and all the stat info, to make one big object

    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._od,
        });

        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");

    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
