import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HighLightCard } from "../../components/HighLightCard";

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
} from "./styles";

export function Dashboard() {
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
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLightCard
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Última saída dia 03 de abril "
        />
        <HighLightCard
          title="Total"
          amount="R$16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
    </Container>
  );
}
