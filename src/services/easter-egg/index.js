// ¯\_(ツ)_/¯

const easterEggs = {
    description: {
        "no-trigger": "No description provided",
        deadpool: "No description provided. Who the hell knows you, Deadpool?",
    },
};

export function easterEgg(type, trigger) {
    const original_trigger = trigger;

    if (trigger.indexOf("Deadpool") > -1) {
        trigger = "deadpool";
    }

    if (trigger == original_trigger) return "No description provided";

    const chance = Math.random() % 3;

    return chance > 0.78
        ? easterEggs[type][trigger]
        : easterEggs[type]["no-trigger"];
}
