import React from 'react';

import Button from "../components/buttons/Button";
import Overlay from "../components/overlays/Overlay";
import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Overlay',
  component: Overlay,
}

export const base = () => <Overlay text="Overlay"></Overlay>;
base.storyName = 'Base';

