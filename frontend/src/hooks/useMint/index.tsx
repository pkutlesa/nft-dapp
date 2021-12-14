import { createContext, useState, useContext } from "react";

import { mintNFT } from "../../utils/interact";

export const mintContext = createContext<any>({});
export const useMint = () => useContext(mintContext);

export function MintProvider({ children }) {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState("");

  function updateForm(prop, value) {
    if (prop === "NAME") setName(value);
    if (prop === "URL") setURL(value);
    if (prop === "DESCRIPTION") setDescription(value);
  }

  function clearForm() {
    setName("");
    setURL("");
    setDescription("");
    setTxHash("");
  }

  const onMintPressed = async () => {
    try {
      if (!name.trim() || !url.trim() || !description.trim())
        throw new Error(
          "❗Please make sure all fields are completed before minting."
        );
      const hash = await mintNFT(url, name, description);
      setTxHash(hash);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <mintContext.Provider
      value={{
        name,
        url,
        description,
        txHash,
        error,
        updateForm,
        clearForm,
        onMintPressed,
      }}
    >
      {children}
    </mintContext.Provider>
  );
}
