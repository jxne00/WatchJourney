/**
 * @description Function to determine whether to hide or show tab bar
 */
const getTabBarVisibility = (route) => {
    // check if route state exists
    const routeName = route.state
        ? // get route name if state exists
          route.state.routes[route.state.index].name
        : // default
          route.params?.screen || 'LoginScreen';

    // hide tab bar on the MovieDetailPage screen
    if (routeName === 'MovieDetailPage') {
        return false;
    }

    return true;
};

export default getTabBarVisibility;
