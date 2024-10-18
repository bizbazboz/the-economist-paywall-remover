# The Economist Paywall Remover

## Description

Welcome to The Economist Paywall Remover repository. This project offers a solution for bypassing the paywall on The Economist website, enabling users to access articles and content without needing a subscription. The tools provided in this repository are easy to install and use, making premium content accessible to everyone.

## Features

- **Paywall Removal**: Efficiently removes the paywall and overlays that restrict access to The Economist articles.
- **User-Friendly Installation**: Simple installation process compatible with popular web browsers, including Chrome and Firefox.
- **Regular Updates**: The script is regularly updated to ensure compatibility with the latest changes on The Economist website.
- **Open Source**: The project is open source and licensed under the GNU General Public License v3.0, promoting community contributions and transparency.
<br><br><br>

# Getting Started

### Prerequisites

- **Google Chrome** or **Mozilla Firefox** browser.
- **Git** for cloning the repository.
- **Tampermonkey** or a similar userscript manager.

### Installation

1.**Clone the Repository**: Open your terminal and clone the repository to your local machine using the following command:
    
  ```bash
    git clone <https://github.com/bizbazboz/the-economist-paywall-remover.git>
   ```

2.**Install the Extension**:

**Chrome:**

- Go to `chrome://extensions/` in your browser.

- Enable "Developer Mode" in the top right corner.

- Click on "Load unpacked" and select the cloned repository folder.
<br>

**Firefox:**

- Go to `about:debugging#/runtime/this-firefox` in your browser.

- Click on "Load Temporary Add-on" and select the cloned repository folder.
<br>

**Install the Tampermonkey Script**:
- Open Tampermonkey in your browser.
- Click on "Create a new script" and paste the contents of `Remove_Economist_Paywall_and_Overlays-1.2.user.js`.
- Save and enable the script.

## **Usage**

1. **Activate the Extension**: Once installed, ensure the extension is active by checking the extension icon in your browser toolbar.
2. **Access Articles**: Navigate to The Economist website and the paywall should be removed automatically, allowing you to access the content freely.

## **Contributing**

We welcome contributions from the community to enhance the functionality and compatibility of the script. Here’s how you can contribute:

- **Fork the Repository**: Click the "Fork" button at the top right of this repository's page.
- **Create a Branch**: Create a new branch for your feature or bugfix.
    
    ```bash
    git checkout -b feature/your-feature-name
    ```
    
- **Make Your Changes**: Implement your feature or bugfix.
- **Commit Your Changes**: Commit your changes with a descriptive message.
    
    ```bash
    git commit -m "Add feature: your-feature-name"
    ```
    
- **Push to the Branch**: Push your changes to the new branch.
    
    ```bash
    git push origin feature/your-feature-name
    ```
    
- **Create a Pull Request**: Submit a pull request detailing your changes, enhancements, or bugfixes.

## **License**

This project is licensed under the GNU General Public License v3.0. See the `LICENSE` file for more information.

## **Support**

For any issues or support, please open an issue on GitHub or contact the maintainers. We are here to help and ensure the extension works seamlessly for everyone.
