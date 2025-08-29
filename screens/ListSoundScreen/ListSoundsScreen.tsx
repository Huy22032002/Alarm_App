import { FlatList, StyleSheet, View } from "react-native";
import Header from "../../components/Header/Header";
import { SoundItem, sounds } from "../../constant/sounds";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { styles } from "./ListSound.styles";
import { Card, Text } from "react-native-paper";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
//------------
const ListSoundScreen = () => {
  //theme
  const { theme } = useTheme();

  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlaySound = (name: string) => {
    setSelectedSound((prev) => (prev === name ? null : name));
  };

  const renderSoundItem = ({ item }: { item: SoundItem }) => {
    const isSelected = selectedSound === item.name;

    return (
      <Card
        style={[
          styles.cardContainer,
          { backgroundColor: theme.colors.green[500] },
        ]}
        onPress={() => togglePlaySound(item.name)}
      >
        <Card.Content style={[styles.cardContent]}>
          <Text style={[theme.textStyles.songName]}>{item.name}</Text>
          <View style={[styles.cardContentRight]}>
            {isSelected ? (
              <Text>Animaton</Text>
            ) : (
              <MaterialCommunityIcons
                name="volume-off"
                size={28}
                color={theme.colors.white[500]}
              />
            )}
          </View>
        </Card.Content>
      </Card>
    );
  };
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[`${theme.colors.green.bg}`, `${theme.colors.green[700]}`]} // bạn có thể thêm nhiều màu
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.safeContainer}
      >
        <SafeAreaView>
          <Header
            title="Sounds"
            prevScreen="CreateAlarm"
            selectedSound={selectedSound}
          />
          {/* List Category */}

          {/* List Sounds */}
          <FlatList
            keyExtractor={(item) => item.name}
            data={sounds}
            renderItem={renderSoundItem}
          />
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default ListSoundScreen;
