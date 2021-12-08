import { useWallet } from "../../hooks/useWallet";
import { Header } from "../header";
import { MintMenu } from "../layout/mintMenu";
import { RequestMetamask } from "../requestMetamask";

export const Landing = () => {
  const { hasMetamask } = useWallet();
  return (
    <div>
      <Header />
      {hasMetamask ? <MintMenu /> : <RequestMetamask />}
    </div>
  );
};
