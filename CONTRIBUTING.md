# Contributing to OpenTajweed

First off, thank you for considering contributing to OpenTajweed! Your help is essential for keeping it great. This is an open-source project, and we welcome any contribution, from fixing a typo to implementing a new feature.

## How Can I Contribute?

### 🐛 Reporting Bugs

-   **Ensure the bug was not already reported** by searching the repository's issue tracker.
-   If you're unable to find an open issue addressing the problem, **open a new one**. Be sure to include a **title and clear description**, as much relevant information as possible, and a clear set of steps to reproduce the issue.

### ✨ Suggesting Enhancements

-   Open a new issue to discuss your enhancement idea. This is the best way to ensure your suggestion aligns with the project's goals before you put a lot of effort into it.

### ✍️ Content & Translation Contributions

-   **Content Corrections**: If you find an error in the Tajweed rules or examples, please open an issue with the chapter name and the correction.
-   **New Content**: If you wish to add new books or chapters, please open an issue first to discuss the structure. Content is written in HTML within TypeScript template literals in the `constants/` directory.
-   **Translations**: We would love to support more languages. You can contribute by adding a new locale file in `i18n/locales.ts` and translating the keys.

### 💻 Code Contributions

1.  **Fork** the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`.
3.  Make your changes and commit them with a descriptive message.
4.  Push to your fork: `git push origin feature/your-feature-name`.
5.  Open a **Pull Request** to the `main` branch of the original repository.

## 🛠️ Project Structure

-   `index.html`: The main entry point. Contains the basic structure, theme variables, and Tailwind CSS configuration.
-   `index.tsx`: The root of the React application.
-   `components/`: Contains all React components.
-   `contexts/`: Holds React Context providers for global state (Language, Theme, Settings).
-   `constants/`: Contains the lesson content for each book, separated by language.
-   `i18n/`: Contains translation strings for the UI.

## 🎨 Styleguides

-   **Code**: We use React with TypeScript and function components. Please follow the existing code style.
-   **Styling**: We use Tailwind CSS with a custom theme defined in `index.html`. Please use the semantic color variables (`bg-background`, `text-primary`, etc.) instead of hardcoded colors.
-   **Commit Messages**: Please write clear and concise commit messages (e.g., `feat: Add dark mode toggle`, `fix: Correct quiz scoring logic`).

We look forward to your contributions!
