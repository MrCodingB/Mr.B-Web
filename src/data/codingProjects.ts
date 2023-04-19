import { Project } from '../models/project';

import PostmanCollectionExplorerIcon from '../assets/Postman-Collection-Explorer-icon.png';
import FluentRestApi from '../assets/Fluent-Rest-API-Source-Code.png';
import FurierDrawerGClef from '../assets/Fourier-Drawer-Screenshot-G-Clef.png';
import MinecraftWorldViewer from '../assets/MinecraftWorldViewer-Screenshot.png';

export const codingProjects: Project[] = [
  {
    images: [
      PostmanCollectionExplorerIcon
    ],
    content: `
# Postman Collection Explorer

The Postman Collection Explorer is an extension for
[Visual Studio Code](https://code.visualstudio.com/). It can be
used to view, edit and manage [Postman](https://www.postman.com/)
collections and test APIs.

With Postman Collection Explorer you can:
- Create and manage Postman collections
- Write API tests with syntax completion
- Run individual requests

[Take a look](https://github.com/MrCodingB/Postman-Collection-Explorer-VS-Code)
  `
  },
  {
    images: [
      FluentRestApi
    ],
    content: `
# Fluent REST API

The Fluent REST API package adds a way to create API specifications
and use API endpoints in a typesafe manner in typescript. With this you
can fluently access the endpoints of your backend server without the need
to rely on hard coded url strings in potentially multiple places of your program.

Install via: \`npm i fluent-rest-api\`

[Take a look](https://github.com/MrCodingB/Fluent-Rest-Api)
  `
  },
  {
    images: [
      FurierDrawerGClef
    ],
    content: `
# Fourier Svg Drawer

The fourier svg drawer takes an svg path and draws it by approximating
a combination of rotating vectors that follow the provided path in the
manner of a periodic complex function.

[Take a look](https://github.com/MrCodingB/fourier-svg-drawer)
    `
  },
  {
    images: [
      MinecraftWorldViewer
    ],
    content: `
# Minecraft World Viewer

With the Minecraft World Viewer you can render a map from a minecraft
level file, allowing you to take a look at what you've explored and created.

[Take a look](https://github.com/MrCodingB/MinecraftWorldViewer)
  `
  }
];
