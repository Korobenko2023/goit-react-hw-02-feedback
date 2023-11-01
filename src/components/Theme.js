export const theme = {
    colors: {
        white: "#fafafa",
        black: "#212121",
        lightBlack: "#808080",
        violet: "#0900114a",
    },

    background: {
        white: "#ffff",
        blue: "#4cacbf",
        lightBlue: "#97d3e6",
        lightBlueSecond: "#97deee",
        PowderBlue: "#B0E0E6",
        violet: "#0900114a",
        green: "green",
        red: "red",
    },

    radii: {
        sm: "4px",
        md: "8px",
        lg: "16px",
    },

    spasing: (value) => `${value * 4}px`,

    getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    },   
}


