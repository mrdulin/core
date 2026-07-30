import App from './App';
import { createBridgeComponent } from '@module-federation/bridge-react';
import Button from './button';

export const app = createBridgeComponent({
  rootComponent: App,
});

export const button = createBridgeComponent({
  rootComponent: Button,
});
