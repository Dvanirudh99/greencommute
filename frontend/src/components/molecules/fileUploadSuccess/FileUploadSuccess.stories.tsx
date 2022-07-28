import * as React from "react";
import FileUploadSuccess from "./FileUploadSuccess";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/FileUploadSuccess",
  component: FileUploadSuccess,
} as ComponentMeta<typeof FileUploadSuccess>;

export const FileUploadSuccess_: ComponentStory<typeof FileUploadSuccess> =
  () => (
    <FileUploadSuccess
      handleClose={() => console.log("close button clicked")}
    />
  );
