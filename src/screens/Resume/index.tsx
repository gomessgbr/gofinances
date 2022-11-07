import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { HistoryCard } from "../../components/HistoryCard";

import { Container, Header, Title } from "./styles";

export function Resume() {
  async function loadData() {
    const dataKey = "@gofinance: transactions";
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];
  }

  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>
      <HistoryCard title="Compras" color="red" amount="R$ 150,50" />
    </Container>
  );
}
