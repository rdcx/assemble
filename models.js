// faux database

var containers = exports.containers = [];

containers.push({ name: 'Apache', image: 'rosschater/mongodb', id: 0 });
containers.push({ name: 'NodeJS', image: 'rosschater/nodejs', id: 1 });
containers.push({ name: 'NewAPP', image: 'rosschater/newapp', id: 2 });
containers.push({ name: 'Ruby', image: 'ruby:latest', id: 3 });

var dockerhosts = exports.dockerhosts = [];

dockerhosts.push({ name: 'Samaran', containers: [containers[0], containers[1],], id: 0 });
dockerhosts.push({ name: 'Kalam', containers: [containers[2]], id: 1 });
dockerhosts.push({ name: 'Barthelom', containers: [], id: 2 });
dockerhosts.push({ name: 'Slimline', containers: [containers[3]], id: 3 });
dockerhosts.push({ name: 'Corker', containers: [], id: 4 });

var users = exports.users = [];

users.push({ name: 'TJ', dockerhosts: [dockerhosts[0], dockerhosts[1], dockerhosts[2]], id: 0  });
users.push({ name: 'Guillermo', dockerhosts: [dockerhosts[3]], id: 1 });
users.push({ name: 'Nathan', dockerhosts: [], id: 2 });
