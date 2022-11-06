import React, { useState, FC } from "react";
import {
  Box,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { useGetCoinsByUsdQuery } from "../../../modules/coin/api";
import LoadingScreen from "../LoadingScreen";
import { transformNumberWithCommas } from "../../../utils/transformNumberWithCommas";
import { CoinData } from "../../models/props/coin-data.interface";
import { Delete, Refresh } from "@material-ui/icons";
import { ConfirmDialog } from "../ConfirmDialog";
import ScrollToTop from "react-scroll-to-top";

const headers: string[] = ["Coin", "Price", "24h Change", "Market Cap", ""];

export const CoinsTable: FC = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [coinToDelete, setCoinToDelete] = useState<CoinData | null>(null);
  const [deletedCoins, setDeletedCoins] = useState<Array<string>>([]);

  const {
    data,
    isLoading,
    isFetching,
    refetch: refetchCoins,
  } = useGetCoinsByUsdQuery("");

  const handleDeleteDialogOpen = (coin: CoinData) => {
    setOpenDeleteDialog(true);
    setCoinToDelete(coin);
  };

  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
    setCoinToDelete(null);
  };

  const handleDeleteDialogConfirm = () => {
    handleDeleteDialogClose();
    if (coinToDelete) {
      setDeletedCoins((oldDeletedCoins) => {
        const updatedDeletedCoins = [
          ...oldDeletedCoins,
          coinToDelete.id as string,
        ];

        return updatedDeletedCoins;
      });
    }
  };

  return (
    <Box style={{ width: "100%" }}>
      <ConfirmDialog
        open={openDeleteDialog}
        handleClose={handleDeleteDialogClose}
        handleConfirm={handleDeleteDialogConfirm}
      />
      <Box
        width="100%"
        style={{ textAlign: "right", marginRight: 34.6, marginTop: 14 }}
      >
        <Button
          onClick={refetchCoins}
          variant="outlined"
          size="medium"
          style={{ color: "#1e81b0", borderColor: "#1e81b0"  }}
        >
          <Refresh
            fontSize="medium"
            style={{ cursor: "pointer", color: "#1e81b0" , marginRight: 2.5 }}
          />
          <Typography>Refresh Coin Data</Typography>
        </Button>
      </Box>
      <>
        {isLoading || isFetching ? (
          <LoadingScreen />
        ) : (
          <>
            <Table aria-label="Coin Table">
              <TableHead>
                <TableRow>
                  {headers?.map((header) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "17px",
                        padding: 18,
                      }}
                      key={header}
                      align={header === "Coin" ? "left" : "center"}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  ?.filter(
                    (coin: CoinData) =>
                      !deletedCoins.includes(coin?.id as string)
                  )
                  .map((coin: CoinData) => (
                    <TableRow key={coin?.name} hover>
                      <TableCell
                        style={{
                          display: "flex",
                          gap: 15,
                        }}
                      >
                        <img
                          src={coin?.image}
                          alt={coin?.name}
                          height="50"
                          style={{ marginBottom: 10 }}
                        />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontSize: 22,
                            }}
                          >
                            {coin?.symbol}
                          </span>
                          <span style={{ color: "darkgrey" }}>
                            {coin?.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        {transformNumberWithCommas(
                          coin?.current_price.toFixed(2)
                        )}
                        $
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        {coin?.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align="center">
                        {transformNumberWithCommas(
                          coin?.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Delete Coin">
                          <IconButton
                            onClick={() => handleDeleteDialogOpen(coin)}
                          >
                            <Delete
                              fontSize="medium"
                              style={{ cursor: "pointer" }}
                            />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <>
              <ScrollToTop
                smooth
                color="white"
                style={{
                  borderRadius: "80%",
                  background: "#1e81b0",
                  padding: 6,
                }}
              />
            </>
          </>
        )}
      </>
    </Box>
  );
};
