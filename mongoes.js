const mongoose = require("mongoose");

const main = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/school");

        const ProductSchema = new mongoose.Schema({
            name: String,
            age: Number,
        });

        const ProductModel = mongoose.model('student', ProductSchema);

        let data = new ProductModel({ name: "shavaiz" , age: 12 });
        let result = await data.save();
        console.log(result);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } 
};

main();
