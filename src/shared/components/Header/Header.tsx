import { FC } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Tooltip,
  Typography,
} from "@material-ui/core";

export const Header: FC = () => {
  return (
    <Box>
      <AppBar
        position="sticky"
        style={{
          width: "100%",
          backgroundColor: "#1e81b0",
          padding: 20,
        }}
      >
        <Box
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 20,
          }}
        >
          <Typography style={{ fontSize: "22px", lineHeight: "1.7" }}>
            Crypto Tracker Pro
          </Typography>
          <Tooltip title="User Profile">
            <Avatar
              style={{
                cursor: "pointer",
              }}
            ></Avatar>
          </Tooltip>
        </Box>
      </AppBar>
    </Box>
  );
};
