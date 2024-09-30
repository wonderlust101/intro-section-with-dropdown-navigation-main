declare global {
    type links = {
        title: string,
        subLinks: subLinks[]
    }

    type subLinks = {
        title: string;
        icon: string;
    }
}

export {};