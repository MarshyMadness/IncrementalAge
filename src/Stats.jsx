import React from "react";
import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  Button,
} from "@mantine/core";
import icons8kawaiisteak96 from "./Graphics/KawaiiSteak/icons8kawaiisteak96.png";
import icons8person80 from "./Graphics/icons8person80.png";

const ICON_SIZE = 65;
const MAX_FOOD = 120;
const MAX_WOOD = 80;
const MAX_COPPER = 40;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export function CompleteBar({ gameData, setGameData, setBuildingData }) {
  if (
    gameData.foodAmount >= 120 &&
    gameData.wood >= 80 &&
    gameData.copper >= 40
  ) {
    var prevfoodAmount = gameData.foodAmount;
    var prevwood = gameData.wood;
    var prevcopper = gameData.copper;
    setGameData((prevData) => ({ ...prevData, People: 1 }));
    setGameData((prevData) => ({
      ...prevData,
      foodAmount: prevfoodAmount - 120,
    }));
    setGameData((prevData) => ({ ...prevData, wood: prevwood - 80 }));
    setGameData((prevData) => ({ ...prevData, copper: prevcopper - 40 }));
    setGameData((prevData) => ({ ...prevData, People: 1 }));
    setBuildingData((prevData) => ({ ...prevData, PeopleButton: true }));
    setBuildingData((prevData) => ({ ...prevData, FirstCard: false }));
    console.log(gameData.People);
  } else {
  }
}

export default function StatsCard({ gameData, setGameData, setBuildingData }) {
  const { classes } = useStyles();
  var ProgressAmount = (
    ((Math.min(MAX_FOOD, gameData.foodAmount) +
      Math.min(MAX_WOOD, gameData.wood) +
      Math.min(MAX_COPPER, gameData.copper)) /
      (MAX_FOOD + MAX_WOOD + MAX_COPPER)) *
    100
  ).toFixed(0);
  return (
    <Paper
      id="FirstCard"
      radius="md"
      withBorder
      className={classes.card}
      mt={ICON_SIZE / 3}
    >
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <img src={icons8person80} className="Logo-Card" alt="logo" />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        First Person
      </Text>
      <Text color="dimmed" align="center" size="sm">
        120 Food, 80 Wood, 40 Copper
      </Text>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          {ProgressAmount}
        </Text>
      </Group>

      <Progress value={ProgressAmount} mt={5} striped="true" animate="true" />

      <Group position="center" mt="md" direction="column">
        <Text size="sm">
          {gameData.foodAmount} / {MAX_FOOD} Food
        </Text>
        <Text size="sm">
          {gameData.wood} / {MAX_WOOD} Wood
        </Text>
        <Text size="sm">
          {gameData.copper} / {MAX_COPPER} Copper
        </Text>
      </Group>

      <Button
        width="fit-content"
        style={{ height: "3rem", marginTop: "1rem" }}
        className={``}
        onClick={() => CompleteBar({ gameData, setGameData, setBuildingData })}
      >
        Complete
      </Button>
    </Paper>
  );
}
