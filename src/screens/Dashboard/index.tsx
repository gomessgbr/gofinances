import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HighLightCard } from "../../components/HighLightCard";

import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from "./styles";

export function Dashboard() {
  const data = {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: { name: "Vendas", icon: "dolar-sign" },
    date: "13/04/2020",
  };
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/39136800?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighLightCard
          type="up"
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLightCard
          type="down"
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Última saída dia 03 de abril "
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="R$16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard data={data} />
      </Transactions>
    </Container>
  );
}
