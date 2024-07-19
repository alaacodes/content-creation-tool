# Content Creation Tool

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/alacodes/content-creation-tool.git
cd content-creation-tool
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Project Structure

### Pages

- **Home Page**: Displays the image gallery.
  ```typescript:src/pages/index.tsx
  startLine: 1
  endLine: 13
  ```

- **Edit Image Page**: Allows users to edit and download images.
  ```typescript:src/pages/edit/[id].tsx
  startLine: 1
  endLine: 85
  ```

- **API Route**: Example API route.
  ```typescript:src/pages/api/hello.ts
  startLine: 1
  endLine: 13
  ```

### Components

- **ImageCard**: Displays individual images in the gallery.
  ```typescript:src/components/ImageCard.tsx
  startLine: 1
  endLine: 20
  ```

### Services

- **Image Service**: Fetches images and constructs image URLs.
  ```typescript:src/services/imageService.ts
  startLine: 1
  endLine: 24
  ```

### Utilities

- **Pagination Utility**: Paginates arrays.
  ```typescript:src/utils/pagination.ts
  startLine: 1
  endLine: 3
  ```

### Styles

- **Global Styles**: Contains global CSS styles.
  ```css:src/styles/globals.css
  startLine: 1
  endLine: 160
  ```

## Configuration

### Next.js Configuration

- **Next.js Config**: Basic Next.js configuration.
  ```next.config.mjs
  startLine: 1
  endLine: 7
  ```

### TypeScript Configuration

- **tsconfig.json**: TypeScript configuration for the project.
  ```json:tsconfig.json
  startLine: 1
  endLine: 22
  ```

### ESLint Configuration

- **.eslintrc.json**: ESLint configuration for the project.
  ```json:.eslintrc.json
  startLine: 1
  endLine: 4
  ```

### Tailwind CSS Configuration

- **tailwind.config.ts**: Tailwind CSS configuration.
  ```typescript:tailwind.config.ts
  startLine: 1
  endLine: 20
  ```

- **PostCSS Configuration**: PostCSS configuration for Tailwind CSS.
  ```postcss.config.mjs
  startLine: 1
  endLine: 9
  ```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
This project is licensed under the [MIT License](LICENSE).