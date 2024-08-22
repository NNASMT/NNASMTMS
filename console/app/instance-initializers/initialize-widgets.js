import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function initialize(application) {
    const universe = application.lookup('service:universe');
    const defaultWidgets = [];

    universe.registerDefaultDashboardWidgets(defaultWidgets);
    universe.registerDashboardWidgets(defaultWidgets);
}

export default {
    initialize,
};
