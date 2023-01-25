import React from "react";
import BreakdownChart from "components/BreakdownChart";
import { useTheme, Box } from "@mui/material";
import Header from "components/Header";

import { useMemo } from "react";
import { useGetSalesQuery } from "state/api";
const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Sales by Category"></Header>
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
