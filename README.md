# The Definitive QR Code Generator & Image Background Remover

[Click Here to Test the Live Application :)](https://diego4lbarracin.github.io/The-Definitive-QR-Code-Generator-Image-Background-Remover/)
![Project Screenshot](https://raw.githubusercontent.com/diego4lbarracin/Diego_Personal_Website/refs/heads/main/public/images/projects/The_QR_BR.png)

This is a “client-based” web application with 2 productivity tools available for free, a QR code generator and a background image remover. The process of either creating the QR code and removing the background of images happens on the client’s browser, deleting the need for an external backend service to handle those requests. To generate the QR codes, the `qrcode` _JavaScript_ library is currently used, on the other hand, for removing the background of images, the `@imgly/background-removal` _npm package_ is used, which runs an AI model on the browser that analyzes the image provided by the user and removes the background of it.

---

## Features

Both feautres are **FREE** and can be used as many times as you want.

### QR Code Generator

- Generate and download high quality QR codes by just providing a valid URL.

### Background Remover

- Remove the background of any image by just either drag or upload the desired picture, wait for the AI model to do its magic and, ta dah, download your image with the background removed.

### Mobile & Desktop Available

- Responsive UI that allows users to use the tool on mobile and desktop devices comfortably.

---

## Deployment

The project is currently deployed on GitHub. There is a CI/CD pipeline that builds and runs the code on the main branch using GitHub actions based on the instructions inside the file `.github/workflows/deploy.yml`.

---

## Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Styling**: TailwindCSS 3.4
- **QR Code Library**: qrcode 1.5.4
- **Background Removal**: @imgly/background-removal 1.7.0

---

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── features/            # Feature-based modules
│   │   ├── background-remover/
│   │   ├── donate/
│   │   ├── home/
│   │   └── qr-code/
│   ├── hooks/               # Custom React hooks
│   ├── layout/              # Layout components
│   ├── pages/               # Page components
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   └── constants/           # App constants and config
├── public/                  # Static assets
└── ...config files
```

---

Developed using a ton of AI by diego4lbarracin

If you find this useful, consider giving it a ⭐!

</div>
