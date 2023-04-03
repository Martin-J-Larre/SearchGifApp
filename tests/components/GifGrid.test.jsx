import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test on component <GifGid />", () => {
  const category = "New York";

  test("should show loading when starts", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show items when images are load using useFechGifs", () => {
    const gifs = [
      {
        id: "123",
        title: "Item 1",
        url: "https://123abcd/",
      },
      {
        id: "456",
        title: "Item 2",
        url: "https://456efgh/",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
