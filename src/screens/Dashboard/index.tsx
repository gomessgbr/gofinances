import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { HighLightCard } from "../../components/HighLightCard";

import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

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
  TransactionList,
  LogoutButton,
  LoadingContainer,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighLightProps {
  amount: string;
}

interface HighLightData {
  entries: HighLightProps;
  expensive: HighLightProps;
  total: HighLightProps;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [highLightData, setHighLightData] = useState<HighLightData>(
    {} as HighLightData
  );

  const theme = useTheme();

  async function loadTransaction() {
    const response = await AsyncStorage.getItem("@gofinance: transactions");
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));
        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );
    const total = entriesTotal - expensiveTotal;

    setTransactions(transactionsFormatted);

    setHighLightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      expensive: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransaction();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      ) : (
        <>
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
              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighLightCard
              type="up"
              title="Entradas"
              amount={highLightData?.entries?.amount}
              lastTransaction="Última entrada dia 13 de abril"
            />
            <HighLightCard
              type="down"
              title="Saídas"
              amount={highLightData?.expensive?.amount}
              lastTransaction="Última saída dia 03 de abril "
            />
            <HighLightCard
              type="total"
              title="Total"
              amount={highLightData?.total?.amount}
              lastTransaction="01 à 16 de abril"
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
