const Connect = ({ isConnected }) => {
  if (window.localStorage.getItem("userToken")) {
    typeof window.localStorage.getItem("userToken") === "string"
      ? isConnected(true)
      : isConnected(false);
  }
};

export default Connect;
