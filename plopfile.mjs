export default function (plop) {
  // =========================== //
  // === Component Generator === //
  // =========================== //
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "confirm",
        name: "isAtomic",
        message: "Will this be an atomic component used in multiple areas?",
      },
    ],
    actions: (data) => {
      const path = data.isAtomic ? "src/components/atomic/" : "src/components/";
      // Generate components and append export/import statements to index.js
      let actions = [
        // 1. Create the component file
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "templates/component/Component.ts.hbs",
        },
        // 2. Create the types file
        {
          type: "add",
          path: path + "{{pascalCase name}}/types.ts",
          templateFile: "templates/component/types.ts.hbs",
        },
        // 3. Create an index for the component
        {
          type: "add",
          path: path + "{{pascalCase name}}/index.ts",
          templateFile: "templates/component/index.ts.hbs",
        },
        // 4. Append the component to the atomic index
        {
          type: "append",
          path: path + "index.ts",
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `export { {{pascalCase name}} } from \'./{{pascalCase name}}\'`,
        },
      ];

      return actions;
    },
  });
  // ====================== //
  // === View Generator === //
  // ====================== //
  // Future work: This is only for 1st-level pages, additional work is needed for nested pages
  plop.setGenerator("view", {
    description: "Create a new view",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
      {
        type: "input",
        name: "route",
        message: "What is the route path for this view? (except '/')",
      },
    ],
    actions: (data) => {
      const newRouteInfo = data.hasRightNav
        ? `  { path: ROUTES.{{pascalCase name}}, element: {{pascalCase name}} },`
        : `  { path: ROUTES.{{pascalCase name}}, element: {{pascalCase name}} },`;

      const actions = [
        // 1. Create the index for the view
        {
          type: "add",
          path: "src/views/{{pascalCase name}}/index.ts",
          templateFile: "templates/view/index.ts.hbs",
        },
        // 2. Create the new page
        {
          type: "add",
          path: "src/views/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "templates/view/view.ts.hbs",
        },
        // 3. Append Routes Enum
        {
          type: "append",
          path: "src/settings/constants/router.ts",
          pattern: `/* PLOP_INJECT_ENUM */`,
          template: `  {{pascalCase name}} = \'/{{route}}\',`,
        },
        // 4. Append Import on router
        {
          type: "append",
          path: "src/router.tsx",
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from \'views/{{pascalCase name}}\'`,
        },
        // 5. Append new view to routes
        {
          type: "append",
          path: "src/router.tsx",
          pattern: `/* PLOP_INJECT_ROUTE */`,
          template: newRouteInfo,
        },
      ];

      return actions;
    },
  });
  // ====================== //
  // === Redux Generator === //
  // ====================== //
  plop.setGenerator("redux", {
    description: "Create a new redux slice",
    prompts: [
      {
        type: "input",
        name: "featureName",
        message: "What is the feature name?",
      },
    ],
    actions: () => {
      const actions = [
        // 1. Create the slice file
        {
          type: "add",
          path: "src/store/{{featureName}}/slice.ts",
          templateFile: "templates/redux/slice.ts.hbs",
        },
        // 2. Create the types file
        {
          type: "add",
          path: "src/store/{{featureName}}/types.ts",
          templateFile: "templates/redux/types.ts.hbs",
        },
        // 3. Create hooks file
        {
          type: "add",
          path: "src/store/{{featureName}}/hooks.ts",
          templateFile: "templates/redux/hooks.ts.hbs",
        },
        // 4. Append Import on rootReducer
        {
          type: "append",
          path: "src/store/rootReducer.ts",
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import { reducer as {{featureName}}Reducer } from \'./{{featureName}}/slice\'`,
        },
        // 5. Append new view to routes
        {
          type: "append",
          path: "src/store/rootReducer.ts",
          pattern: `/* PLOP_INJECT_REDUCER */`,
          template: `  {{featureName}}: {{featureName}}Reducer,`,
        },
      ];

      return actions;
    },
  });
}
