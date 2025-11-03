const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// Helper function: Simulate a single-qubit measurement
const measureQubit = () => {
  // After Hadamard operation: equal probability of 0 and 1
  return Math.random() < 0.5 ? 0 : 1;
};

// POST: Generate random bits
router.post("/generate", async (req, res) => {
  try {
    const { count } = req.body;
    if (!count || count <= 0) {
      return res.status(400).json({ success: false, message: "Count must be greater than 0." });
    }

    const bits = [];
    for (let i = 0; i < count; i++) {
      bits.push(measureQubit());
    }

    const zeros = bits.filter(b => b === 0).length;
    const ones = bits.filter(b => b === 1).length;

    const newResult = new Result({ bits, total: count, zeros, ones });
    await newResult.save();

    res.json({
      success: true,
      message: "Quantum random bits generated successfully!",
      data: newResult
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET: Fetch last 10 generation results
router.get("/history", async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 }).limit(10);
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
// DELETE: Remove a specific history item
router.delete("/delete/:id", async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Record deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
