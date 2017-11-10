export function url(path: string) : string {
    return `/${path}`;
}

export function authorDetails(author:{id:number}): string {
    return url(`author/details/${author.id}`);
}