import { useSelector } from "react-redux";

export const ErrorMessage = () => {
  const { error } = useSelector((state) => state);

  if (error) {
    return (
      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          padding: "10px",
          backgroundColor: "#d96666",
          color: "white",
          borderRadius: "5px",
        }}
      >
        {error}
      </div>
    );
  }

  return null;
};
