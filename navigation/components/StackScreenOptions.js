import Constants from '../../constants/constants';

/**
 * @description Tab bar screen options to use for all screens
 */
const SCREEN_OPTIONS = {
    headerShown: true,
    headerTintColor: Constants.SECONDARY_COL,
    headerStyle: {
        backgroundColor: Constants.PRIMARY_COL,
    },
    // show back button without text
    headerBackTitleVisible: false,
};

export default SCREEN_OPTIONS;
