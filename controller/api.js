import { firestore } from "../config/firebaseConfig";

export const fetchUserData = async (req, res) => {
  try {
    const snapshot = await firestore.collection("USERS").get();
    const users = snapshot.docs.map((doc) => doc.data());
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const { userId, data } = req.body;
    await firestore.collection("USERS").doc(userId).set(data, { merge: true });
    res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
