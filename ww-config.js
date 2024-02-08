export default {
  editor: {
    label: {
      en: "Statechange Youtube Demo Element",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "SC Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    message: {
      label: { en: "Message" },
      type: "Text",
      options: {
        placeholder: "What to say to the user", // all input[type = text] options are supported
      },
    },
  },
  triggerEvents: {
    clicked: { en: "When I gave it a click" },
  },
};