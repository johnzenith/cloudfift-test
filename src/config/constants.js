export const FONT_FAMILY = {
    firaSans: 'Fira Sans, sans-serif',
};

export const CURRENCY_SYMBOLS = {
    naira: '₦',
};

export const DASHBOARD_DRAWER = {
    width: 294,
    height: 85,
    listItems: {
        'overview': {
            icon:  {
                url: 'icons/overview.svg'
            },
            label:    'Overview',
            children: {}, // for sub-menu implementation
        },
        'investment': {
            icon:  {
                url: 'icons/investment.svg',
            },
            label: 'Investment',
        },
        'transactions': {
            icon:  {
                url: 'icons/transaction.svg',
            },
            label: 'Transactions',
        },
        'inviteFriends': {
            icon:  {
                url: 'icons/share.svg',
            },
            label: 'Invite Friends',
        },
        'downloadStatement': {
            icon:  {
                url: 'icons/download.svg',
            },
            label: 'Download Statement',
        },
    }
};