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
  UserWrapper
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
        </UserWrapper>
      </Header>
    </Container>
  );
}
