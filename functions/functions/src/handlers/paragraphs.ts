import { db } from "../util/admin";
import { RequestHandler } from "express-serve-static-core";

export interface Paragraph {
  body: string;
  userName: string;
  createdAt: string;
}

const postParagraph: RequestHandler = async (req, res) => {
  if (req.body.body.trim() === "")
    return res.status(400).json({ body: "Body must not be empty" });

  const newParagraph: Paragraph = {
    body: req.body.body,
    userName: req.user && req.user.userName,
    createdAt: new Date().toISOString()
  };

  console.log(newParagraph);

  try {
    const doc = await db.collection("paragraphs").add(newParagraph);
    return res.json({ pId: doc.id, ...newParagraph });
  } catch (err) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteParagraph: RequestHandler = async (req, res) => {
  try {
    const document = await db.doc(`/paragraphs/${req.params.pId}`);
    const doc = await document.get();
    if (!doc.exists)
      return res.status(404).json({ error: "Paragraph not found" });

    const data = doc.data();

    if (!data || !req.user) throw new Error();
    if (data.userName !== req.user.userName) {
      return res.status(403).json({ error: "Unauthorized" });
    } else {
      document.delete();
    }

    return res.json({ message: "Paragraph deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.code });
  }
};

export { postParagraph, deleteParagraph };
