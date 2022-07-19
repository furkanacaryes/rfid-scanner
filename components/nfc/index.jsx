import { useEffect } from "react";
import { NfcRfidScanner } from "react-native-rfid-nfc-scanner";

const setupScanner = () => {
  const scanner = new NfcRfidScanner();

  scanner.addListener(
    "HotelRunner",
    () => console.log("heyya!"),
    () => console.log("ooops!")
  );

  console.log("[INFO] Scanner has been created!");

  scanner.init();

  const isEnabled = scanner.isEnabled();
  const status = scanner.getStatus();

  console.log({ isEnabled, status });

  return scanner;
};

export const NFC = () => {
  const scanner = useRef(() => setupScanner());

  useEffect(() => {
    console.log("[INFO] NFC component has been mounted!");
  }, []);

  return null;
};
