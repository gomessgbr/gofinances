import React from "react";

import { Container, Title, Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
}

export function TransactionTypeButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
