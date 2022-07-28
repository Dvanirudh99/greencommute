import React from "react";
import FileUploadSuccess from "./FileUploadSuccess";
import { render, screen } from "@testing-library/react";

describe("FileUploadSuccess", () => {
  test("renders FileUploadSuccess", () => {
    render(
      <FileUploadSuccess
        handleClose={() => console.log("close button clicked")}
      />
    );
    expect(screen.getByTestId("file-upload-success")).toBeInTheDocument();
  });
});
