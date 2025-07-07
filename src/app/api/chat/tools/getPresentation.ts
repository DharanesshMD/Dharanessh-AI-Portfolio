import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Dharanessh M D. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Dharanessh M D, a full-stack AI engineer passionate about building smart, scalable software. I studied Computer Science at Anna University and recently worked at Fidelity Investments, where I optimized microservices, APIs, and Snowflake queries. Now, I’m building AI-driven SaaS products and diving deep into cloud, system design, and automation. I’m all about shipping clean code, learning fast, and turning ideas into reality.",
    };
  },
});
