import React from "react";
import styled from "styled-components";
import Box from "~/renderer/components/Box";
type StepType = {
  icon: any;
  desc: any;
};
const OptionRow = ({ step, ...p }: { step: StepType }) => {
  const { icon, desc } = step;
  return (
    <Box
      horizontal
      m="7px"
      style={{
        minWidth: 420,
      }}
    >
      <Box {...p}>{icon}</Box>
      <Box justifyContent="center" shrink>
        <OptionRowDesc>{desc}</OptionRowDesc>
      </Box>
    </Box>
  );
};
export const OptionRowDesc = styled(Box).attrs(() => ({
  ff: "Inter|Regular",
  fontSize: 4,
  textAlign: "left",
  color: "palette.text.shade80",
  grow: true,
  pl: 2,
}))``;
export const IconOptionRow = styled(Box).attrs(p => ({
  ff: "Inter|Regular",
  fontSize: 14,
  color: p.color || "wallet",
}))``;
export default OptionRow;
