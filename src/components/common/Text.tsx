import { Typography } from "antd";

export const Text = ({
  children,
  color = "black",
  type = "text",
  level = 2,
}: {
  children: React.ReactNode;
  color?: "black" | "white";
  type?: "text" | "title";
  level?: 1 | 2 | 3 | 4 | 5;
}) => {
  const TextComponent = type === "text" ? Typography.Text : Typography.Title;

  return (
    <TextComponent level={level} style={{ color, margin: 0 }}>
      {children}
    </TextComponent>
  );
};
