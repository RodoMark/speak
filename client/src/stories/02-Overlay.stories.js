import React from 'react';

import Button from "../components/buttons/Button";
import Overlay from "../components/overlays/Overlay";
import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Overlay',
  component: Overlay,
}

export const calling = () => <Overlay type="calling"></Overlay>;
calling.storyName = 'Calling';

export const receiving = () => <Overlay type="receiving"></Overlay>;
receiving.storyName = 'Receiving';

export const connecting = () => <Overlay type="connecting"></Overlay>;
connecting.storyName = 'Connecting';

export const error = () => <Overlay></Overlay>;
error.storyName = 'Error';

