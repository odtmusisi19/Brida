import Products from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    // req.header("Content-Type", "application/json");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Products.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(404).json({ pesan: error.message });
    // res.json({msg:"muelk"});
  }
};
export const saveProduct = async (req, res) => {
  const product = new Products(req.body);
  try {
    const saveproduct = await product.save();
    res.status(201).json(saveproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  // mengecek ID product ada atau tidak
  const cekID = await Products.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (!cekID) return res.status(404).json({ message: "Data tidak Ditemukan" });

  try {
    const updatedproduct = await Products.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(400).json({ pesan: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  // mengecek ID product ada atau tidak
  const cekID = await Products.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (!cekID) return res.status(404).json({ message: "Data tidak Ditemukan" });
  try {
    const deleteddproduct = await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteddproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
