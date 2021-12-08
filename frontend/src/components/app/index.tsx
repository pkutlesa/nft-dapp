import { MintProvider } from "../../hooks/useMint";
import { WalletProvider } from "../../hooks/useWallet";
import { Landing } from "../landing";

import "./index.css";

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <MintProvider>
          <Landing />
        </MintProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
