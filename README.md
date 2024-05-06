
# CoinCause: CrowdFunding Platform Using Blockchain

![11](https://github.com/shambhaviijhaa/CoinCause-Crowdfunding/assets/89500052/66434dd2-c0bf-4386-bdc2-2579b8aecf9c)


Join the future of fundraising with our innovative Web3 community-based crowdfunding platform! Experience the power of blockchain transactions, where transparency and security come together to revolutionize the way you support projects. Be part of a global community that connects creators and backers seamlessly, ensuring trust and accountability at every step. Empower ideas, fuel dreams, and reshape crowdfunding on a platform designed for the modern era.

![14](https://github.com/shambhaviijhaa/CoinCause-Crowdfunding/assets/89500052/1cdc6eaa-53a3-4b8c-bffb-ab90823e04fc)

![16](https://github.com/shambhaviijhaa/CoinCause-Crowdfunding/assets/89500052/e66c7f26-1cfe-4112-80a2-0d2c0fe517aa)

## Note

There will be many Folders here, so make sure you run the project and install the necessary dependencies inside the correct directory.


## Deployment

To deploy this project, follow the following. -

Below are the steps to create a `.env` file, install dependencies, deploy a smart contract, and update the contract address.

#### Create a `.env` file:

1. In your project's web3 directory, create a new file named `.env.`

2. Add your MetaMask private key to this file in the following format:

   ```
   PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY
   ```

   Replace `YOUR_METAMASK_PRIVATE_KEY` with your actual private key. Make sure to keep this file secure and never share it publicly.

#### Install Dependencies:

After creating the `.env` file, follow these steps to install dependencies and deploy the smart contract.

1. Navigate to the `client` directory, `server` directory and the `web3` directory using the command line.

   ```bash
   cd client
   ```

   ```bash
   cd web3
   ```

   ```bash
   cd server
   ```

2. In both the `client`, `server` and `web3` directories, run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

#### Deploy the Smart Contract:

1. In the `web3` directory, run the following command to deploy the smart contract:

   ```bash
   npm run deploy
   ```

   Ensure your MetaMask private key is correctly configured in the `.env` file to sign the deployment transaction.

   Follow the link that appears in the terminal and deploy the contract in the desired network. (Polygon or Ethereum).

   The deployment process will provide you with the contract address once it's successfully deployed.

#### Update the Contract Address:

Once the smart contract is deployed and you have the contract address:

1. Open the `client` directory.

2. Locate the relevant file where the contract address is being used (e.g., in a JavaScript file).

3. Update the contract address in the file with the address of the deployed smart contract on the third web.

## Usage

Provide instructions and examples on how to interact with your smart contract or use it in your application.
