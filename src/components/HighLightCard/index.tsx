import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./style";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
}

export function HighLightCard({ title, amount, lastTransaction }: Props) {
  return (
    <Container>
      <Header>
        <Title>{Title}</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
