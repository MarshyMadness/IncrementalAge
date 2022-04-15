import { MantineProvider } from "@mantine/core";
import { Tooltip, Button } from "@mantine/core";

function Demo() {
  return (
    <Tooltip
      wrapLines
      width={220}
      withArrow
      transition="fade"
      transitionDuration={200}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}

export default function HutButton() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}
