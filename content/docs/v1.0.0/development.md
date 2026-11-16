---
title: Development
description: Run the playground, tests and typecheck.
---

# Development

Work on noofpi-ui from its own repository.

```bash
bun install
bun run dev
bun run test
bun run typecheck
```

| Command             | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| `bun run dev`       | Starts the playground with every variant, color, size and shape, and theme and dark switchers. |
| `bun run test`      | Runs the unit tests with Vitest.                                                    |
| `bun run typecheck` | Type checks the components and templates with vue-tsc.                              |

::callout{type="warning" title="vue-tsc 3.3 typecheck"}
In a template, a local `reactive()` object or composable result read through a property (`signup.email`, `form.email`) can fail with `Property 'value' does not exist`. It is triggered by a string attribute containing `//` on a component, such as an image URL. Use a `ref({ ... })` for the state, or import the object (`import { toast } from "noofpi-ui"`).
::
