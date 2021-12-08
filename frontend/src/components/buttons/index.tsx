export const MintOutlineLink = ({ title, link }) => {
  return (
    <a
      href={link}
      className="inline-block text-sm px-4 py-2 mt-0 leading-none border rounded text-white border-white hover:border-green-500 hover:text-green-500"
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );
};

export const MintOutlineButton = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="inline-block text-sm px-4 py-2 mt-0 leading-none border rounded text-white border-white hover:border-green-500 hover:text-green-500"
    >
      {title}
    </button>
  );
};
