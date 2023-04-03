import { getGifs } from "../../src/helpers/getGifs";

describe("Test on getGifs()", () => {
  test("should return a array with gifs", async () => {
    const gifs = await getGifs("New York");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
