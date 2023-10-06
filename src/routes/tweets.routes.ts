import { Router } from "express";

export const tweetRoutes = Router();

// Create user
tweetRoutes.post("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// List users
tweetRoutes.get("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// Get single user
tweetRoutes.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Update single user
tweetRoutes.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Delete user
tweetRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});
