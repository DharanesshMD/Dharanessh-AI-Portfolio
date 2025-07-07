import { experimental_createMCPClient, tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise experience of Dharanessh M D. It is used to answer the question "What is your experience? Where are you working right now?"',
  parameters: z.object({}),
  execute: async () => {
    return `
        "Here are all the experiences Dharun has gained so far! Don't hesitate to ask me more about any of them!",
        `
  },
});
