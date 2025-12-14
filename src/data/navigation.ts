export type NavItem = {
    label: string;
    to?: string;
    children?: NavItem[];
};

export const primaryNavigation: NavItem[] = [
    {
        label: "Our Club",
        children: [
            { label: "Membership", to: "/membership" },
            { label: "Coaching Team", to: "/coaching-team" },
            { label: "Club Wellbeing and Support", to: "/your-wellbeing" },
        ],
    },
    { label: "Teams", to: "/teams" },
    { label: "Club News", to: "/club-news" },
    { label: "Our History", to: "/our-history" },
    { label: "Jack Kyle Foundation", to: "/jack-kyle-foundation" },
    { label: "Join Us", to: "/join-us" },
    { label: "Scholarship Support", to: "/scholarship-support" },
];

export const footerNavigation: NavItem[] = [
    { label: "Membership", to: "/membership" },
    { label: "Club News", to: "/club-news" },
    { label: "Our History", to: "/our-history" },
    { label: "Join Us", to: "/join-us" },
];