import * as React from "react";
import FileUpload from "./FileUpload";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/FileUpload",
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

export const FileUpload_: ComponentStory<typeof FileUpload> = () => (
  <FileUpload
    handleClose={() => console.log("close button clicked!")}
    handleUpload={() => console.log("upload done")}
  />
);
