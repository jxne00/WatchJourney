/**
 * @description: Data for "Settings" screen
 * @param name: name of each category
 * @param items: options under each category
 * @param type: option type ('toggle' | 'select' | 'more')
 */
const OPTIONS = [
    /* ========-- "Preferences" section --======== */
    {
        name: 'General',
        items: [
            {
                id: 'notif',
                icon: 'notifications',
                label: 'Notifications',
                type: 'toggle',
            },
            {
                id: 'lang',
                icon: 'language',
                label: 'Language',
                type: 'select',
            },
        ],
    },
    /* ========-- "Appearance" section --======== */
    {
        name: 'Appearance',
        items: [
            {
                id: 'theme',
                icon: 'brightness-4',
                label: 'Dark Mode',
                type: 'toggle',
            },
        ],
    },
    /* ========-- "Help & Support" section --======== */
    {
        name: 'Help & Support',
        items: [
            {
                id: 'faq',
                icon: 'help',
                label: 'FAQ',
                type: 'more',
            },
            {
                id: 'bug',
                icon: 'bug-report',
                label: 'Report a Bug',
                type: 'more',
            },
        ],
    },
];

export default OPTIONS;
