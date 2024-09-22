import {
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
    "Rodrio",
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
    console.log("Você clicou no botão de Adicionar");
  }
  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de Remover ${name}`);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participants) => (
          <Participant
            key={participants}
            name={participants}
            onRemove={() => handleParticipantRemove(participants)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
