import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo />
          <User>
            <UserGreeting>Olá</UserGreeting>
            <UserName>Gabriel</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  );
}
