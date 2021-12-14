import { useMint } from "../../hooks/useMint";

import { MintOutlineButton, MintOutlineLink } from "../buttons";
import { TextInput } from "../input/textInput";

export const MetadataForm = () => {
  const {
    name,
    url,
    description,
    error,
    txHash,
    updateForm,
    clearForm,
    onMintPressed,
  } = useMint();

  if (txHash) {
    return (
      <div>
        <h1 className="text-xl font-bold tracking-wide text-white lg:text-2xl my-4">
          Your NFT
        </h1>
        <h1 className="text-xl tracking-wide text-white lg:text-2xl my-4 underline">
          Name
        </h1>
        <h1 className="text-lg tracking-wide text-white lg:text-xl my-4">
          {name}
        </h1>
        <h1 className="text-xl tracking-wide text-white lg:text-2xl my-4 underline">
          Description
        </h1>
        <h1 className="text-lg tracking-wide text-white lg:text-xl my-4">
          {description}
        </h1>
        <div className="flex flex-row justify-between">
          <MintOutlineLink
            title="Etherscan"
            link={`https://ropsten.etherscan.io/tx/${txHash}`}
          />
          <MintOutlineButton title="Mint again" action={clearForm} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <TextInput
          label="Name"
          name="name"
          value={name}
          onChangeInput={(value) => updateForm("NAME", value)}
        />
        <TextInput
          label="URL"
          name="url"
          value={url}
          onChangeInput={(value) => updateForm("URL", value)}
        />
        <TextInput
          label="Description"
          name="description"
          value={description}
          onChangeInput={(value) => updateForm("DESCRIPTION", value)}
        />
      </div>
      <h1 className="my-3 text-red-600">{error}</h1>
      <div className="mt-6">
        <MintOutlineButton
          title="Mint NFT"
          action={async () => {
            // print hash
            // clear input
            await onMintPressed();
            console.log(name, url, description);
          }}
        />
      </div>
    </div>
  );
};
