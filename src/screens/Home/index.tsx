import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";

export function Home() {
  const participants = [
    "Rodrigo",
    "Beatriz",
    "Gabriel",
    "Lucas",
    "Ana",
    "Maria",
    "João",
    "Pedro",
    "Paulo",
    "Júlia",
    "Clarisse",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Partcipante já cadastrado!",
        "Já existe um participante cadastrado lista"
      );
    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert(`${name} foi deletado da lista!`),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <Button variant="add" onPress={handleParticipantAdd} />
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.listEmptyText}>
              Não há participantes cadastrados
            </Text>
          );
        }}
      />
    </View>
  );
}
