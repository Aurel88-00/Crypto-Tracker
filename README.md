
## Starting the app
1. Clone the respository in your local machine.
2. Run the commad `cd crypto-tracker`
3. Run the command `npm install --legacy-peer-deps`, to avoid any problem that might arise from possible version mismatch of the npm packages used in the app.
4. Run the command npm run start.
5. The app will be up and running in your local machine.

## App Overview
The aim of the app is to list an array of cryptocurrencies, showcasing their price, 24h price change in percentage and their market cap. The user is given the ability to refresh the aforementioned data, if he wants to see the latest changes. He can also remove a given currency from the list.

## Technologies
- The app is built with React Framework using Typescript.
- Material UI is used for the general presentation and the UI.
- The cryptocurrency data are provied by Coin Gecko Api.
