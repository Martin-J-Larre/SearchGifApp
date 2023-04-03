import { render, screen } from "@testing-library/react";
import { Card } from "../../src/components/Card";

describe("Test in Card compenent", () => {
  const title = "String";
  const url = "https://string-string/";

  test("should match with snapshot", () => {
    const { container } = render(<Card title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show image with URL and Alt text", () => {
    render(<Card title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should show a title in the component", () => {
    render(<Card title={title} url={url} />);
    expect(screen.getByAltText(title)).toBeTruthy();
  });
});
