import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { HistoryCard } from "../../components/HistoryCard";

import { Container, Header, Title } from "./styles";
import { categories } from "../../utils/categories";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

export function Resume() {
  async function loadData() {
    const dataKey = "@gofinance: transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensive = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === "negative"
    );

    const totalByCategory = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensive.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        totalByCategory.push({
          name: category.name,
          total: categorySum,
        });
      }
    });
    console.log(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>
      <HistoryCard title="Compras" color="red" amount="R$ 150,50" />
    </Container>
  );
}
