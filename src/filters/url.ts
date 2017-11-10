export function url(path: string) : string {
    return `/${path}`;
}

export function authorDetails(author:{id:number}): string {
    return url(`author/details/${author.id}`);
}

export function authorAdd() : string {
    return url('author/add');
}