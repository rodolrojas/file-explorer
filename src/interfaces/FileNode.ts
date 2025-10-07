export default interface FileNode {
  name: string;
  path: string;
  size: string;
  type: string;
  is_dir: boolean;
  mod_time: string;
  user: string;
  group: string;
  mode: string;
  children?: FileNode[];
}

export const Tree: FileNode = {
  name: "/",
  type: "directory",
  is_dir: true,
  path: "/",
  rel_path: "/",
  children: [
    {
      name: "src",
      type: "directory",
      is_dir: true,
      path: "/src",
      rel_path: "src",
      children: [
        {
          name: "components",
          type: "directory",
          is_dir: true,
          path: "/src/components",
          rel_path: "components",
          children: [
            {
              name: "ui",
              type: "directory",
              is_dir: true,
              path: "/src/components/ui",
              rel_path: "ui",
              children: [
                {
                  name: "button.tsx",
                  type: "application/typescript",
                  is_dir: false,
                  path: "/src/components/ui/button.tsx",
                  rel_path: "button.tsx",
                },
                {
                  name: "dropdown-menu.tsx",
                  type: "application/typescript",
                  is_dir: false,
                  path: "/src/components/ui/dropdown-menu.tsx",
                  rel_path: "dropdown-menu.tsx",
                },
              ],
            },
            {
              name: "App.tsx",
              type: "application/typescript",
              is_dir: false,
              path: "/src/components/App.tsx",
              rel_path: "App.tsx",
            },
            {
              name: "mode-toggle.tsx",
              type: "application/typescript",
              is_dir: false,
              path: "/src/components/mode-toggle.tsx",
              rel_path: "mode-toggle.tsx",
            },
          ],
        },
        {
          name: "assets",
          type: "directory",
          is_dir: true,
          path: "/src/assets",
          rel_path: "assets",
          children: [
            {
              name: "logos",
              type: "directory",
              is_dir: true,
              path: "/src/assets/logos",
              rel_path: "logos",
              children: [
                {
                  name: "react.svg",
                  type: "image/svg+xml",
                  is_dir: false,
                  path: "/src/assets/react.svg",
                  rel_path: "react.svg",
                },
                {
                  name: "vite.svg",
                  type: "image/svg+xml",
                  is_dir: false,
                  path: "/src/assets/vite.svg",
                  rel_path: "vite.svg",
                },
                {
                  name: "logo.png",
                  type: "image/png",
                  is_dir: false,
                  path: "/src/assets/logo.png",
                  rel_path: "logo.png",
                },
              ],
            },
            {
              name: "media",
              type: "directory",
              is_dir: true,
              path: "/src/assets/media",
              rel_path: "media",
              children: [
                {
                  name: "video-background.mp4",
                  type: "video/mp4",
                  is_dir: false,
                  path: "/src/assets/media/video-background.mp4",
                  rel_path: "video-background.mp4",
                },
              ],
            },
          ],
        },
        {
          name: "main.tsx",
          type: "application/typescript",
          is_dir: false,
          path: "/src/main.tsx",
          rel_path: "main.tsx",
        },
        {
          name: "App.css",
          type: "text/css",
          is_dir: false,
          path: "/src/App.css",
          rel_path: "App.css",
        },
      ],
    },
    {
      name: "public",
      type: "directory",
      is_dir: true,
      path: "/public",
      rel_path: "public",
      children: [
        {
          name: "favicon.ico",
          type: "image/x-icon",
          is_dir: false,
          path: "/public/favicon.ico",
          rel_path: "favicon.ico",
        },
        {
          name: "robots.txt",
          type: "text/plain",
          is_dir: false,
          path: "/public/robots.txt",
          rel_path: "robots.txt",
        },
      ],
    },
    {
      name: "node_modules",
      type: "directory",
      is_dir: true,
      path: "/node_modules",
      rel_path: "node_modules",
    },
    {
      name: "index.html",
      type: "text/html",
      is_dir: false,
      path: "/index.html",
      rel_path: "index.html",
    },
    {
      name: "package.json",
      type: "application/json",
      is_dir: false,
      path: "/package.json",
      rel_path: "package.json",
    },
    {
      name: "tsconfig.json",
      type: "application/json",
      is_dir: false,
      path: "/tsconfig.json",
      rel_path: "tsconfig.json",
    },
    {
      name: "vite.config.ts",
      type: "application/typescript",
      is_dir: false,
      path: "/vite.config.ts",
      rel_path: "vite.config.ts",
    },
  ],
};
