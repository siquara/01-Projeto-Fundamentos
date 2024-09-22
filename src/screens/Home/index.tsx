import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    const trimmedParticipant = newParticipant.trim();
    if (participants.includes(trimmedParticipant)) {
      return Alert.alert(
        "Participante já cadastrado!",
        "Já existe um participante cadastrado na lista"
      );
    }
  
    if (trimmedParticipant === "") {
      return Alert.alert("Campo vazio!", "Preencha o campo de participante");
    }
  
    setParticipants([...participants, trimmedParticipant]);
    setNewParticipant("");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Confirmados para Festa</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipant}
          value={newParticipant}
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
