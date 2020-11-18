exports.createPages = ({ actions: { createPage } }) => {

    const projects = require('./src/projects/projects.json');

    projects.forEach(project => {
        createPage({
            path: `/projects/${project.id}`,
            component: require.resolve('./src/templates/Project.js'),
            context: project,
        })
    })
};