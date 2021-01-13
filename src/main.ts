import Server from './server/Server';
import planetsRoutes from './routes/planets.routes';


(async function main() {
  try {
    const server = new Server();
    const application = await server.bootstrap([
      planetsRoutes,
    ]);
    console.log(`Server is listening on port ${application.address().port}`);
    console.log('[[[[[ Press Ctrl + c, to stop the server ]]]]]');
  } catch (error) {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
  }
}());
