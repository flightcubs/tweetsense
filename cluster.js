// Load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const cluster = require('cluster');
const os = require('os');

// Enable load balancing over multiple cores on one machine
// using Nodes cluster module
if (cluster.isMaster) {
  console.log(`Firing up a cluster of node workers...`);
  console.log(`Master PID: ${process.pid}`);

  // If this cluster is loaded as the master process
  // we fork the server to the number of CPUs available
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i<cpus; i++) {
    cluster.fork();
  }
  cluster.fork();

  // Automatically start a new server if one crashes
  // (not manually disconnected or killed by the master process)
  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect){
      console.log(`Worker ${worker.id} crashed. \nStarting a new server...`);
      cluster.fork();
    }
  });

  // Allow the user to gracefully restart all workers in sequence. Unix only.
  // Called by $ sudo kill -SIGUSR2 [masterPID]
  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);
    console.log("Received SIGUSR2 from system");
    console.log("There are " + workers.length + " workers running");

    const restartWorker = (workerIndex) => {
      const worker = workers[workerIndex];
      if (!worker) return;

      // Fork on exit when the worker is disconnected
      worker.on('exit', () => {
        if (!worker.exitedAfterDisconnect) return;
        console.log(`Exited process ${worker.process.pid}`);
        // Recursively restart the next worker once the fork is complete
        cluster.fork().on('listening', () => {
          restartWorker(workerIndex + 1)
        });
      })

      // Disconnect the current worker
      worker.disconnect();
    }

    // Start the restarting function with the first worker
    restartWorker(0);
  });


  var tweetsense = require('./modules/tweetsense/tweetsense');

  setInterval(tweetsense.runForEachTopic, 3600000);

} else {
  // The application runs as a worker.
  require('./server');
}
