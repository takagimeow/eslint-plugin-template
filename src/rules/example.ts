import { createRule } from "../utils/createRule";

type MessageIds = 'invalid';
type Options = [];

export default createRule<Options, MessageIds>({
  name: 'example',
  meta: {
    type: 'problem',
    docs: {
      description: "",
    },
    fixable: 'code',
    schema: [],
    messages: {
      invalid: "",
    },
  },
  defaultOptions: [],
  create(context, options) {
    return {};
  },
});