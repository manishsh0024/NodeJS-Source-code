const mongoose = require("mongoose");

const CreateMedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    advice: {
        type: String,
        required: true
    },
    company: {
        type: String
    }
});

const MedicineReport = mongoose.model("MedicineReport" , CreateMedicineSchema);

module.exports = MedicineReport;