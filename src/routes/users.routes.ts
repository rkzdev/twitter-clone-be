import { Router } from "express";

export const userRoutes = Router();

// Create user
userRoutes.post("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// List users
userRoutes.get("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// Get single user
userRoutes.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Update single user
userRoutes.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// Delete user
userRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});
