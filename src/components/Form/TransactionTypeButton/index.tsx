import React from "react";

import { Container, Title, Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

export function TransactionTypeButton({ title, type, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
