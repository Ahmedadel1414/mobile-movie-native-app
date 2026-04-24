import { StatusBar } from "expo-status-bar";

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatusBar hidden />
      {children}
    </>
  );
};

export default ScreenWrapper;
