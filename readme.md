# HTTP Server

This project is a simple HTTP server implemented in Python. It is designed to handle basic HTTP requests and serve static files.

## Features

- Handles GET and POST requests
- Serves static files from a specified directory
- Simple routing mechanism

## Requirements

- Node.js 20.18.0

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/httpServer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd httpServer
   ```
3. Install the required dependencies:
   ```sh
   npm i
   ```

The server will start on `http://localhost:8000` by default. You can change the port by modifying the `PORT` variable in `index.js`.

## Load Testing

**Warning:** The load test script is designed to simulate heavy traffic to the server. Running this script can consume significant system resources and may cause your laptop to become unresponsive or crash. Use with caution and ensure you have saved all your work before running the load test.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
