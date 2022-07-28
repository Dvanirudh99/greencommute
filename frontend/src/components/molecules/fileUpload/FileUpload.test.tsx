import React from "react";
import FileUpload from "./FileUpload";
import { fireEvent, render, screen } from "@testing-library/react";

describe("FileUpload", () => {
  test("renders FileUpload", () => {
    render(
      <FileUpload
        handleClose={() => console.log("close button clicked!")}
        handleUpload={() => console.log("upload done")}
      />
    );
    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
    const uploadButton = screen.getByTestId("upload-button");
    fireEvent.click(uploadButton);
    expect(screen.getByTestId("uploaddone")).toBeInTheDocument();
    const uploadDone = screen.getByTestId("uploaddone");
    fireEvent.change(uploadDone);
  });
});
