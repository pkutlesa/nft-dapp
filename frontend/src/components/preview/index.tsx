import { useMint } from "../../hooks/useMint";

export const Preview = () => {
  const { url } = useMint();
  return url ? (
    <img
      className="object-cover w-full h-full max-w-2xl rounded-md"
      src={url}
      alt="NFT preview"
    />
  ) : (
    <div className="w-full h-full flex max-w-2xl rounded-md border-2 border-green-300">
      <h1 className="m-auto">Preview</h1>
    </div>
  );
};
