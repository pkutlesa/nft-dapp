import { MintOutlineLink } from "../buttons";

export const RequestMetamask = () => {
  return (
    <div>
      <div className="container flex px-6 py-4 mx-auto lg:py-16">
        <div className="flex flex-col items-center justify-center w-full p-5">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl tracking-wide text-white lg:text-4xl">
              Please install Metamask
            </h1>
            <img
              className="w-1/2 h-1/2 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1920px-MetaMask_Fox.svg.png"
              alt="Metamask"
            />
            <div className="mt-6">
              <MintOutlineLink
                title="Install"
                link="https://metamask.io/download.html"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
