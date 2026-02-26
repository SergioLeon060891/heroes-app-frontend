import { describe, expect, test } from "vitest";
import { getHeroAction } from "./get-hero.action";

describe("getHeroAction", () => {
  test("Should fetch hero data and return with complete image url", async () => {
    const hero = await getHeroAction("bruce-wayne");

    expect(hero.image).toContain("http");

    expect(hero).toStrictEqual({
      id: "2",
      name: "Bruce Wayne",
      slug: "bruce-wayne",
      alias: "Batman",
      powers: [
        "Artes marciales",
        "Habilidades de detective",
        "Tecnología avanzada",
        "Sigilo",
        "Genio táctico",
      ],
      description:
        "El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.",
      strength: 6,
      intelligence: 10,
      speed: 6,
      durability: 7,
      team: "Liga de la Justicia",
      image: "http://localhost:3001/images/2.jpeg",
      firstAppearance: "1939",
      status: "Active",
      category: "Hero",
      universe: "DC",
    });
  });

  test("Should throw an error if hero is not found", async () => {
    const result = await getHeroAction("bruce-wayne2").catch((error) => {
      expect(error).toBeDefined();
      expect(error.code).toBe("ERR_BAD_REQUEST");
      expect(error.response.data.message).toBe("Hero not found");
    });

    expect(result).toBeUndefined();
  });
});
