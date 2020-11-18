import { configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, optionsKnob } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { checkA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

addDecorator(withSmartKnobs(optionsKnob))
addDecorator(withKnobs)
addDecorator(withInfo)
addDecorator(checkA11y)

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};
configure(loadStories, module);
